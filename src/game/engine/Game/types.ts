import { Scene } from '../Scene';
import { State } from '../State/State';

export type GameState = Record<string, unknown>;
export type GameConfig = {
  width: number;
  height: number;
  backgroundColor: string;
  scene: Scene[];
  parent?: HTMLElement | string;
  state?: State;
};
