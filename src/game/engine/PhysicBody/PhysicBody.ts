import { Velocity } from './types';

export class PhysicBody {
  private _velocity: Velocity;

  constructor(x: number, y: number) {
    this._velocity = { x, y };
  }

  public get x() {
    return this._velocity.x;
  }

  public get y() {
    return this._velocity.y;
  }

  public get velocity() {
    return this._velocity;
  }

  public setVelocity(x: number, y: number) {
    this._velocity.x = x;
    this._velocity.y = y;
  }
}
