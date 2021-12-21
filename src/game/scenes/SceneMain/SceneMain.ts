import { ASSETS_PATH } from '../../consts';
import { Scene } from '../../engine/Scene';
import { sceneMainResources } from './resources';

export class SceneMain extends Scene {
  constructor() {
    super({ key: 'SceneMain' });
  }

  preload() {
    this.loadResources(sceneMainResources, ASSETS_PATH);
  }

  create() {}
}

export const sceneMain = new SceneMain();
