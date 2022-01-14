import { ScenesConfig } from '../SceneManager/types';

export type GameConfig = {
  width: number;
  height: number;
  backgroundColor: string;
  parent?: HTMLElement | string;
  scenes: ScenesConfig;
};

export type SpriteRes = {
  key: string;
  sx: number;
  sy: number;
  sWidth: number;
  sHeight: number;
  dx: number;
  dy: number;
  dWidth: number;
  dHeight: number;
};

export type ImageRes = {
  key: string;
  dx: number;
  dy: number;
  dWidth?: number;
  dHeight?: number;
};
