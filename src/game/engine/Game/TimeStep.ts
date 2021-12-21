import { Game } from '.';

export class TimeStep {
  private _last: number;

  private _game: Game;

  constructor(game: Game) {
    this._last = performance.now();
    this._game = game;
  }

  private _animation = (now: number) => {
    const delay = now - this._last;
    this._last = now;
    this._game.update(delay);
    requestAnimationFrame(this._animation);
  };

  public start = () => {
    this._animation(performance.now());
  };
}
