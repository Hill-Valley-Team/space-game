import { Game } from '../Game';
import { GameObject } from '../GameObjects';
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

  public destroy() {}

  start() {
    this.preload().then(() => {
      this.create();
      this.render();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(delay: number) {}

  public checkCollisions() {}

  add(item: GameObject) {
    this._displayList.push(item);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public delete(obj: GameObject) {}
}
