import { Game } from '../Game';
import { ImageRes, SpriteRes } from '../types';

export class Add {
  private game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  public sprite(obj: SpriteRes) {
    const ctx = this.game.context;
    const { spriteKey, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight } = obj;
    const image = this.game.res.getResource(spriteKey);

    ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }

  public image(obj: ImageRes) {
    const ctx = this.game.context;
    const { spriteKey, dx, dy, dWidth, dHeight } = obj;
    const image = this.game.res.getResource(spriteKey);

    if (dWidth && dHeight) {
      ctx.drawImage(image, dx, dy, dWidth, dHeight);
    } else {
      ctx.drawImage(image, dx, dy);
    }
  }
}
