import { Player } from '.';
import { OBSTACLE_DAMAGE, OBSTACLE_SPEED } from '../consts';
import { GameObject, Sprite } from '../engine/GameObjects';
import type { ObstacleProps } from './types';
import { sceneMainResources } from '../scenes/SceneMain/resources';

enum ObstacleAnimationKeys {
  FALLING = 'falling',
  ANIMATE = 'animate',
}

export class Obstacle extends Sprite {
  static key = 'Obstacle';

  public speed: number;

  public damage: number;

  constructor({ scene, spriteKey, x, y, type }: ObstacleProps) {
    super({
      scene,
      x: x ?? 0,
      y: y ?? 0,
      spriteKey,
      source: scene.game.res.getResource(spriteKey),
      type: type ?? Obstacle.key,
    });

    const ImgData = sceneMainResources.spritesheets?.find((item) => item.name === this.spriteKey);

    if (ImgData) {
      const { options } = ImgData;
      const { frameWidth, frameHeight, colls, rows } = options;
      this.height = frameHeight;
      this.width = frameWidth;

      this.frames.init(colls ?? 1, rows ?? 1);
    }

    this.speed = OBSTACLE_SPEED;
    this.damage = OBSTACLE_DAMAGE;

    this.animation.add({ key: ObstacleAnimationKeys.ANIMATE, type: 'FrameRow', frameRow: 1 });
    this.animation.add({ key: ObstacleAnimationKeys.FALLING, type: 'MoveDown', speed: this.speed });
    this.play();
  }

  onCollide = (object1: GameObject, object2: GameObject) => {
    if (object1 instanceof Player) {
      object1.collided(object2);
      this.scene.delete(object2);
    }
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

    // console.log(this.animation.get(ObstacleAnimationKeys.ANIMATE)?.currentFrame);
  }
}
