import { PLAYER_HEALTH, PLAYER_SPEED } from '../consts';
import { GameObject, Sprite } from '../engine/GameObjects';
import { Keyboard as K } from '../engine/Inputs';
import { Scene } from '../engine/Scene';
import { sceneMainResources } from '../scenes/SceneMain/resources';
import { Obstacle } from './Obstacle';

export enum PlayerAnimationKeys {
  FIRE = 'fire',
  RIGHT = 'right',
  LEFT = 'left',
  CRASH = 'crash',
}

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
      source: scene.game.res.getResource(Player.spriteKey),
      type: Player.key,
    });

    const playerImgData = sceneMainResources.spritesheets?.find(
      (item) => item.name === this.spriteKey,
    );

    if (playerImgData) {
      const { options } = playerImgData;
      const { frameWidth, frameHeight, colls, rows } = options;
      this.height = frameHeight;
      this.width = frameWidth;
      this.frames.init(colls ?? 1, rows ?? 1);
    }

    this.speed = PLAYER_SPEED;
    this.health = PLAYER_HEALTH;
    this.isMoveLeft = false;
    this.isMoveRight = false;
    this.animation.add({ key: PlayerAnimationKeys.FIRE, type: 'FrameRow', frameRow: 1 });
    this.animation.add({
      key: PlayerAnimationKeys.CRASH,
      type: 'FrameRow',
      frameRow: 2,
      autoRun: false,
      repeat: false,
      speed: 10,
    });
    this.animation.add({
      key: PlayerAnimationKeys.RIGHT,
      type: 'MoveRight',
      speed: this.speed,
      autoRun: false,
    });
    this.animation.add({
      key: PlayerAnimationKeys.LEFT,
      type: 'MoveLeft',
      speed: this.speed,
      autoRun: false,
    });
    this.play();
  }

  init() {
    this.addToScene();
    this.addListeners();
  }

  getDamage(damage: number) {
    this.health -= damage;
  }

  isOnGameBounds() {
    return this.scene.game.isOnGameBounds({
      x: this.x,
      y: this.y,
      paddingRight: this.width + 50,
      paddingLeft: 50,
      paddingTop: 50,
      paddingBottom: this.height + 50,
    });
  }

  moveLeft(flag: boolean) {
    const anim = this.animation.get(PlayerAnimationKeys.LEFT);

    if (this.isOnGameBounds().isOnLeft) {
      anim?.stop();
      this.isMoveLeft = false;
      return;
    }

    if (flag !== this.isMoveLeft) {
      if (flag) {
        anim?.start();
      } else {
        anim?.stop();
      }
      this.isMoveLeft = !this.isMoveLeft;
    }
  }

  moveRight(flag: boolean) {
    const anim = this.animation.get(PlayerAnimationKeys.RIGHT);

    if (this.isOnGameBounds().isOnRight) {
      anim?.stop();
      this.isMoveRight = false;
      return;
    }

    if (flag !== this.isMoveRight) {
      if (flag) {
        anim?.start();
      } else {
        anim?.stop();
      }
      this.isMoveRight = !this.isMoveRight;
    }
  }

  onRender() {
    if (!this.isMoveRight && !this.isMoveLeft) {
      this.body.setVelocity(0, 0);
    }

    const imgToRender = this.getProps();
    if (imgToRender) {
      this.scene.game.add.sprite(imgToRender);
    }
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

  collided(object: GameObject) {
    if (object instanceof Obstacle) {
      this.getDamage(object.damage);
      this.animation.get(PlayerAnimationKeys.CRASH)?.start();
    }
  }
}
