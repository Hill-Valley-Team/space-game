import { GameObject } from '../GameObject/GameObject';
import { TextProps } from '../GameObject/types';
import { DEFAULT_TEXT_COLOR } from './consts';

export class Text extends GameObject {
  private text: string;

  private color: string;

  constructor(props: TextProps) {
    const { scene, x, y, key, text, color } = props;

    super({ scene, x, y, key });
    this.text = text ?? '';
    this.color = color ?? DEFAULT_TEXT_COLOR;
  }

  render() {
    const ctx = this.scene.game.context;

    if (ctx) {
      ctx.font = '20px Inter';

      ctx.fillStyle = this.color;
      ctx.fillText(this.text, this.x - ctx.measureText(this.text).width / 2, this.y + 5);
    }
  }
}
