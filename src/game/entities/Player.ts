import { Sprite } from '../engine/GameObjects';
import { PlayerProps } from './types';

export class Player extends Sprite {
  private _type: string;

  public get type() {
    return this._type;
  }

  constructor(props: PlayerProps) {
    const { scene, x, y, key, source, width, height } = props;

    super({ scene, x, y, key, source, width, height });

    this._type = 'Player';

    this.setData('speed', 200);
    this.setData('isDead', false);

    this.body.velocity.x = 0;
    this.body.velocity.y = 100;
    // this.play('sprPlayer'); // TODO
  }

  moveUp() {
    this.body.velocity.y = -this.getData('speed');
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  update(delay: number) {
    // this._body.setVelocity(0, 0);
    if (this.body && this.body.velocity) {
      const dx = this.body.velocity.x! * delay;
      const dy = this.body.velocity.y! * delay;
      this.x += dx;
      this.y -= dy;
    }
    // this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    // this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
  }
}
