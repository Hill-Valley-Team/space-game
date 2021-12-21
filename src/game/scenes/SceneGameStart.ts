import { Scene } from '../engine/Scene';

class SceneGameStart extends Scene {
  constructor() {
    super({ key: 'SceneGameStart' });
  }

  create() {}
}

export const sceneGameStart = new SceneGameStart();
