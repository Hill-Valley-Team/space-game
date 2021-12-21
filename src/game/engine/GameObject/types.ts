import { Scene } from '../Scene';

export type GameObjectProps = {
  scene: Scene;
  x: number;
  y: number;
  key: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataObject = Record<string, any>;
