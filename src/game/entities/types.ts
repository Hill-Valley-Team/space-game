import { GameObjectProps, SpriteProps } from '../engine/GameObjects/GameObject/types';

export type PlayerProps = {} & SpriteProps;
export type HealthProps = {} & GameObjectProps;
export type ObstacleProps = {
  x?: number;
  y?: number;
  type?: string;
} & Omit<SpriteProps, 'source' | 'type'>;
export type CoinsProps = {
  x?: number;
  y?: number;
  type?: string;
} & Omit<SpriteProps, 'source' | 'type' | 'spriteKey'>;
