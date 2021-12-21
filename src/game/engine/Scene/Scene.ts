import { Loader } from '../Resources';
import { SceneProps, SceneResourcesConfig } from './types';

export abstract class Scene {
  private _key: string;

  protected abstract create(): void;

  public get key() {
    return this._key;
  }

  constructor(props: SceneProps) {
    const { key } = props;

    this._key = key;
    this.create();
  }

  protected preload() {}

  protected start() {}

  protected loadResources(resourses: SceneResourcesConfig, path: string) {
    const loader = new Loader(path);
    loader.loadResources(resourses);
  }
}
