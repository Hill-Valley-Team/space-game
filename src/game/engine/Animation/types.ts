import { AnimationManager } from '.';

export type AnimationType =
  | 'SpriteX'
  | 'MoveDown'
  | 'MoveUp'
  | 'MoveRight'
  | 'MoveLeft'
  | 'FrameRow';
export type AnimationDirection = 'left' | 'right' | 'down' | 'up';
export type AnimationProps = {
  manager: AnimationManager;
  type: AnimationType;
  key: string;
  speed?: number;
  autoRun?: boolean;
  repeat?: boolean;
  frameRow?: number;
  frameColl?: number;
  direction?: AnimationDirection;
};
