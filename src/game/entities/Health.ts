import { HEALTH_PANNEL_HEIGHT, HEALTH_PANNEL_WIDTH, PLAYER_HEALTH } from '../consts';
import { GameObject } from '../engine/GameObjects';
import { Scene } from '../engine/Scene';

export class Health extends GameObject {
  public type: string;

  public health: number;

  constructor(scene: Scene) {
    super({
      scene,
      x: 0,
      y: 0,
      key: 'healthPannel',
      width: HEALTH_PANNEL_WIDTH,
      height: HEALTH_PANNEL_HEIGHT,
    });
    this.type = 'Health';
    this.health = PLAYER_HEALTH;
  }

  render() {
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
