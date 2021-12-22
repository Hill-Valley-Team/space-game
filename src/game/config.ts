import { GameConfig } from './engine/Game/types';
import { SceneGameOver, SceneGameStart, SceneMain } from './scenes';

export const gameConfig: GameConfig = {
  width: 960,
  height: 600,
  backgroundColor: 'white',
  scene: [SceneGameStart, SceneMain, SceneGameOver],
};
