import { PLAYER_HEALTH, PLAYER_SPEED } from '../consts';
import { Sprite } from '../engine/GameObjects';
import { PlayerProps } from './types';

export class Player extends Sprite {
  private _type: string;

  private _speed: number;

  private _health: number;

  private _isMoveRight: boolean;

  private _isMoveLeft: boolean;

  public get type() {
    return this._type;
  }

  public get health() {
    return this._health;
  }

  public get isMoveLeft() {
    return this._isMoveLeft;
  }

  public set isMoveLeft(value: boolean) {
    this._isMoveLeft = value;
  }

  public get isMoveRight() {
    return this._isMoveRight;
  }

  public set isMoveRight(value: boolean) {
    this._isMoveRight = value;
  }

  constructor(props: PlayerProps) {
    const { scene, x, y, key, source, width, height } = props;

    super({ scene, x, y, key, source, width, height });

    this._type = 'Player';
    this._speed = PLAYER_SPEED;
    this._health = PLAYER_HEALTH;
    this._isMoveLeft = false;
    this._isMoveRight = false;

    //this.play(this.key); // TODO sprite animation
  }

  getDamage(damage: number) {
    this._health -= damage;
  }

  moveLeft(flag: boolean) {
    if (flag !== this._isMoveLeft) {
      this.body.velocity.x = -this._speed;
      this._isMoveLeft = !this._isMoveLeft;
    }
  }

  moveRight(flag: boolean) {
    if (flag !== this._isMoveRight) {
      this.body.velocity.x = this._speed;
      this._isMoveRight = !this._isMoveRight;
    }
  }

  update(delay: number) {
    const newX = this.x + this.body.velocity.x! * delay;
    const newY = this.y + this.body.velocity.y! * delay;

    if (newX < this.scene.game.width && newX > 0) this.x = newX;
    if (newY < this.scene.game.height && newY > 0) this.y = newY;

    if (!this._isMoveRight && !this._isMoveLeft) {
      this._body.setVelocity(0, 0);
    }
  }
}
