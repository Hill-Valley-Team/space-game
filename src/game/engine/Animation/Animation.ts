import { AnimationManager } from '.';
import { DEFAULT_SPRITE_ANIMATION_SPEED } from './consts';
import { AnimationDirection, AnimationProps, AnimationType } from './types';

export class Animation {
  public manager: AnimationManager;

  public key: string;

  public speed: number;

  public type: AnimationType;

  public duration: number;

  public direction: AnimationDirection | null;

  public startFrame: number;

  public endFrame: number;

  public currentFrame: number;

  public delay: number;

  public repeat: boolean;

  public repeatDelay: number;

  public timeFromStart: number;

  public isStart: boolean;

  public autoRun: boolean;

  constructor({ manager, type, speed, direction, frameRow, autoRun, key, repeat }: AnimationProps) {
    this.manager = manager;
    this.type = type;
    this.key = key;
    this.duration = 1;
    this.delay = 0;
    this.repeat = repeat ?? true;
    this.repeatDelay = 0;
    this.timeFromStart = 0;
    this.isStart = false;
    this.speed = speed ?? DEFAULT_SPRITE_ANIMATION_SPEED;
    this.direction = direction ?? null;
    this.autoRun = autoRun ?? true;

    this.startFrame = 0;
    this.endFrame = 0;
    this.currentFrame = 0;

    if (frameRow) {
      const { start, end } = manager.parent.frames.getRow(frameRow);
      this.startFrame = start;
      this.endFrame = end;
    }
  }

  start() {
    this.isStart = true;
    this.currentFrame = this.startFrame;
  }

  stop() {
    this.isStart = false;
  }

  public update(delay: number) {
    if (!this.isStart) return;

    switch (this.type) {
      case 'MoveDown':
        this.moveDown(delay);
        break;

      case 'MoveRight':
        this.moveRight(delay);
        break;

      case 'MoveLeft':
        this.moveLeft(delay);
        break;

      case 'FrameRow':
        this.frameRowRight(delay);
        break;

      default:
        break;
    }
  }

  moveDown(delay: number) {
    const { parent } = this.manager;
    const { body } = parent;
    body.setVelocity(0, this.speed);
    parent.x += body.velocity.x! * delay;
    parent.y += body.velocity.y! * delay;
  }

  moveRight(delay: number) {
    const { parent } = this.manager;
    const { body } = parent;
    body.setVelocity(this.speed, 0);
    parent.x += body.velocity.x! * delay;
  }

  moveLeft(delay: number) {
    const { parent } = this.manager;
    const { body } = parent;
    body.setVelocity(-this.speed, 0);
    parent.x += body.velocity.x! * delay;
  }

  frameRowRight(delay: number) {
    const { parent } = this.manager;
    this.timeFromStart += delay;
    if (this.timeFromStart >= this.speed / 1000) {
      if (this.currentFrame >= this.endFrame) {
        if (this.repeat) {
          this.currentFrame = this.startFrame;
        } else {
          this.stop();
        }
      } else {
        this.currentFrame += 1;
      }

      parent.frame = this.currentFrame;
      this.timeFromStart = 0;
    }
  }
}
