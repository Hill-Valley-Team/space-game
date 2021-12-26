/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO
import { Game } from '../Game';
import { Scene } from '../Scene';
import { SceneConfig, ScenesConfig } from './types';

export class SceneManager {
  private _game: Game;

  private _sceneConfig: ScenesConfig;

  private _scenes: Scene[];

  private _current: Scene | null;

  public get game() {
    return this._game;
  }

  public get current() {
    return this._current!;
  }

  public set current(scene: Scene) {
    this._current = scene;
  }

  public getScene(key: string) {
    return this._scenes.find((item) => item.key === key);
  }

  constructor(game: Game, config: ScenesConfig) {
    this._game = game;
    this._sceneConfig = config;
    this._scenes = [];
    this._current = null;
  }

  private create(key: string) {
    const NewScene = this._sceneConfig[key].scene;
    this.current = new NewScene(this.game);
    console.log(this.current);
  }

  public start(key: string) {
    if (this.current) {
      this.swap(this.current.key, key);
    } else {
      this.create(key);
      // this.current.start();
    }
  }

  public get(key: string) {
    return this._scenes.find((item) => item.key === key);
  }

  public stop(key: string) {}

  public pause(key: string) {}

  public isActive(key: string) {}

  public destroy(key: string) {}

  public add(key: string, config: SceneConfig) {}

  public update(time: number, delta: number) {}

  public swap(keyA: string, keyB: string) {}
}
