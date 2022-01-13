import { GameObject } from '../GameObject/GameObject';
import { SpriteProps } from '../GameObject/types';

export class Sprite extends GameObject {
  public source: HTMLImageElement;

  public width: number | null;

  public height: number | null;

  public frame: number;

  constructor(props: SpriteProps) {
    const { scene, x, y, key, source, width, height, frame } = props;

    super({ scene, x, y, key });
    this.source = source;
    this.width = width ?? 0;
    this.height = height ?? 0;
    this.frame = frame ?? 0;
  }

  public getProps() {
    return {
      sx: this.width! * this.frame,
      sy: 0,
      sWidth: this.width!,
      sHeight: this.height!,
      dx: this.x,
      dy: this.y,
      dWidth: this.width!,
      dHeight: this.height!,
      key: this.key,
    };
  }
}
