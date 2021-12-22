import { ASSETS_PATH } from '../../consts';
import { Scene } from '../../engine/Scene';
import { Player } from '../../entities';
// import { gameConfig } from '../../gameConfig';
import { sceneMainResources } from './resources';

class SceneMain extends Scene {
  private _player: Player | null;

  constructor() {
    super({ key: 'SceneMain' });
    this._player = null;
  }

  preload() {
    this.loadResources(sceneMainResources, ASSETS_PATH);
  }

  create() {
    this._player = new Player({
      scene: this,
      // x: gameConfig.width * 0.5, //TODO
      // y: gameConfig.height * 0.5,
      x: 960 * 0.5,
      y: 600 * 0.5,
      key: 'sprPlayer',
    });
  }
}

export default new SceneMain();
