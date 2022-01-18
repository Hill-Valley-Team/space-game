import { GameObject } from '../GameObjects';
import { Animation } from './Animation';
import { AnimationProps, AnimationType } from './types';

export class AnimationManager {
  public parent: GameObject;

  private animList: Map<AnimationType, Animation>;

  constructor(parent: GameObject) {
    this.parent = parent;
    this.animList = new Map();
  }

  public start(type: AnimationType) {
    this.animList.get(type)?.start();
  }

  public startAll() {
    this.animList.forEach((anim) => anim.start());
  }

  add(props: AnimationProps) {
    const { type, speed = 0 } = props;
    this.animList.set(type, new Animation(this, type, speed));
  }

  get(type: AnimationType) {
    return this.animList.get(type);
  }

  delete(type: AnimationType) {
    this.animList.delete(type);
  }

  public update(delay: number, type: AnimationType) {
    this.animList.get(type)?.update(delay);
  }

  public updateAll(delay: number) {
    this.animList.forEach((anim) => anim.update(delay));
  }

  public stop(type: AnimationType) {
    this.animList.get(type)?.stop();
  }

  public stopAll() {
    this.animList.forEach((anim) => anim.stop());
  }

  public first() {}
}
