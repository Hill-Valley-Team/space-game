import { GameObject } from '../GameObject/GameObject';
import { SpriteProps } from '../GameObject/types';

export class Sprite extends GameObject {
  public source: HTMLImageElement;

  public frame: number;

  public spriteKey: string;

  constructor(props: SpriteProps) {
    const { scene, x, y, key, source, width, height, frame, spriteKey } = props;

    super({ scene, x, y, key, width, height });
    this.source = source;
    this.frame = frame ?? 0;
    this.spriteKey = spriteKey;
  }

  public getProps() {
    return {
      sx: this.width * this.frame,
      sy: 0,
      sWidth: this.width,
      sHeight: this.height,
      dx: this.x,
      dy: this.y,
      dWidth: this.width,
      dHeight: this.height,
      spriteKey: this.spriteKey,
    };
  }

  onRender() {
    this.scene.game.add.sprite(this.getProps());
  }
}
