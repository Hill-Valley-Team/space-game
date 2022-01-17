import { PLAYER_HEALTH, PLAYER_SPEED } from '../consts';
import { Sprite } from '../engine/GameObjects';
import { Keyboard as K } from '../engine/Inputs';
import { Scene } from '../engine/Scene';
import { sceneMainResources } from '../scenes/SceneMain/resources';

export class Player extends Sprite {
  static key = 'Player';

  static spriteKey = 'sprSpaceShip';

  public speed: number;

  public health: number;

  public isMoveRight: boolean;

  public isMoveLeft: boolean;

  constructor(scene: Scene) {
    super({
      scene,
      x: scene.game.width * 0.5,
      y: scene.game.height * 0.6,
      key: Player.key,
      spriteKey: Player.spriteKey,
      source: scene.game.res.getResource(Player.key),
    });

    const playerImgData = sceneMainResources.spritesheets?.find(
      (item) => item.name === this.spriteKey,
    );

    if (playerImgData) {
      const { options } = playerImgData;
      const { frameWidth, frameHeight } = options;
      this.height = frameHeight;
      this.width = frameWidth;
    }

    this.speed = PLAYER_SPEED;
    this.health = PLAYER_HEALTH;
    this.isMoveLeft = false;
    this.isMoveRight = false;
    //this.play(this.key); // TODO sprite animation
  }

  init() {
    this.addToScene();
    this.addListeners();
  }

  getDamage(damage: number) {
    this.health -= damage;
  }

  moveLeft(flag: boolean) {
    if (flag !== this.isMoveLeft) {
      this.body.velocity.x = -this.speed;
      this.isMoveLeft = !this.isMoveLeft;
    }
  }

  moveRight(flag: boolean) {
    if (flag !== this.isMoveRight) {
      this.body.velocity.x = this.speed;
      this.isMoveRight = !this.isMoveRight;
    }
  }

  update(delay: number) {
    const newX = this.x + this.body.velocity.x! * delay;
    const newY = this.y + this.body.velocity.y! * delay;

    if (newX < this.scene.game.width && newX > 0) this.x = newX;
    if (newY < this.scene.game.height && newY > 0) this.y = newY;

    if (!this.isMoveRight && !this.isMoveLeft) {
      this.body.setVelocity(0, 0);
    }
  }

  render() {
    this.scene.game.add.image(this.getProps());
  }

  addListeners() {
    const onKeyRight = () => {
      this.moveRight(true);
    };

    const onKeyRightStop = () => {
      this.moveRight(false);
    };

    const onKeyLeft = () => {
      this.moveLeft(true);
    };
    const onKeyLeftStop = () => {
      this.moveLeft(false);
    };

    this.scene.events.addListener(this, K.NAMES.KEYDOWN, onKeyRight, K.CODES.ARROW_RIGHT);
    this.scene.events.addListener(this, K.NAMES.KEYDOWN, onKeyLeft, K.CODES.ARROW_LEFT);

    this.scene.events.addListener(this, K.NAMES.KEYUP, onKeyRightStop, K.CODES.ARROW_RIGHT);
    this.scene.events.addListener(this, K.NAMES.KEYUP, onKeyLeftStop, K.CODES.ARROW_LEFT);
  }
}
