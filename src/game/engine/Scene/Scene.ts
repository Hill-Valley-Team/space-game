import { Game } from '../Game';
import { GameObject } from '../GameObjects';
import { SceneProps } from './types';

export abstract class Scene {
  private _key: string;

  private _displayList: GameObject[];

  private _game: Game;

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

  public get isActive() {
    return this._isActive;
  }

  constructor(props: SceneProps) {
    const { key, game } = props;

    this._key = key;
    this._displayList = [];
    this._game = game;
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
    this._game.scene = this;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public render(dt?: number) {}

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
