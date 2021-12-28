import { ScenesNames } from '../../consts';
import { gameResourses } from '../Resources';
import { GameResourses } from '../Resources/types';
// import { Scene } from '../Scene';
import { SceneManager } from '../SceneManager';
import { Add } from './Add';
import { defaultGameConfig } from './defaultGameConfig';
import { TimeStep } from './TimeStep';
import { GameConfig } from './types';

export class Game {
  private parent: Element | null;

  private isRunning: boolean;

  private loop: TimeStep;

  public canvas: HTMLCanvasElement | null;

  // public scene!: Scene | null;

  public scene: SceneManager;

  public context: CanvasRenderingContext2D | null;

  public bgColor: string;

  public width: number;

  public height: number;

  public add: Add = new Add(this);

  public res: GameResourses;

  constructor(config: GameConfig) {
    const { width, height, parent, backgroundColor } = config;

    this.width = width ?? defaultGameConfig.width;
    this.height = height ?? defaultGameConfig.height;
    this.bgColor = backgroundColor ?? defaultGameConfig.backgroundColor;
    this.parent = this.getParent(parent ?? defaultGameConfig.parent);
    this.isRunning = false;
    this.loop = new TimeStep(this);
    this.canvas = null;
    this.context = null;
    this.add = new Add(this);
    this.res = gameResourses;
    this.scene = new SceneManager(this, config.scenes);
    this.create();
  }

  public start() {
    this.scene.start(ScenesNames.START);
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
    this.context = canvas.getContext('2d');
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
    this.context?.clearRect(0, 0, this.width, this.height);
    this.scene.current?.render();
  }
}
