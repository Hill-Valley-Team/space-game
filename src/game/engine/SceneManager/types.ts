import { Constructable } from '../interfaces';
import { Scene } from '../Scene';

export type SceneConfig = {
  scene: Constructable<Scene>;
  autoPlay: boolean;
};
export type ScenesConfig = Record<string, SceneConfig>;
