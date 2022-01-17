import { Events } from '../Events/Events';
import { GameObject } from '../GameObjects';
import { SceneManager } from '../SceneManager';
import type { SceneProps } from './types';

export abstract class Scene {
  public key: string;

  public displayList: Map<string, GameObject>;

  public sceneManager: SceneManager;

  public isActive: boolean;

  public events: Events;

  get game() {
    return this.sceneManager.game;
  }

  constructor(props: SceneProps) {
    const { key, sceneManager } = props;

    this.key = key;
    this.displayList = new Map();
    this.sceneManager = sceneManager;
    this.isActive = false;
    this.events = new Events();
  }

  protected init() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected async preload() {}

  protected create() {}

  private beforeRender() {
    this.displayList.forEach((item) => {
      item.render();
    });
  }

  protected onRender() {}

  public render() {
    if (!this.isActive) return;
    this.beforeRender();
    this.onRender();
  }

  private beforeDestroy() {
    this.events.destroy();
    this.isActive = false;
  }

  protected onDestroy() {}

  public destroy() {
    this.beforeDestroy();
    this.onDestroy();
  }

  private beforeStart() {
    this.preload().then(() => {
      this.create();
      this.render();
      this.isActive = true;
    });
  }

  protected onStart() {}

  public start() {
    this.beforeStart();
    this.onStart();
  }

  private beforeUpdate(delay: number) {
    this.displayList.forEach((item) => {
      item.update(delay);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected onUpdate(delay: number) {}

  public update(delay: number) {
    this.beforeUpdate(delay);
    this.onUpdate(delay);
  }

  /** Add Child to displayList */
  public add(obj: GameObject) {
    this.displayList.set(obj.key, obj);
  }

  /** Remove Child from displayList */
  private beforeDelete(obj: GameObject) {
    this.displayList.delete(obj.key);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected onDelete(obj: GameObject) {}

  public delete(obj: GameObject) {
    this.beforeDelete(obj);
    this.onDelete(obj);
  }
}
