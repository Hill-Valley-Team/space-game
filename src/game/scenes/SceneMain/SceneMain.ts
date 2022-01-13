import { ASSETS_PATH, ScenesNames } from '../../consts';
import { getRandomInt } from '../../engine/Game/helpers';
import { GameObject, Sprite } from '../../engine/GameObjects';
import { Scene } from '../../engine/Scene';
import { SceneManager } from '../../engine/SceneManager';
import { Player } from '../../entities';
import { Coins } from '../../entities/Coins';
import { Health } from '../../entities/Health';
import { Obstacle } from '../../entities/Obstacle';
import { LEVEL_TIME } from './consts';
import { sceneMainResources } from './resources';

export class SceneMain extends Scene {
  private gameStartTime: number;

  private _player: Player | null;

  private _obstacles: Obstacle[];

  private _coins: Coins[];

  private _healthPannel: Health | null;

  private _attackInterval: null | ReturnType<typeof setInterval>;

  private _coinsInterval: null | ReturnType<typeof setInterval>;

  constructor(scene: SceneManager) {
    super({ key: 'SceneMain', scene });
    this._player = null;
    this._obstacles = [];
    this._coins = [];
    this._healthPannel = null;
    this._attackInterval = null;
    this._coinsInterval = null;
    this.gameStartTime = 0;
    this.scene.game.score = 0;
  }

  async preload() {
    await this.scene.game.res.load(sceneMainResources, ASSETS_PATH);
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
        x: this.scene.game.width * 0.5,
        y: this.scene.game.height * 0.6,
        key: name,
        source: this.scene.game.res.getResource(name),
        height: frameHeight,
        width: frameWidth,
      });
    }

    this.displayList.push(this._player!);

    this.createHealthPannel();

    this.createAttack();

    this.addListeners();
  }

  createHealthPannel() {
    this._healthPannel = new Health(this);
  }

  createAttack() {
    const enemies = ['sprEnemy0', 'sprEnemy1', 'sprEnemy2'];
    this._attackInterval = setInterval(
      () => this.createObstacle(enemies[getRandomInt(0, enemies.length - 1)]),
      3000,
    );

    this._coinsInterval = setInterval(() => this.createCoin('sprCoins'), 4500);
  }

  // TODO вынести в class Events
  addListeners() {
    const keyDownListener = (event: Event) => {
      if (event instanceof KeyboardEvent) {
        if (event.code === 'ArrowRight') {
          this._player!.moveRight(true);
        }

        if (event.code === 'ArrowLeft') {
          this._player!.moveLeft(true);
        }
      }
    };

    const keyUpListener = (event: Event) => {
      if (event instanceof KeyboardEvent) {
        if (event.code === 'ArrowRight') {
          this._player!.moveRight(false);
        }

        if (event.code === 'ArrowLeft') {
          this._player!.moveLeft(false);
        }
      }
    };

    document.addEventListener('keydown', keyDownListener);
    document.addEventListener('keyup', keyUpListener);
    this.setEvent('keydown', keyDownListener);
    this.setEvent('keyup', keyUpListener);
  }

  destroy() {
    this.deleteEventListeners();
    clearInterval(this._attackInterval!);
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
        this.scene.game.score += cn.value;
        this.delete(cn);
        console.log(this.scene.game.score);
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
        x: x ?? getRandomInt(50, this.scene.game.width - 150),
        y: y ?? 0,
        key: name,
        source: this.scene.game.res.getResource(name),
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
        x: x ?? getRandomInt(50, this.scene.game.width - 150),
        y: y ?? 0,
        key: name,
        source: this.scene.game.res.getResource(name),
        height: frameHeight,
        width: frameWidth,
      });
    }
    this.displayList.push(coin!);
    this._coins.push(coin!);
  }

  render() {
    // TODO убрать render в объекты

    if (!this.isActive) return;

    this.scene.game.add.image(this._player!.getProps());
    this.scene.game.add.image({
      dx: 0,
      dy: 0,
      key: 'sprBg0',
    });
    this._obstacles.forEach((item) => {
      this.scene.game.add.image(item.getProps());
    });
    this._coins.forEach((item) => {
      this.scene.game.add.sprite(item.getProps());
    });
    this._healthPannel!.health = this._player!.health;
    this._healthPannel?.render(); // TODO

    this.isActive = true;
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
    if (!this.isActive) return;
    if (this.gameStartTime >= LEVEL_TIME) {
      this.scene.start(ScenesNames.WIN);
    }
    if (this._player!.health <= 0) {
      this.scene.start(ScenesNames.END);
    }

    this.gameStartTime += delay;

    this.checkCollisions();

    this.displayList.forEach((element) => {
      const outY = element instanceof Sprite ? element.height! : 50;
      const outX = element instanceof Sprite ? element.height! : 50;

      if (
        element.y < 0 - outY ||
        element.y > this.scene.game.height ||
        element.x > this.scene.game.width ||
        element.x < 0 - outX
      ) {
        this.delete(element);
      } else {
        element.update(delay);
      }
    });
  }
}
