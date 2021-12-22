import { Scene } from '../Scene';
import { GameStateObject } from './types';

export class State {
  private _state: GameStateObject[];

  private _current: Scene | null;

  constructor() {
    this._state = [];
    this._current = null;
  }

  public add(key: string, scene: Scene) {
    this._state.push({ key, scene });
  }

  public start(key: string) {
    const obj = this._state.find((item) => item.key === key);
    const scene = obj?.scene;

    this._current = scene!;
    this._current.start();
  }
}
