import { Scene } from '../Scene';
import { defaultGameConfig } from './defaultGameConfig';
import { TimeStep } from './TimeStep';
import { GameConfig, GameState } from './types';

export class Game {
  private _width: number;

  private _height: number;

  private _parent: string | HTMLElement;

  private _state: GameState;

  private _isRunning: boolean;

  private _scene: Scene | null;

  private _loop: TimeStep;

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
    this._isRunning = false;
    this._scene = null;
    this._loop = new TimeStep(this);
  }

  public start() {
    this._isRunning = true;
    this._loop.start();
  }

  protected preload() {}

  protected create() {}

  public update(delay: number) {
    if (this._isRunning) {
      this._scene?.update(delay);
    }
  }
}
