import { Sprite } from '../GameObjects';
import { Frame } from './Frame';

export class FrameManager {
  public parent: Sprite;

  public frames: Frame[];

  public colls: number;

  public rows: number;

  constructor(parent: Sprite) {
    this.parent = parent;
    this.frames = [];
    this.colls = 0;
    this.rows = 0;
  }

  init(colls: number, rows: number) {
    this.colls = colls;
    this.rows = rows;
    this.createFrameSet();
  }

  getRow(n: number) {
    const startIndex = (n - 1) * this.colls;
    const endIndex = startIndex + this.colls - 1;

    return { start: startIndex, end: endIndex };
  }

  getFrame(n: number) {
    return this.frames[n];
  }

  getCol(n: number) {
    //TODO

    return { start: n, end: 4 };
  }

  createFrameSet() {
    const img = this.parent.source;
    if (img) {
      const sWidth = Math.round(img.width / this.colls);
      const sHeight = Math.round(img.height / this.rows);

      for (let j = 0; j < this.rows; j += 1) {
        const y = sHeight * j;
        for (let i = 0; i < this.colls; i += 1) {
          const x = sWidth * i;
          const frame = new Frame({
            x,
            y,
            width: sWidth,
            height: sHeight,
          });
          this.frames.push(frame);
        }
      }
    }
  }
}
