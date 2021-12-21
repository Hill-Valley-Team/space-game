import { GameObject } from '../engine/GameObject';
import { EntityProps } from './types';

export class Entity extends GameObject {
  private type: string;

  public getType() {
    return this.type;
  }

  constructor(props: EntityProps) {
    const { scene, x, y, key, type } = props;
    super({ scene, x, y, key });

    this.type = type;
  }
}
