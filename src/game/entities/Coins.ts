import { COINS_SPEED, COINS_VALUE } from '../consts';
import { GameObject, Sprite } from '../engine/GameObjects';
import { sceneMainResources } from '../scenes/SceneMain/resources';
import { CoinsProps } from './types';

enum CoinsAnimationKeys {
  FALLING = 'falling',
  ROTATE = 'rotate',
}

export class Coins extends Sprite {
  static key = 'Coin';

  static spriteKey = 'sprCoins';

  public type: string;

  public speed: number;

  public value: number;

  constructor({ scene, x, y, type }: CoinsProps) {
    super({
      scene,
      x: x ?? 0,
      y: y ?? 0,
      spriteKey: Coins.spriteKey,
      source: scene.game.res.getResource(Coins.spriteKey),
      type: type ?? Coins.key,
    });
    const ImgData = sceneMainResources.spritesheets?.find((item) => item.name === Coins.spriteKey);

    if (ImgData) {
      const { options } = ImgData;
      const { frameWidth, frameHeight, colls, rows } = options;
      this.height = frameHeight;
      this.width = frameWidth;
      this.frames.init(colls ?? 1, rows ?? 1);
    }

    this.type = 'Coins';
    this.speed = COINS_SPEED;
    this.value = COINS_VALUE;
    this.animation.add({ key: CoinsAnimationKeys.FALLING, type: 'MoveDown', speed: this.speed });
    this.animation.add({ key: CoinsAnimationKeys.ROTATE, type: 'FrameRow', frameRow: 1 });
    this.play();
  }

  onCollide = (object1: GameObject, object2: GameObject): void => {
    const coin = object2 as Coins;
    this.scene.game.score += coin.value;
    this.scene.delete(coin);
  };

  isOnGameBounds() {
    return this.scene.game.isOnGameBounds({
      x: this.x,
      y: this.y,
      paddingBottom: -this.height,
    });
  }

  onUpdate() {
    if (this.isOnGameBounds().isOnBottom) {
      this.delete();
    }
  }
}
