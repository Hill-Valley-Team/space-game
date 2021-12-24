import { GameConfig } from './engine/Game/types';
import { SceneGameOver } from './scenes/SceneGameOver';
import { SceneGameStart } from './scenes/SceneGameStart';
import { SceneMain } from './scenes/SceneMain';

export const gameConfig: GameConfig = {
  width: 480,
  height: 600,
  backgroundColor: 'white',
  scenes: [SceneGameStart, SceneMain, SceneGameOver],
};
