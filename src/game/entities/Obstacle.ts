import { Player } from '.';
import { OBSTACLE_DAMAGE, OBSTACLE_SPEED } from '../consts';
import { getRandomInt } from '../engine/Game/helpers';
import { GameObject, Sprite } from '../engine/GameObjects';
import { Scene } from '../engine/Scene';
import { sceneMainResources } from '../scenes/SceneMain/resources';

export class Obstacle extends Sprite {
  static key = 'Obstacle';

  public type: string;

  public speed: number;

  public damage: number;

  constructor(scene: Scene, spriteKey: string, x?: number, y?: number) {
    super({
      scene,
      x: x ?? getRandomInt(50, scene.game.width - 150),
      y: y ?? 0,
      spriteKey,
      source: scene.game.res.getResource(Obstacle.key),
    });

    const ImgData = sceneMainResources.spritesheets?.find((item) => item.name === this.spriteKey);

    if (ImgData) {
      const { options } = ImgData;
      const { frameWidth, frameHeight } = options;
      this.height = frameHeight;
      this.width = frameWidth;
    }

    this.type = 'Obstacle';
    this.speed = OBSTACLE_SPEED;
    this.damage = OBSTACLE_DAMAGE;
    this.animation.add({ type: 'MoveDown', speed: this.speed });
    this.play();
  }

  onCollide = (object1: GameObject, object2: GameObject) => {
    const player = object1 as Player;
    const obs = object2 as Obstacle;
    player.getDamage(obs.damage);
    this.scene.delete(obs);
  };
}
