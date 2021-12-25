import { ASSETS_PATH } from '../../consts';
import { Game } from '../../engine/Game';
import { getRandomInt } from '../../engine/Game/helpers';
import { GameObject, Sprite } from '../../engine/GameObjects';
import { Scene } from '../../engine/Scene';
import { Player } from '../../entities';
import { Coins } from '../../entities/Coins';
import { Health } from '../../entities/Health';
import { Obstacle } from '../../entities/Obstacle';
import { sceneMainResources } from './resources';

export class SceneMain extends Scene {
  private _player: Player | null;

  private _obstacles: Obstacle[];

  private _coins: Coins[];

  private _score: number;

  private _healthPannel: Health | null;

  private _atackInterval: null | ReturnType<typeof setInterval>;

  private _coinsInterval: null | ReturnType<typeof setInterval>;

  constructor(game: Game) {
    super({ key: 'SceneMain', game });
    this._player = null;
    this._obstacles = [];
    this._coins = [];
    this._healthPannel = null;
    this._atackInterval = null;
    this._coinsInterval = null;
    this._score = 0;
  }

  async preload() {
    await this.game.res.load(sceneMainResources, ASSETS_PATH);
  }

  create() {
    // TODO вынести в Player
    const playerImgData = sceneMainResources.spritesheets?.find(
      (item) => item.name === 'sprSpaceShip',
    );

    if (playerImgData) {
      const { name, options } = playerImgData;
      const { frameWidth, frameHeight } = options;
      this._player = new Player({
        scene: this,
        x: this.game.width * 0.5,
        y: this.game.height * 0.6,
        key: name,
        source: this.game.res.getResource(name),
        height: frameHeight,
        width: frameWidth,
      });
    }

    this.displayList.push(this._player!);

    this.createHealthPannel();

    this.createAtack();

    this.addListeners();
  }

  createHealthPannel() {
    this._healthPannel = new Health(this);
  }

  createAtack() {
    const enemies = ['sprEnemy0', 'sprEnemy1', 'sprEnemy2'];
    this._atackInterval = setInterval(
      () => this.createObstacle(enemies[getRandomInt(0, enemies.length - 1)]),
      3000,
    );

    this._coinsInterval = setInterval(() => this.createCoin('sprCoins'), 4500);
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
    clearInterval(this._atackInterval!);
    clearInterval(this._coinsInterval!);
    this.isActive = false;
  }

  checkCollisions() {
    //TODO вынести в клас Collide
    this._obstacles.forEach((obs) => {
      if (
        obs.y + obs.height! >= this._player!.y &&
        obs.y <= this._player!.y + this._player!.height! &&
        obs.x + obs.width! >= this._player!.x &&
        obs.x <= this._player!.x + this._player!.width!
      ) {
        this._player?.getDamage(obs.damage);
        this.delete(obs);
      }
    });

    this._coins.forEach((cn) => {
      if (
        cn.y + cn.height! >= this._player!.y &&
        cn.y <= this._player!.y + this._player!.height! &&
        cn.x + cn.width! >= this._player!.x &&
        cn.x <= this._player!.x + this._player!.width!
      ) {
        this._score += cn.value;
        this.delete(cn);
        console.log(this._score);
      }
    });
  }

  //TODO вынести в Obstacle
  createObstacle(key: string, x?: number, y?: number) {
    const ImgData = sceneMainResources.spritesheets?.find((item) => item.name === key);
    let obstacle: Obstacle | null = null;

    if (ImgData) {
      const { name, options } = ImgData;
      const { frameWidth, frameHeight } = options;
      obstacle = new Obstacle({
        scene: this,
        x: x ?? getRandomInt(50, this.game.width - 150),
        y: y ?? 0,
        key: name,
        source: this.game.res.getResource(name),
        height: frameHeight,
        width: frameWidth,
      });
    }
    this.displayList.push(obstacle!);
    this._obstacles.push(obstacle!);
  }

  createCoin(key: string, x?: number, y?: number) {
    const ImgData = sceneMainResources.spritesheets?.find((item) => item.name === key);
    let coin: Coins | null = null;

    if (ImgData) {
      const { name, options } = ImgData;
      const { frameWidth, frameHeight } = options;
      coin = new Coins({
        scene: this,
        x: x ?? getRandomInt(50, this.game.width - 150),
        y: y ?? 0,
        key: name,
        source: this.game.res.getResource(name),
        height: frameHeight,
        width: frameWidth,
      });
    }
    this.displayList.push(coin!);
    this._coins.push(coin!);
  }

  render() {
    // TODO убрать render в объекты
    this.game.add.image(this._player!.getProps());
    this.game.add.image({
      dx: 0,
      dy: 0,
      key: 'sprBg0',
    });
    this._obstacles.forEach((item) => {
      this.game.add.image(item.getProps());
    });
    this._coins.forEach((item) => {
      this.game.add.image(item.getProps());
    });
    this._healthPannel?.render(this._player!.health);

    this.isActive = true;
    this.game.scene = this;
  }

  delete(obj: GameObject) {
    const i = this.displayList.findIndex((item) => item === obj);
    this.displayList.splice(i, 1);

    if (obj instanceof Obstacle) {
      const j = this._obstacles.findIndex((item) => item === obj);
      this._obstacles.splice(j, 1);
    }

    if (obj instanceof Player) {
      this._player = null;
    }

    if (obj instanceof Coins) {
      const j = this._coins.findIndex((item) => item === obj);
      this._coins.splice(j, 1);
    }
  }

  update(delay: number) {
    if (this._player!.health <= 0) {
      this.destroy();
      return; // TODO
    }
    if (!this.isActive) return;

    this.checkCollisions();

    this.displayList.forEach((element) => {
      const outY = element instanceof Sprite ? element.height! : 50;
      const outX = element instanceof Sprite ? element.height! : 50;

      if (
        element.y < 0 - outY ||
        element.y > this.game.height ||
        element.x > this.game.width ||
        element.x < 0 - outX
      ) {
        this.delete(element);
      } else {
        element.update(delay);
      }
    });
  }
}
