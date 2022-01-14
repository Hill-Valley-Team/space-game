import { COINS_SPEED, COINS_VALUE } from '../consts';
import { Sprite } from '../engine/GameObjects';
import { CoinsProps } from './types';

export class Coins extends Sprite {
  private _type: string;

  private _speed: number;

  private _value: number;

  public get type() {
    return this._type;
  }

  public get speed() {
    return this._speed;
  }

  public get value() {
    return this._value;
  }

  constructor(props: CoinsProps) {
    const { scene, x, y, key, source, width, height } = props;

    super({ scene, x, y, key, source, width, height });

    this._type = 'Coins';
    this._speed = COINS_SPEED;
    this._value = COINS_VALUE;
  }

  update(delay: number) {
    this.body.setVelocity(0, this.speed);
    this.x += this.body.velocity.x! * delay;
    this.y += this.body.velocity.y! * delay;
  }
}
