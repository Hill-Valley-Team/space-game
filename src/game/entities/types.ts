import { Scene } from '../engine/Scene';

export type EntityProps = {
  scene: Scene;
  x: number;
  y: number;
  key: string;
  type: string;
};

export type PlayerProps = Omit<EntityProps, 'type'>;
