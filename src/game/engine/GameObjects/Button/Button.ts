import { Mouse } from '../../Inputs';
import { GameObject } from '../GameObject/GameObject';
import { ButtonProps } from '../GameObject/types';
import { DEFAULT_BTN_BG_COLOR, DEFAULT_BTN_COLOR } from './consts';

export class Button extends GameObject {
  private text: string;

  private color: string;

  private bgColor: string;

  protected onClick: Function;

  public isClicked: boolean;

  constructor(props: ButtonProps) {
    const { scene, x, y, key, width, height, text, color, bgColor, onClick } = props;

    super({ scene, x, y, key, width, height });

    this.text = text ?? '';
    this.color = color ?? DEFAULT_BTN_COLOR;
    this.bgColor = bgColor ?? DEFAULT_BTN_BG_COLOR;
    this.isClicked = false;
    this.onClick = onClick ?? this.onBtnClick;
  }

  init() {
    this.addToScene();
    this.addListeners();
  }

  onBtnClick() {}

  checkClicked(event: MouseEvent) {
    this.scene.game.collider.clickCollide(event, this, this.onClick);
  }

  addListeners() {
    const self = this;
    this.scene.events.addListener(self, Mouse.NAMES.CLICK, this.checkClicked);
  }

  onRender() {
    const ctx = this.scene.game.context;

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

  update() {
    if (this.isClicked && this.onClick) {
      this.onClick();
      this.isClicked = true;
    }
  }
}
