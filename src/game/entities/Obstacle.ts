import { OBSTACLE_DAMAGE, OBSTACLE_SPEED } from '../consts';
import { Sprite } from '../engine/GameObjects';
import { ObstacleProps } from './types';

export class Obstacle extends Sprite {
  private _type: string;

  private _speed: number;

  private _damage: number;

  public get type() {
    return this._type;
  }

  public get speed() {
    return this._speed;
  }

  public get damage() {
    return this._damage;
  }

  constructor(props: ObstacleProps) {
    const { scene, x, y, key, source, width, height } = props;

    super({ scene, x, y, key, source, width, height });

    this._type = 'Obstacle';
    this._speed = OBSTACLE_SPEED;
    this._damage = OBSTACLE_DAMAGE;
  }

  update(delay: number) {
    this.body.setVelocity(0, this.speed);
    this.x += this.body.velocity.x! * delay;
    this.y += this.body.velocity.y! * delay;
  }
}
