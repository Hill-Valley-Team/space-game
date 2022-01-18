import {
  HEALTH_PANNEL_HEIGHT,
  HEALTH_PANNEL_WIDTH,
  HEALTH_PANNEL_X,
  HEALTH_PANNEL_Y,
  PLAYER_HEALTH,
} from '../consts';
import { GameObject } from '../engine/GameObjects';
import { Scene } from '../engine/Scene';

export class Health extends GameObject {
  public type: string;

  public health: number;

  constructor(scene: Scene) {
    super({
      scene,
      x: HEALTH_PANNEL_X,
      y: HEALTH_PANNEL_Y,
      key: 'healthPannel',
      width: HEALTH_PANNEL_WIDTH,
      height: HEALTH_PANNEL_HEIGHT,
    });
    this.type = 'Health';
    this.health = PLAYER_HEALTH;
  }

  onRender() {
    const ctx = this.scene.game.context;

    const percent = this.health / PLAYER_HEALTH;

    if (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x + 2, this.y + 2, (this.width - 4) * percent, this.height - 4);
    }
  }
}
