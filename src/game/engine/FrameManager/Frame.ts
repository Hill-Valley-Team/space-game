import { FrameProps } from './types';

export class Frame {
  public x: number;

  public y: number;

  public width: number;

  public height: number;

  constructor({ x, y, width, height }: FrameProps) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public getProps() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
  }
}
