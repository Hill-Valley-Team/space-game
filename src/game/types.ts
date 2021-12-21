import { Scene } from './Scene';

export type GameState = Record<string, string>;
export type GameConfig = {
  width: number;
  height: number;
  backgroundColor: string;
  scene: Scene[];
};
