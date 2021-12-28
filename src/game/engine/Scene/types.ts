import { SceneManager } from '../SceneManager';

export type SceneProps = {
  key: string;
  scene: SceneManager;
};

export type EventObject = {
  key: string;
  event: (event: Event) => void;
};
