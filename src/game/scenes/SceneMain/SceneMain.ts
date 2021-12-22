// import { gameConfig } from '../../config';
import { ASSETS_PATH } from '../../consts';
import { Scene } from '../../engine/Scene';
// import { Player } from '../../entities';
import { sceneMainResources } from './resources';

export class SceneMain extends Scene {
  // private _player: Player | null;

  constructor() {
    super({ key: 'SceneMain' });

    // this._player = null;
  }

  preload() {
    this.loadResources(sceneMainResources, ASSETS_PATH);
  }

  create() {
    // this._player = new Player({
    //   scene: this,
    //   x: gameConfig.width * 0.5,
    //   y: gameConfig.height * 0.5,
    //   key: 'sprPlayer',
    // });
    // console.log(this._player);
  }
}

export const sceneMain = new SceneMain();
