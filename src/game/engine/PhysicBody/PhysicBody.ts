import { Velocity } from './types';

export class PhysicBody {
  public velocity: Velocity;

  constructor(x: number, y: number) {
    this.velocity = { x, y };
  }

  public get x() {
    return this.velocity.x;
  }

  public get y() {
    return this.velocity.y;
  }

  public setVelocity(x: number, y?: number) {
    this.velocity.x = x;
    this.velocity.y = y!;
  }
}
