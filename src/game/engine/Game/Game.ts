import { Collider } from '../Collider';
import { gameResourses } from '../Resources';
import { GameResourses } from '../Resources/types';
import { SceneManager } from '../SceneManager';
import { Add } from './Add';
import { defaultGameConfig } from './defaultGameConfig';
import { TimeStep } from './TimeStep/TimeStep';
import { GameBoundsProps, GameConfig } from './types';

export class Game {
  private loop: TimeStep;

  private contextValue: CanvasRenderingContext2D | null;

  public get context() {
    if (this.contextValue === null) {
      throw new Error('Context is null');
    }
    return this.contextValue;
  }

  public parent: Element | null;

  public isRunning: boolean;

  public canvas: HTMLCanvasElement | null;

  public scene: SceneManager;

  public bgColor: string;

  public width: number;

  public height: number;

  public collider: Collider;

  public add: Add = new Add(this);

  public res: GameResourses;

  public score: number;

  constructor(config: GameConfig, cb: Function) {
    const { width, height, parent, backgroundColor } = config;

    this.width = width ?? defaultGameConfig.width;
    this.height = height ?? defaultGameConfig.height;
    this.bgColor = backgroundColor ?? defaultGameConfig.backgroundColor;
    this.parent = this.getParent(parent ?? defaultGameConfig.parent);
    this.isRunning = false;
    this.loop = new TimeStep(this);
    this.canvas = null;
    this.contextValue = null;
    this.add = new Add(this);
    this.res = gameResourses;
    this.scene = new SceneManager(this, config.scenes, cb);
    this.collider = new Collider(this);
    this.score = 0;
    this.create();
  }

  public start() {
    this.isRunning = true;
    this.loop.start();
  }

  private create() {
    this.createCanvas();
    this.renderCanvas();
    this.start();
  }

  private getParent(parent: string | HTMLElement) {
    return parent instanceof HTMLElement ? parent : document.querySelector(parent);
  }

  private createCanvas() {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.height = this.height;
    canvas.width = this.width;
    canvas.style.backgroundColor = this.bgColor;
    this.canvas = canvas;
    this.contextValue = canvas.getContext('2d');
  }

  private renderCanvas() {
    if (this.parent && this.canvas) {
      this.parent.appendChild(this.canvas);
    }
  }

  public exit() {}

  public update(delay: number) {
    if (this.isRunning && this.scene.current) {
      this.scene.current.update(delay);
    }
  }

  public render() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.scene.current?.render();
  }

  /** get game area bounds with object padding  */
  getGameArea(props: GameBoundsProps) {
    const { paddingTop = 0, paddingRight = 0, paddingBottom = 0, paddingLeft = 0 } = props;
    const xStart = paddingLeft;
    const yStart = paddingTop;
    const xEnd = this.width - paddingRight;
    const yEnd = this.height - paddingBottom;
    return { xStart, yStart, xEnd, yEnd };
  }

  /** is object in game area */
  isOnGameArea(props: GameBoundsProps) {
    const { x, y } = props;
    const gameArea = this.getGameArea(props);
    const { xStart, yStart, xEnd, yEnd } = gameArea;
    return x > xStart && y > yStart && x < xEnd && y < yEnd;
  }

  /** is object on bounds of game area */
  isOnGameBounds(props: GameBoundsProps) {
    const { x, y } = props;
    const gameArea = this.getGameArea(props);
    const { xStart, yStart, xEnd, yEnd } = gameArea;

    return {
      isOnLeft: x <= xStart,
      isOnRight: x >= xEnd,
      isOnBottom: y >= yEnd,
      isOnTop: y <= yStart,
    };
  }
}
