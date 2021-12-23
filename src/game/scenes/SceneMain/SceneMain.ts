import { ASSETS_PATH } from '../../consts';
import { Game } from '../../engine/Game';
import { Scene } from '../../engine/Scene';
import { Player } from '../../entities';
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
    const playerImgData = sceneMainResources.spritesheets?.find(
      (item) => item.name === 'sprPlayer',
    );

    if (playerImgData) {
      const { frameWidth, frameHeight } = playerImgData.options;
      this._player = new Player({
        scene: this,
        x: this.game.width * 0.5,
        y: this.game.height * 0.5,
        key: playerImgData.name,
        source: this.res.getResource(playerImgData.name),
        height: frameHeight,
        width: frameWidth,
        type: 'Player',
      });
    }
  }

  render() {
    const image = this.res.getResource(this._player!.key);
    if (image) {
      this.game.add.image({
        image,
        sx: this._player!.width! * this._player!.frame,
        sy: 0,
        sWidth: this._player!.width!,
        sHeight: this._player!.height!,
        dx: this._player!.x,
        dy: this._player!.y,
        dWidth: this._player!.width!,
        dHeight: this._player!.height!,
      });
    }
  }
}
