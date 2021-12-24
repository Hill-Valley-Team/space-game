import { PLAYER_HEALTH, PLAYER_SPEED } from '../consts';
import { Sprite } from '../engine/GameObjects';
import { PlayerProps } from './types';

export class Player extends Sprite {
  private _type: string;

  private _speed: number;

  private _health: number;

  public get type() {
    return this._type;
  }

  public get health() {
    return this._health;
  }

  constructor(props: PlayerProps) {
    const { scene, x, y, key, source, width, height } = props;

    super({ scene, x, y, key, source, width, height });

    this._type = 'Player';
    this._speed = PLAYER_SPEED;
    this._health = PLAYER_HEALTH;

    // this.play('sprPlayer'); // TODO
  }

  getDamage(damage: number) {
    this._health -= damage;
  }

  moveLeft() {
    this.body.velocity.x = -this._speed;
  }

  moveRight() {
    this.body.velocity.x = this._speed;
  }

  moveTop() {
    this.body.velocity.y = -this._speed;
  }

  moveDown() {
    this.body.velocity.y = this._speed;
  }

  update(delay: number) {
    const newX = this.x + this.body.velocity.x! * delay;
    const newY = this.y + this.body.velocity.y! * delay;

    if (newX < this.scene.game.width && newX > 0) this.x = newX;
    if (newY < this.scene.game.height && newY > 0) this.y = newY;

    this._body.setVelocity(0, 0);
  }
}
