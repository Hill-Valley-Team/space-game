import { Scene } from '../../engine/Scene';
import { SceneManager } from '../../engine/SceneManager';

export class SceneGameOver extends Scene {
  constructor(scene: SceneManager) {
    super({ key: 'end', scene });
  }

  create() {}
}
