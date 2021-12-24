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
    // TODO вынести в Player
    const playerImgData = sceneMainResources.spritesheets?.find(
      (item) => item.name === 'sprPlayer',
    );

    if (playerImgData) {
      const { name, options } = playerImgData;
      const { frameWidth, frameHeight } = options;
      this._player = new Player({
        scene: this,
        x: this.game.width * 0.5,
        y: this.game.height - frameHeight - 50,
        key: name,
        source: this.game.res.getResource(name),
        height: frameHeight,
        width: frameWidth,
      });
    }

    this.displayList.push(this._player!);

    this.addListeners();
  }

  // TODO вынести в class Events
  addListeners() {
    const listener = (event: Event) => {
      if (event instanceof KeyboardEvent) {
        if (event.code === 'ArrowRight') {
          this._player?.moveRight();
        }

        if (event.code === 'ArrowLeft') {
          this._player?.moveLeft();
        }
      }
    };

    document.addEventListener('keydown', listener);

    this.setEvent('keydown', listener);
  }

  deleteListeners() {
    this.events.forEach((item) => {
      document.removeEventListener(item.key, item.event);
    });
  }

  destroy() {
    this.deleteListeners();
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
      key: 'sprBg0',
    });

    this.game.add.image({
      dx: this.game.width * 0.5,
      dy: 0,
      key: 'sprBg1',
    });

    this.isActive = true;
    this.game.scene = this;
  }
}
