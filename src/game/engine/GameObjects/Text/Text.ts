import { GameObject } from '../GameObject/GameObject';
import { TextAlign, TextProps, TextValign } from '../GameObject/types';
import {
  DEFAULT_TEXT_ALIGN,
  DEFAULT_TEXT_COLOR,
  DEFAULT_TEXT_FONT,
  DEFAULT_TEXT_SIZE,
  DEFAULT_TEXT_VALIGN,
} from './consts';

export class Text extends GameObject {
  private color: string;

  private size: number;

  private font: string;

  private align: TextAlign;

  private valign: TextValign;

  public text: string;

  constructor(props: TextProps) {
    const { scene, x, y, key, text, color, size, font, align, valign, parent } = props;

    super({ scene, x, y, key, parent });

    this.size = size ?? DEFAULT_TEXT_SIZE;
    this.font = font ?? DEFAULT_TEXT_FONT;
    this.align = align ?? DEFAULT_TEXT_ALIGN;
    this.valign = valign ?? DEFAULT_TEXT_VALIGN;
    this.text = text ?? '';
    this.color = color ?? DEFAULT_TEXT_COLOR;
  }

  getCoords() {
    const ctx = this.scene.game.context;
    let { x } = this;
    let { y } = this;
    this.width = ctx.measureText(this.text).width;
    this.height = this.size;

    if (this.parent) {
      x = this.parent.x;
      y = this.parent.y;

      switch (this.align) {
        case 'left':
          x = this.parent.x;
          break;

        case 'right':
          x = this.parent.x + Math.round(this.parent.width - this.width);
          break;

        default:
          x = this.parent.x + this.parent.width / 2 - this.width / 2;
          break;
      }

      switch (this.valign) {
        case 'top':
          y = this.parent.y + this.height;
          break;

        case 'bottom':
          y = this.parent.y + this.parent.height;
          break;

        default:
          y = this.parent.y + this.parent.height / 2 + this.height / 2;
          break;
      }
    } else {
      x = this.x - ctx.measureText(this.text).width / 2;
      y = this.y + 5;
    }

    return { x, y };
  }

  onRender() {
    const ctx = this.scene.game.context;
    const { x, y } = this.getCoords();

    if (ctx) {
      ctx.font = `${this.size}px ${this.font}`;
      ctx.fillStyle = this.color;
      ctx.fillText(this.text, x, y);
    }
  }
}
