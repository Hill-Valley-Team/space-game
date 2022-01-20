import { Sprite } from '../GameObjects';
import { Animation } from './Animation';
import { AnimationProps } from './types';

export class AnimationManager {
  public parent: Sprite;

  private animList: Map<string, Animation>;

  constructor(parent: Sprite) {
    this.parent = parent;
    this.animList = new Map();
  }

  public start(key: string) {
    this.animList.get(key)?.start();
  }

  public startAll() {
    this.animList.forEach((anim) => {
      if (anim.autoRun) {
        anim.start();
      }
    });
  }

  add(props: Omit<AnimationProps, 'manager'>) {
    this.animList.set(props.key, new Animation({ manager: this, ...props }));
  }

  get(key: string) {
    return this.animList.get(key);
  }

  delete(key: string) {
    this.animList.delete(key);
  }

  public update(delay: number, key: string) {
    this.animList.get(key)?.update(delay);
  }

  public updateAll(delay: number) {
    this.animList.forEach((anim) => anim.update(delay));
  }

  public stop(key: string) {
    this.animList.get(key)?.stop();
  }

  public stopAll() {
    this.animList.forEach((anim) => anim.stop());
  }

  public first() {}
}
