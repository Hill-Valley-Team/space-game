import { defaultGameConfig } from './defaultGameConfig';
import { GameConfig, GameState } from './types';

export class Game {
  private _width: number;

  private _height: number;

  private _parent: string | HTMLElement;

  private _state: GameState;

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }

  public get parent() {
    return this._parent;
  }

  public get state() {
    return this._state;
  }

  constructor(config: GameConfig) {
    const { width, height, parent, state } = config;

    this._width = width ?? defaultGameConfig.width;
    this._height = height ?? defaultGameConfig.height;
    this._parent = parent ?? defaultGameConfig.parent;
    this._state = state ?? defaultGameConfig.state;
  }
}
