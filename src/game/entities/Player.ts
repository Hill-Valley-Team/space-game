import { Entity } from './Entity';
import { PlayerProps } from './types';

export class Player extends Entity {
  constructor(props: PlayerProps) {
    const { scene, x, y, key } = props;

    super({ scene, x, y, key, type: 'Player' });

    this.setData('speed', 200);
    this.setData('isDead', false);
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

  update() {
    this._body.setVelocity(0, 0);

    // this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    // this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
  }
}
