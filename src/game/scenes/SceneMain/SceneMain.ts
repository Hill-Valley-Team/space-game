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
    await this.game.res.load(sceneMainResources, ASSETS_PATH);
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
        source: this.game.res.getResource(playerImgData.name),
        height: frameHeight,
        width: frameWidth,
        type: 'Player',
      });
    }
  }

  render() {
    const { sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, key } = this._player!.getProps();
    this.game.add.image({
      key,
      sx,
      sy,
      sWidth,
      sHeight,
      dx,
      dy,
      dWidth,
      dHeight,
    });

    this.game.add.image({
      dx: 0,
      dy: 0,
      key: 'sprBg1',
    });

    this.game.add.image({
      dx: this.game.width * 0.5,
      dy: 0,
      key: 'sprBg1',
    });
  }
}
