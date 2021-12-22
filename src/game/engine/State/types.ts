import { Constructable } from '../interfaces';
import { Scene } from '../Scene';

export type GameStateObject = {
  key: string;
  scene: Constructable<Scene>;
};
