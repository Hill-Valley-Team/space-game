import { ScenesConfig } from '../SceneManager/types';

export type GameConfig = {
  width: number;
  height: number;
  backgroundColor: string;
  parent?: HTMLElement | string;
  scenes: ScenesConfig;
};

export type SpriteRes = {
  spriteKey: string;
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
  spriteKey: string;
  dx: number;
  dy: number;
  dWidth?: number;
  dHeight?: number;
};

export type GameBoundsProps = {
  x: number;
  y: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingLeft?: number;
  paddingBottom?: number;
};
