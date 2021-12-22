import { Constructable } from '../interfaces';
import { Scene } from '../Scene';
import { State } from '../State/State';

export type GameConfig = {
  width: number;
  height: number;
  backgroundColor: string;
  parent?: HTMLElement | string;
  scenes?: Constructable<Scene>[];
  state?: State;
};

export type ImgRes = {
  image: HTMLImageElement;
  x: number;
  y: number;
};
