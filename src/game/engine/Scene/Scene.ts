import { Game } from '../Game';
import { GameObject } from '../GameObject';
import { Resources } from '../Resources';
import { SceneProps } from './types';

export abstract class Scene {
  private _key: string;

  private _displayList: GameObject[];

  private _game: Game;

  private _res: Resources;

  private _isActive: boolean;

  // private _updateList: unknown[];

  public get key() {
    return this._key;
  }

  public get game() {
    return this._game;
  }

  public get displayList() {
    return this._displayList;
  }

  public get res() {
    return this._res;
  }

  constructor(props: SceneProps) {
    const { key, game } = props;

    this._key = key;
    this._displayList = [];
    this._game = game;
    this._res = new Resources();
    this._isActive = false;
  }

  protected init() {}

  private async _preload() {
    await this.preload();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected async preload() {}

  private _create() {
    this.create();
  }

  protected create() {}

  private _render() {
    this.render();
    this._isActive = true;
  }

  protected render() {}

  start() {
    this._preload().then(() => {
      this._create();
      this._render();
    });
  }

  public update(delay: number) {
    if (!this._isActive) return;

    this._displayList.forEach((element) => {
      element.update(delay);
    });
  }

  public shutdown() {}

  add(item: GameObject) {
    this._displayList.push(item);
  }
}
