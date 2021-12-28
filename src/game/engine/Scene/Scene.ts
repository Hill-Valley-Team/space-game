import { GameObject } from '../GameObjects';
import { SceneManager } from '../SceneManager';
import type { EventObject, SceneProps } from './types';

export abstract class Scene {
  private key: string;

  public displayList: GameObject[];

  public scene: SceneManager;

  public isActive: boolean;

  public events: EventObject[];

  public getEvent(key: string) {
    return this.events.find((item) => item.key === key);
  }

  public setEvent(key: string, event: (event: Event) => void) {
    const index = this.events.findIndex((item) => item.key === key);

    if (index === -1) {
      this.events.push({ key, event });
    } else {
      this.events[index] = { key, event };
    }
  }

  constructor(props: SceneProps) {
    const { key, scene } = props;

    this.key = key;
    this.displayList = [];
    this.scene = scene;
    this.isActive = false;
    this.events = [];
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

  public destroy() {}

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

  add(item: GameObject) {
    this.displayList.push(item);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public delete(obj: GameObject) {}
}
