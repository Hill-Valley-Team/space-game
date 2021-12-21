import { GameConfig } from './engine/Game/types';
import { SceneGameOver, SceneGameStart, SceneMain } from './scenes';

export const gameConfig: GameConfig = {
  width: 480,
  height: 640,
  backgroundColor: 'white',
  scene: [SceneGameStart, SceneMain, SceneGameOver],
};
