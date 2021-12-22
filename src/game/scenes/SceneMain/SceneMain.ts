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
    await this.loadResources(sceneMainResources, ASSETS_PATH);
  }

  create() {
    this._player = new Player({
      scene: this,
      x: this.game.width * 0.5, //TODO
      y: this.game.height * 0.5,
      key: 'sprPlayer',
    });
  }

  render() {
    const image = this.res!.getResource('sprLaserEnemy0');
    console.log(this.res.resources, image);
    // const image = this.res.getResource(this._player!.key);

    // if (image) {
    //   this.game.add({
    //     image,
    //     x: this._player!.x,
    //     y: this._player!.y,
    //   });
    // }
  }

  async start() {
    await this.preload();
    this.create();
    this.render();
  }
}
