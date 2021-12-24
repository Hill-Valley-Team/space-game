import { HEALTH_PANNEL_HEIGHT, HEALTH_PANNEL_WIDTH, PLAYER_HEALTH } from '../consts';
import { GameObject } from '../engine/GameObjects';
import { Scene } from '../engine/Scene';

export class Health extends GameObject {
  private _type: string;

  private _health: number;

  private _height: number;

  private _width: number;

  public get type() {
    return this._type;
  }

  public get health() {
    return this._health;
  }

  constructor(scene: Scene) {
    super({ scene, x: 0, y: 0, key: 'healthPannel' });
    this._type = 'Health';
    this._health = PLAYER_HEALTH;
    this._width = HEALTH_PANNEL_WIDTH;
    this._height = HEALTH_PANNEL_HEIGHT;
  }

  render(health: number) {
    const ctx = this.scene.game.context;
    this._health = health;

    const percent = this._health / PLAYER_HEALTH;

    if (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(this.x, this.y, this._width, this._height);
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x + 2, this.y + 2, (this._width - 4) * percent, this._height - 4);
    }
  }
}
