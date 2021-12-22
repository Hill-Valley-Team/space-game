import { GameObject } from '../engine/GameObject';
import { Sprite } from '../engine/Sprite';
import { EntityProps } from './types';

export class Entity extends GameObject {
  private _type: string;

  private _sprite: Sprite | null;

  public get type() {
    return this._type;
  }

  public get sprite() {
    return this._sprite;
  }

  constructor(props: EntityProps) {
    const { scene, x, y, key, type } = props;
    super({ scene, x, y, key });

    this._type = type;
    this._sprite = null;
  }
}
