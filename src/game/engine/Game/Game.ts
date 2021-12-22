import { Scene } from '../Scene';
import { defaultGameConfig } from './defaultGameConfig';
import { TimeStep } from './TimeStep';
import { GameConfig } from './types';

export class Game {
  private _width: number;

  private _height: number;

  private _parent: Element | null;

  private _isRunning: boolean;

  private _scene: Scene | null;

  private _loop: TimeStep;

  private _canvas: HTMLCanvasElement | null;

  private _context: CanvasRenderingContext2D | null;

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }

  public get parent() {
    return this._parent;
  }

  public get context() {
    return this._context;
  }

  public get canvas() {
    return this._canvas;
  }

  constructor(config: GameConfig) {
    const { width, height, parent } = config;

    this._width = width ?? defaultGameConfig.width;
    this._height = height ?? defaultGameConfig.height;
    this._parent = this._getParent(parent ?? defaultGameConfig.parent);
    console.log(this._parent);
    this._isRunning = false;
    this._scene = null;
    this._loop = new TimeStep(this);
    this._canvas = null;
    this._context = null;
    this._createCanvas();
    this._renderCanvas();
  }

  public start() {
    this._isRunning = true;
    this._loop.start();
  }

  protected preload() {}

  protected create() {}

  private _getParent(parent: string | HTMLElement) {
    return parent instanceof HTMLElement ? parent : document.querySelector(parent);
  }

  private _createCanvas() {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.height = this.height;
    canvas.width = this.width;
    canvas.style.background = 'black';
    this._canvas = canvas;
    this._context = canvas.getContext('2d');
  }

  private _renderCanvas() {
    if (this._parent && this._canvas) {
      this._parent.appendChild(this._canvas);
    }
  }

  protected exit() {}

  public update(delay: number) {
    if (this._isRunning) {
      this._scene?.update(delay);
    }
  }
}
