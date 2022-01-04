import { Game } from '.';
import { FPS } from './consts';

export class TimeStep {
  private last: number;

  private game: Game;

  private step: number;

  private dt: number;

  constructor(game: Game) {
    this.last = performance.now();
    this.game = game;
    this.step = 1 / FPS;
    this.dt = 0;
  }

  private frame = () => {
    const now = performance.now();
    this.dt += Math.min(1, (now - this.last) / 1000);

    while (this.dt > this.step) {
      this.dt -= this.step;
      this.game.update(this.step);
    }

    this.last = now;
    this.game.render();
    requestAnimationFrame(this.frame);
  };

  public start = () => {
    this.frame();
  };
}
