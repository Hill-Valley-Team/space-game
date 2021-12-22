import { GameObject } from '../GameObject';
import { Loader } from '../Resources';
import { SceneProps, SceneResourcesConfig } from './types';

export abstract class Scene {
  private _key: string;

  private _displayList: GameObject[];

  // private _updateList: unknown[];

  public abstract create(): void;

  public get key() {
    return this._key;
  }

  public get displayList() {
    return this._displayList;
  }

  constructor(props: SceneProps) {
    const { key } = props;

    this._key = key;
    this._displayList = [];
    this.create();
  }

  protected init() {} //TODO

  protected preload() {}

  public update(delay: number) {
    this._displayList.forEach((element) => {
      element.update(delay);
    });
  }

  protected render() {}

  public start() {
    this.preload();
    this.create();
    this.render();
  }

  public shutdown() {}

  protected loadResources(resourses: SceneResourcesConfig, path: string) {
    const loader = new Loader(path);
    loader.loadResources(resourses);
  }

  add(item: GameObject) {
    this._displayList.push(item);
  }
}
