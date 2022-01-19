import { COINS_SPEED, COINS_VALUE } from '../consts';
import { getRandomInt } from '../engine/Game/helpers';
import { GameObject, Sprite } from '../engine/GameObjects';
import { Scene } from '../engine/Scene';
import { sceneMainResources } from '../scenes/SceneMain/resources';

export class Coins extends Sprite {
  static key = 'Coin';

  static spriteKey = 'sprCoins';

  public type: string;

  public speed: number;

  public value: number;

  constructor(scene: Scene, x?: number, y?: number) {
    super({
      scene,
      x: x ?? getRandomInt(50, scene.game.width - 150),
      y: y ?? 0,
      spriteKey: Coins.spriteKey,
      source: scene.game.res.getResource(Coins.spriteKey),
    });
    const ImgData = sceneMainResources.spritesheets?.find((item) => item.name === Coins.spriteKey);

    if (ImgData) {
      const { options } = ImgData;
      const { frameWidth, frameHeight } = options;
      this.height = frameHeight;
      this.width = frameWidth;
    }
    this.type = 'Coins';
    this.speed = COINS_SPEED;
    this.value = COINS_VALUE;
    this.animation.add({ type: 'MoveDown', speed: this.speed });
    this.animation.add({ type: 'SpriteX' });
    this.play();
  }

  onCollide = (object1: GameObject, object2: GameObject): void => {
    const coin = object2 as Coins;
    this.scene.game.score += coin.value;
    this.scene.delete(coin);
  };
}
