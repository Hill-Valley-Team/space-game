import { v4 as uuidv4 } from 'uuid';
import { PhysicBody } from '../../PhysicBody';
import { Scene } from '../../Scene';
import { DataObject, GameObjectProps } from './types';

export class GameObject {
  public x: number;

  public y: number;

  public width: number;

  public height: number;

  public scene: Scene;

  public key: string;

  public data: DataObject;

  public parent: GameObject | null;

  public children: Map<string, GameObject>;

  protected body: PhysicBody;

  public getData(key: string) {
    return this.data.get(key);
  }

  public setData(key: string, value: unknown) {
    this.data.set(key, value);
  }

  constructor(props: GameObjectProps) {
    const { scene, x, y, key, width, height, parent } = props;
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.key = key ?? uuidv4();
    this.data = new Map();
    this.body = new PhysicBody(0, 0);
    this.parent = null;
    this.children = new Map();
    this.parent = parent ?? null;
    this.width = width ?? 0;
    this.height = height ?? 0;
  }

  public play(animationName: string) {
    console.log(animationName);
  }

  public init() {
    this.addToScene();
  }

  protected addToScene() {
    this.scene.add(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onCollide = <T extends GameObject, P extends GameObject>(object1: T, object2: P) => {};

  private beforeRender() {
    this.children.forEach((child) => child.render());
  }

  protected onRender() {}

  public render() {
    this.beforeRender();
    this.onRender();
  }

  public delete() {
    this.scene.delete(this);
  }

  private beforeUpdate(delay: number) {
    this.children.forEach((child) => child.update(delay));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected onUpdate(delay: number) {}

  public update(delay: number) {
    this.beforeUpdate(delay);
    this.onUpdate(delay);
  }
}
