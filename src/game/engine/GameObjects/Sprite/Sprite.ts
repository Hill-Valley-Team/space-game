import { GameObject } from '../GameObject';
import { SpriteProps } from '../types';

export class Sprite extends GameObject {
  private _source: HTMLImageElement;

  private _width: number;

  private _height: number;

  constructor(props: SpriteProps) {
    const { scene, x, y, key, source, width, height } = props;

    super({ scene, x, y, key });
    this._source = source;
    this._width = width;
    this._height = height;
  }
}
