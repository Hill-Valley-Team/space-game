import { GameObject } from '../GameObject';
import { Loader } from '../Resources';
import { SceneProps, SceneResourcesConfig } from './types';

export abstract class Scene {
  private _key: string;

  private _displayList: GameObject[];

  // private _updateList: unknown[];

  protected abstract create(): void;

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

  protected preload() {}

  public start() {}

  public update(delay: number) {
    this._displayList.forEach((element) => {
      element.update(delay);
    });
  }

  protected loadResources(resourses: SceneResourcesConfig, path: string) {
    const loader = new Loader(path);
    loader.loadResources(resourses);
  }

  add(item: GameObject) {
    this._displayList.push(item);
  }
}
