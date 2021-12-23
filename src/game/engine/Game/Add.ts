import { Game } from '.';
import { ImgRes } from './types';

export class Add {
  private _game: Game;

  public get game() {
    return this._game;
  }

  constructor(game: Game) {
    this._game = game;
  }

  public image(obj: ImgRes) {
    const ctx = this._game.context;
    const { key, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight } = obj;
    const image = this.game.res.getResource(key);
    ctx!.drawImage(image, sx!, sy!, sWidth!, sHeight!, dx!, dy!, dWidth!, dHeight!);
  }
}
