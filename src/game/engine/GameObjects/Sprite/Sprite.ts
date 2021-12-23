import { GameObject } from '../GameObject/GameObject';
import { SpriteProps } from '../GameObject/types';

export class Sprite extends GameObject {
  private _source: HTMLImageElement;

  private _width: number | null;

  private _height: number | null;

  private _frame: number;

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }

  public get source() {
    return this._source;
  }

  public get frame() {
    return this._frame;
  }

  constructor(props: SpriteProps) {
    const { scene, x, y, key, source, width, height, frame } = props;

    super({ scene, x, y, key });
    this._source = source;
    this._width = width ?? 0;
    this._height = height ?? 0;
    this._frame = frame ?? 0;
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
