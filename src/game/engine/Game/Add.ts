import { Game } from '.';
import { ImgRes } from './types';

export class Add {
  private _game: Game;

  constructor(game: Game) {
    this._game = game;
  }

  public image(obj: ImgRes) {
    const ctx = this._game.context;
    const { image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight } = obj;
    ctx!.drawImage(image, sx!, sy!, sWidth!, sHeight!, dx!, dy!, dWidth!, dHeight!);
  }
}
