import { Game } from '../Game';
import { Constructable } from '../interfaces';
import { Scene } from '../Scene';
import { GameStateObject } from './types';

export class State {
  private _state: GameStateObject[];

  private _current: Scene | null;

  private _game: Game;

  constructor(game: Game) {
    this._state = [];
    this._current = null;
    this._game = game;
  }

  public get game() {
    return this._game;
  }

  public get state() {
    return this._state;
  }

  public add(key: string, scene: Constructable<Scene>) {
    this._state.push({ key, scene });
  }

  public start(key: string) {
    const obj = this._state.find((item) => item.key === key);
    const CurrScene = obj?.scene;
    if (CurrScene) {
      this._current = new CurrScene(this.game);
      this._current?.start();
    }
  }
}
