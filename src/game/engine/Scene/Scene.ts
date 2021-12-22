import { Game } from '../Game';
import { GameObject } from '../GameObject';
import { Loader } from '../Resources';
import { SceneProps, SceneResourcesConfig } from './types';

export abstract class Scene {
  private _key: string;

  private _displayList: GameObject[];

  private _game: Game;

  private _res: Loader;

  // private _updateList: unknown[];

  public abstract create(): void;

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
    this.create();
    this._res = new Loader();
  }

  protected init() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected preload() {}

  public update(delay: number) {
    this._displayList.forEach((element) => {
      element.update(delay);
    });
  }

  protected render() {}

  public start() {}

  public shutdown() {}

  protected async loadResources(resourses: SceneResourcesConfig, path: string) {
    await this._res.loadResources(resourses, path);
  }

  add(item: GameObject) {
    this._displayList.push(item);
  }
}
