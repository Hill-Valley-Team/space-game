import { Game } from '../Game';
import { GameObject, Sprite } from '../GameObjects';
import { EventObject, SceneProps } from './types';

export abstract class Scene {
  private _key: string;

  private _displayList: GameObject[];

  private _game: Game;

  private _isActive: boolean;

  private _events: EventObject[];

  public get key() {
    return this._key;
  }

  public get game() {
    return this._game;
  }

  public get displayList() {
    return this._displayList;
  }

  public get isActive() {
    return this._isActive;
  }

  public set isActive(val: boolean) {
    this._isActive = val;
  }

  public get events() {
    return this._events;
  }

  public getEvent(key: string) {
    return this._events.find((item) => item.key === key);
  }

  public setEvent(key: string, event: (event: Event) => void) {
    const index = this._events.findIndex((item) => item.key === key);

    if (index === -1) {
      this._events.push({ key, event });
    } else {
      this._events[index] = { key, event };
    }
  }

  constructor(props: SceneProps) {
    const { key, game } = props;

    this._key = key;
    this._displayList = [];
    this._game = game;
    this._isActive = false;
    this._events = [];
  }

  protected init() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected async preload() {}

  protected create() {}

  public render() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  start() {
    this.preload().then(() => {
      this.create();
      this.render();
    });
  }

  public update(delay: number) {
    if (!this._isActive) return;
    this._displayList.forEach((element) => {
      const elHeight = element instanceof Sprite ? element.height! : 50;
      const elWidth = element instanceof Sprite ? element.height! : 50;

      if (
        element.y <= 0 - elHeight ||
        element.y > this.game.height ||
        element.x >= this.game.width ||
        element.x <= 0 - elWidth
      ) {
        this.delete(element);
      } else {
        element.update(delay);
      }
    });
  }

  add(item: GameObject) {
    this._displayList.push(item);
  }

  delete(obj: GameObject) {
    const index = this.displayList.findIndex((item) => item === obj);
    this.displayList.splice(index, 1);
    console.log(this.displayList);
  }
}
