import { AnimationManager } from '.';
import { AnimationType } from './types';

export class Animation {
  public manager: AnimationManager;

  public speed: number;

  public type: AnimationType;

  public duration: number;

  public delay: number;

  public repeat: boolean;

  public repeatDelay: number;

  public timeFromStart: number;

  public isStart: boolean;

  constructor(manager: AnimationManager, type: AnimationType, speed: number) {
    this.manager = manager;
    this.type = type;
    this.duration = 1;
    this.delay = 0;
    this.repeat = true;
    this.repeatDelay = 0;
    this.timeFromStart = 0;
    this.isStart = false;
    this.speed = speed ?? 0;
  }

  start() {
    this.isStart = true;
  }

  stop() {
    this.isStart = false;
  }

  public update(delay: number) {
    if (!this.isStart) return;
    this.timeFromStart += delay;

    switch (this.type) {
      case 'MoveDown':
        this.bottom(delay);
        break;

      default:
        break;
    }
  }

  bottom(delay: number) {
    const { parent } = this.manager;
    const { body } = parent;
    body.setVelocity(0, this.speed);
    parent.x += body.velocity.x! * delay;
    parent.y += body.velocity.y! * delay;
  }
}
