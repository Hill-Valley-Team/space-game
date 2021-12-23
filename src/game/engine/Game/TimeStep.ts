import { Game } from '.';

export class TimeStep {
  private _last: number;

  private _game: Game;

  private _step: number;

  private _dt: number;

  constructor(game: Game) {
    this._last = performance.now();
    this._game = game;
    this._step = 1 / 60;
    this._dt = 0;
  }

  private _frame = () => {
    const now = performance.now();
    this._dt += Math.min(1, (now - this._last) / 1000); // исправление проблемы неактивных вкладок

    while (this._dt > this._step) {
      this._dt -= this._step;
      this._game.update(this._step);
    }

    this._last = now;
    this._game.render(this._dt);
    requestAnimationFrame(this._frame);
  };

  public start = () => {
    this._frame();
  };
}
