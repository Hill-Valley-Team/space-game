import { Scene } from '../../Scene';

export type GameObjectProps = {
  scene: Scene;
  x: number;
  y: number;
  width?: number;
  height?: number;
  key?: string;
};

export type SpriteProps = {
  source: HTMLImageElement;
  frame?: number;
  spriteKey: string;
} & GameObjectProps;

export type ButtonProps = {
  text?: string;
  color?: string;
  bgColor?: string;
  onClick?: () => void;
} & GameObjectProps;

export type TextProps = {
  text?: string;
  color?: string;
} & GameObjectProps;

export type DataObject = Map<string, unknown>;
