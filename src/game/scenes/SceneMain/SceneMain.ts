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

  async preload() {
    await this.res.load(sceneMainResources, ASSETS_PATH);
  }

  create() {
    this._player = new Player({
      scene: this,
      x: this.game.width * 0.5,
      y: this.game.height * 0.5,
      key: 'sprPlayer',
    });
  }

  render() {
    const image = this.res.getResource(this._player!.key);
    if (image) {
      this.game.add({
        image,
        x: this._player!.x,
        y: this._player!.y,
      });
    }
  }
}
