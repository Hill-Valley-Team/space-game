import { Scene } from '../../Scene';

export type GameObjectProps = {
  scene: Scene;
  x: number;
  y: number;
  key: string;
};

export type SpriteProps = {
  width?: number;
  height?: number;
  source: HTMLImageElement;
  frame?: number;
} & GameObjectProps;

export type ButtonProps = {
  width?: number;
  height?: number;
  text?: string;
  color?: string;
  bgColor?: string;
  onClick?: () => void;
} & GameObjectProps;

export type TextProps = {
  text?: string;
  color?: string;
} & GameObjectProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataObject = Record<string, any>; //TODO убрать any
