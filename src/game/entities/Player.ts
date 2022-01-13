import { PLAYER_HEALTH, PLAYER_SPEED } from '../consts';
import { Sprite } from '../engine/GameObjects';
import { PlayerProps } from './types';

export class Player extends Sprite {
  public type: string;

  public speed: number;

  public health: number;

  public isMoveRight: boolean;

  public isMoveLeft: boolean;

  constructor(props: PlayerProps) {
    const { scene, x, y, key, source, width, height } = props;

    super({ scene, x, y, key, source, width, height });

    this.type = 'Player';
    this.speed = PLAYER_SPEED;
    this.health = PLAYER_HEALTH;
    this.isMoveLeft = false;
    this.isMoveRight = false;

    //this.play(this.key); // TODO sprite animation
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

    if (newX < this.scene.scene.game.width && newX > 0) this.x = newX;
    if (newY < this.scene.scene.game.height && newY > 0) this.y = newY;

    if (!this.isMoveRight && !this.isMoveLeft) {
      this.body.setVelocity(0, 0);
    }
  }
}
