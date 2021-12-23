import { Sprite } from '../engine/GameObjects';
import { PlayerProps } from './types';

export class Player extends Sprite {
  private _type: string;

  private _speed: number;

  public get type() {
    return this._type;
  }

  constructor(props: PlayerProps) {
    const { scene, x, y, key, source, width, height } = props;

    super({ scene, x, y, key, source, width, height });

    this._type = 'Player';
    this._speed = 100;

    // this.play('sprPlayer'); // TODO
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
    this.x += this.body.velocity.x! * delay;
    this.y += this.body.velocity.y! * delay;
    this._body.setVelocity(0, 0);
  }
}
