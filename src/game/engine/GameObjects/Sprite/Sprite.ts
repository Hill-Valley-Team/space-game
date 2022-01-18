import { GameObject } from '../GameObject/GameObject';
import { AnimationManager } from '../../Animation';
import { SpriteProps } from '../GameObject/types';

export class Sprite extends GameObject {
  public source: HTMLImageElement;

  public frame: number;

  public spriteKey: string;

  public animation: AnimationManager;

  constructor(props: SpriteProps) {
    const { scene, x, y, key, source, width, height, frame, spriteKey } = props;

    super({ scene, x, y, key, width, height });
    this.source = source;
    this.frame = frame ?? 0;
    this.spriteKey = spriteKey;
    this.animation = new AnimationManager(this);
  }

  play() {
    this.animation.startAll();
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

  public update(delay: number) {
    this.beforeUpdate(delay);
    this.onUpdate(delay);
  }

  protected onUpdate(delay: number): void {
    this.animation.updateAll(delay);
  }

  onRender() {
    this.scene.game.add.sprite(this.getProps());
  }
}
