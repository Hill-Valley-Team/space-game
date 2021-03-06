import { ASSETS_PATH, ScenesNames } from '../../consts';
import { getRandomInt } from '../../engine/Game/helpers';
import { Scene } from '../../engine/Scene';
import { SceneManager } from '../../engine/SceneManager';
import { Player } from '../../entities';
import { Coins } from '../../entities/Coins';
import { HealthPannel } from '../../pannels/HealthPannel';
import { Obstacle } from '../../entities/Obstacle';
import { ScorePannel } from '../../pannels/ScorePannel';
import { LEVEL_TIME } from './consts';
import { sceneMainResources } from './resources';
import { pointerLock, pointerUnlock } from '../../../utils/pointerLock';

export class SceneMain extends Scene {
  private gameStartTime: number;

  private get player() {
    return this.displayList.get(Player.key) as Player;
  }

  private healthPannel: HealthPannel | null;

  private scorePannel: ScorePannel | null;

  private attackInterval: null | ReturnType<typeof setInterval>;

  private coinsInterval: null | ReturnType<typeof setInterval>;

  constructor(sceneManager: SceneManager) {
    super({ key: 'SceneMain', sceneManager });
    this.healthPannel = null;
    this.scorePannel = null;
    this.attackInterval = null;
    this.coinsInterval = null;
    this.gameStartTime = 0;
    this.game.score = 0;
  }

  async preload() {
    await this.game.res.load(sceneMainResources, ASSETS_PATH);
  }

  create() {
    pointerLock(this.game.canvas!);
    const player = new Player(this);
    player.init();

    this.healthPannel = new HealthPannel(this);
    this.scorePannel = new ScorePannel(this);

    this.createAttack();
  }

  createAttack() {
    const enemies = ['sprEnemy0', 'sprEnemy1', 'sprEnemy2'];
    this.attackInterval = setInterval(
      () => this.createObstacle(enemies[getRandomInt(0, enemies.length)]),
      3000,
    );

    this.coinsInterval = setInterval(() => this.createCoin(), 4500);
  }

  onDestroy() {
    clearInterval(this.attackInterval!);
    clearInterval(this.coinsInterval!);
    pointerUnlock();
  }

  checkCollisions() {
    this.displayList.forEach((object) => {
      if (object !== this.player) {
        this.game.collider.collide(this.player, object, object.onCollide);
      }
    });
  }

  createObstacle(key: string) {
    const obstacle = new Obstacle({
      scene: this,
      spriteKey: key,
      x: getRandomInt(50, this.game.width - 150),
      y: 0,
    });
    obstacle.init();
  }

  createCoin(x?: number, y?: number) {
    const coin = new Coins({
      scene: this,
      x: x ?? getRandomInt(50, this.game.width - 150),
      y: y ?? 0,
    });
    coin.init();
  }

  onRender() {
    this.game.add.image({
      dx: 0,
      dy: 0,
      spriteKey: 'sprBg0',
    });

    this.healthPannel?.render();
    this.scorePannel?.render();
  }

  onUpdate(delay: number) {
    if (!this.isActive) return;

    this.healthPannel!.health = this.player!.health;
    this.scorePannel!.score = this.game.score;

    if (this.gameStartTime >= LEVEL_TIME) {
      this.sceneManager.start(ScenesNames.WIN);
    }

    if (this.player.health <= 0) {
      this.sceneManager.start(ScenesNames.END);
    }

    this.gameStartTime += delay;

    this.checkCollisions();
  }
}
