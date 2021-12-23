import { PhysicBody } from '../../PhysicBody';
import { Scene } from '../../Scene';
import { DataObject, GameObjectProps } from './types';

export class GameObject {
  private _x: number;

  private _y: number;

  private _scene: Scene;

  private _key: string;

  private _data: DataObject;

  protected _body: PhysicBody;

  public get x() {
    return this._x;
  }

  public set x(val: number) {
    this._x = val;
  }

  public get y() {
    return this._y;
  }

  public set y(val: number) {
    this._y = val;
  }

  public get scene() {
    return this._scene;
  }

  public get key() {
    return this._key;
  }

  public get body() {
    return this._body;
  }

  public getData(key: string) {
    return this._data[key];
  }

  public setData(...{ key, value }: DataObject) {
    this._data[key] = value;
  }

  constructor(props: GameObjectProps) {
    const { scene, x, y, key } = props;
    this._scene = scene;
    this._x = x;
    this._y = y;
    this._key = key;
    this._data = {};
    this._body = new PhysicBody(0, 0);
  }

  public play(animationName: string) {
    console.log(animationName);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(delay: number) {}
}
