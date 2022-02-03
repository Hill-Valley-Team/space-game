import { GameObject } from '.';
import { Scene } from '../../Scene';

export type GameObjectProps = {
  scene: Scene;
  x: number;
  y: number;
  width?: number;
  height?: number;
  key?: string;
  parent?: GameObject | null;
};

export type SpriteProps = {
  source: HTMLImageElement;
  frame?: number;
  spriteKey: string;
  type: string;
} & GameObjectProps;

export type ButtonProps = {
  text?: string;
  color?: string;
  bgColor?: string;
  onClick?: () => void;
} & GameObjectProps;

export type TextAlign = 'left' | 'center' | 'right';
export type TextValign = 'top' | 'middle' | 'bottom';

export type TextProps = {
  text?: string;
  color?: string;
  size?: number;
  font?: string;
  align?: TextAlign;
  valign?: TextValign;
} & GameObjectProps;

export type DataObject = Map<string, unknown>;
