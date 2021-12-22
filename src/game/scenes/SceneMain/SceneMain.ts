import { ASSETS_PATH } from '../../consts';
import { Game } from '../../engine/Game';
import { Scene } from '../../engine/Scene';
import { Player } from '../../entities';
// import { gameConfig } from '../../gameConfig';
import { sceneMainResources } from './resources';

export class SceneMain extends Scene {
  private _player: Player | null;

  constructor(game: Game) {
    super({ key: 'SceneMain', game });
    this._player = null;
  }

  preload() {
    this.loadResources(sceneMainResources, ASSETS_PATH);
  }

  create() {
    this._player = new Player({
      scene: this,
      x: this.game.width * 0.5, //TODO
      y: this.game.height * 0.5,
      key: 'sprPlayer',
    });
  }
}
