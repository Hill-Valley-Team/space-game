import { Scene } from '../Scene';
import { defaultGameConfig } from './defaultGameConfig';
import { TimeStep } from './TimeStep';
import { GameConfig } from './types';

export class Game {
  private _width: number;

  private _height: number;

  private _parent: string | HTMLElement;

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

  constructor(config: GameConfig) {
    const { width, height, parent } = config;

    this._width = width ?? defaultGameConfig.width;
    this._height = height ?? defaultGameConfig.height;
    this._parent = parent ?? defaultGameConfig.parent;
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

  protected exit() {}

  public update(delay: number) {
    if (this._isRunning) {
      this._scene?.update(delay);
    }
  }
}
