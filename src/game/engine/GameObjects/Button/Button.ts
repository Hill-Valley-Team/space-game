import { GameObject } from '../GameObject/GameObject';
import { ButtonProps } from '../GameObject/types';
import { DEFAULT_BTN_BG_COLOR, DEFAULT_BTN_COLOR } from './consts';

export class Button extends GameObject {
  private width: number;

  public isClicked: boolean;

  private height: number;

  private text: string;

  private color: string;

  private bgColor: string;

  private onClick: (() => void) | null;

  constructor(props: ButtonProps) {
    const { scene, x, y, key, width, height, text, color, bgColor, onClick } = props;

    super({ scene, x, y, key });
    this.width = width ?? 0;
    this.height = height ?? 0;
    this.text = text ?? '';
    this.color = color ?? DEFAULT_BTN_COLOR;
    this.bgColor = bgColor ?? DEFAULT_BTN_BG_COLOR;
    this.isClicked = false;
    this.onClick = onClick ?? null;
  }

  render() {
    const ctx = this.scene.scene.game.context;

    if (ctx) {
      ctx.font = '20px Inter';
      ctx.fillStyle = this.bgColor;
      ctx.fillRect(this.x, this.y, this.width, this.height);

      ctx.fillStyle = this.color;
      ctx.fillText(
        this.text,
        this.x + this.width / 2 - ctx.measureText(this.text).width / 2,
        this.y + this.height / 2 + 5,
      );
    }
  }

  checkClicked(x: number, y: number) {
    const res = x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height; // TODO
    console.log(res);
    return true;
  }

  update() {
    if (this.isClicked && this.onClick) {
      this.onClick();
      this.isClicked = true;
    }
  }
}
