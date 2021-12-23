import { Game } from '.';
import { ImageRes } from './types';

export class Add {
  private _game: Game;

  public get game() {
    return this._game;
  }

  constructor(game: Game) {
    this._game = game;
  }

  public image(obj: ImageRes) {
    const ctx = this._game.context;
    const { key, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight } = obj;
    const image = this.game.res.getResource(key);
    if (sx !== undefined && sy !== undefined) {
      ctx!.drawImage(image, sx!, sy!, sWidth!, sHeight!, dx!, dy!, dWidth!, dHeight!);
    } else if (dWidth !== undefined && dHeight !== undefined) {
      ctx!.drawImage(image, dx!, dy!, dWidth, dHeight);
    } else {
      ctx!.drawImage(image, dx!, dy!);
    }
  }
}
