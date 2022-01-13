import { PhysicBody } from '../../PhysicBody';
import { Scene } from '../../Scene';
import { DataObject, GameObjectProps } from './types';

export class GameObject {
  public x: number;

  public y: number;

  /** parent scene */
  public scene: Scene;

  public key: string;

  public data: DataObject;

  protected body: PhysicBody;

  public getData(key: string) {
    return this.data[key];
  }

  public setData(...{ key, value }: DataObject) {
    this.data[key] = value;
  }

  constructor(props: GameObjectProps) {
    const { scene, x, y, key } = props;
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.key = key;
    this.data = {};
    this.body = new PhysicBody(0, 0);
  }

  public play(animationName: string) {
    console.log(animationName);
  }

  public render() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(delay: number) {}
}
