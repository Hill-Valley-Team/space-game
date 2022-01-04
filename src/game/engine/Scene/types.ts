import { SceneManager } from '../SceneManager';

export type SceneProps = {
  key: string;
  scene: SceneManager;
};

export type EventsMap = Map<string, (event: Event) => void>;
