import { GameObject } from '../GameObjects';
import { SceneManager } from '../SceneManager';
import type { EventsMap, SceneProps } from './types';

export abstract class Scene {
  public key: string;

  public displayList: GameObject[];

  public scene: SceneManager;

  public isActive: boolean;

  public events: EventsMap;

  public getEvent(key: string) {
    return this.events.get(key);
  }

  public setEvent(key: string, event: (event: Event) => void) {
    this.events.set(key, event);
  }

  constructor(props: SceneProps) {
    const { key, scene } = props;

    this.key = key;
    this.displayList = [];
    this.scene = scene;
    this.isActive = false;
    this.events = new Map();
  }

  protected init() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected async preload() {}

  protected create() {}

  public render() {
    this.displayList.forEach((item) => {
      item.render();
    });
  }

  public destroy() {
    this.deleteEventListeners();
    this.isActive = false;
  }

  start() {
    this.preload().then(() => {
      this.create();
      this.render();
      this.isActive = true;
    });
  }

  public update(delay: number) {
    this.displayList.forEach((item) => {
      item.update(delay);
    });
  }

  public add(item: GameObject) {
    this.displayList.push(item);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public delete(obj: GameObject) {}

  public deleteEventListeners = () => {
    if (this.events) {
      this.events.forEach((value, key) => {
        document.removeEventListener(key, value);
      });
      this.events.clear();
    }
  };
}
