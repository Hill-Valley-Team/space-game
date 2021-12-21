import { Scene } from '../engine/Scene';

class SceneGameOver extends Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  create() {}
}

export const sceneGameOver = new SceneGameOver();
