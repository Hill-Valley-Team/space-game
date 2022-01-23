import { Game } from '../Game';
import type { GameObject } from '../GameObjects';

export class Collider {
  private game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  public collide(
    object1: GameObject,
    object2: GameObject,
    callback: (object1: GameObject, object2: GameObject) => void,
  ) {
    if (this.checkCollision(object1, object2)) {
      callback.call(object2, object1, object2);
    }
  }

  public clickCollide(event: MouseEvent, object: GameObject, callback: Function) {
    if (this.checkClickCollision({ x: event.offsetX, y: event.offsetY }, object)) {
      callback.call(object);
    }
  }

  public checkCollision(object1: GameObject, object2: GameObject) {
    if (
      object2.y + object2.height! >= object1.y &&
      object2.y <= object1.y + object1.height! &&
      object2.x + object2.width! >= object1.x &&
      object2.x <= object1.x + object1.width!
    ) {
      return true;
    }
    return false;
  }

  public checkClickCollision(pointer: { x: number; y: number }, object: GameObject) {
    if (
      pointer.x >= object.x &&
      pointer.x <= object.x + object.width &&
      pointer.y >= object.y &&
      pointer.y <= object.y + object.height
    ) {
      return true;
    }
    return false;
  }
}
