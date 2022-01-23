import { GameObject } from '../GameObject/GameObject';
import { AnimationManager } from '../../Animation';
import { SpriteProps } from '../GameObject/types';
import { FrameManager } from '../../FrameManager';

export class Sprite extends GameObject {
  public source: HTMLImageElement;

  public frame: number;

  public type: string;

  public frames: FrameManager;

  public spriteKey: string;

  public animation: AnimationManager;

  constructor(props: SpriteProps) {
    const { scene, x, y, key, source, width, height, frame, spriteKey, type } = props;

    super({ scene, x, y, key, width, height });
    this.source = source;
    this.frame = frame ?? 0;
    this.spriteKey = spriteKey;
    this.frames = new FrameManager(this);
    this.animation = new AnimationManager(this);
    this.type = type;
  }

  play() {
    this.animation.startAll();
  }

  public getProps() {
    const frame = this.frames.getFrame(this.frame);
    if (frame) {
      const { x, y, width, height } = frame.getProps();
      return {
        sx: x ?? this.x,
        sy: y ?? this.y,
        sWidth: width ?? this.width,
        sHeight: height ?? this.height,
        dx: this.x,
        dy: this.y,
        dWidth: this.width,
        dHeight: this.height,
        spriteKey: this.spriteKey,
      };
    }
    return null;
  }

  protected beforeUpdate(delay: number) {
    this.children.forEach((child) => child.update(delay));
    this.animation.updateAll(delay);
  }

  public update(delay: number) {
    this.beforeUpdate(delay);
    this.onUpdate(delay);
  }

  protected beforeRender() {
    this.children.forEach((child) => child.render());
    const imgToRender = this.getProps();
    if (imgToRender) {
      this.scene.game.add.sprite(imgToRender);
    }
  }

  protected onRender() {}

  public render() {
    this.beforeRender();
    this.onRender();
  }
}
