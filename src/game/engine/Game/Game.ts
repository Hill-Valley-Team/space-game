import { gameResourses } from '../Resources';
import { GameResourses } from '../Resources/types';
import { Scene } from '../Scene';
import { State } from '../State/State';
import { Add } from './Add';
import { defaultGameConfig } from './defaultGameConfig';
import { TimeStep } from './TimeStep';
import { GameConfig } from './types';

export class Game {
  private _width: number;

  private _height: number;

  private _bgColor: string;

  private _parent: Element | null;

  private _isRunning: boolean;

  private _scene!: Scene | null;

  private _loop: TimeStep;

  private _state: State;

  private _canvas: HTMLCanvasElement | null;

  private _context: CanvasRenderingContext2D | null;

  private _add: Add;

  private _res: GameResourses;

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

  public get state() {
    return this._state;
  }

  public get add() {
    return this._add;
  }

  public get res() {
    return this._res;
  }

  public set scene(scene: Scene) {
    this._scene = scene;
  }

  constructor(config: GameConfig) {
    const { width, height, parent, backgroundColor } = config;

    this._width = width ?? defaultGameConfig.width;
    this._height = height ?? defaultGameConfig.height;
    this._bgColor = backgroundColor ?? defaultGameConfig.backgroundColor;
    this._parent = this._getParent(parent ?? defaultGameConfig.parent);
    this._isRunning = false;
    this._loop = new TimeStep(this);
    this._canvas = null;
    this._context = null;
    this._state = new State(this);
    this._add = new Add(this);
    this._res = gameResourses;
    this._create();
  }

  public start() {
    this._isRunning = true;
    this._loop.start();
  }

  // private _preload() {}

  private _create() {
    this._createCanvas();
    this._renderCanvas();
    this.start();
  }

  private _getParent(parent: string | HTMLElement) {
    return parent instanceof HTMLElement ? parent : document.querySelector(parent);
  }

  private _createCanvas() {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.height = this.height;
    canvas.width = this.width;
    canvas.style.backgroundColor = this._bgColor;
    this._canvas = canvas;
    this._context = canvas.getContext('2d');
  }

  private _renderCanvas() {
    if (this._parent && this._canvas) {
      this._parent.appendChild(this._canvas);
    }
  }

  public exit() {}

  public update(delay: number) {
    if (this._isRunning && this._scene) {
      this._scene.update(delay);
    }
  }

  public render(dt: number) {
    this.context?.clearRect(0, 0, this.width, this.height);
    if (this._scene && this._scene.isActive) {
      this._scene.render(dt);
    }
  }
}
