import { GameObjectProps } from './types';

export class GameObject {
  private _x: number;

  private _y: number;

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }

  constructor({ x, y }: GameObjectProps) {
    this._x = x;
    this._y = y;
  }
}
