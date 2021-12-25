import { GameConfig } from './engine/Game/types';
import { SceneGameOver } from './scenes/SceneGameOver';
import { SceneGameStart } from './scenes/SceneGameStart';
import { SceneMain } from './scenes/SceneMain';

export const gameConfig: GameConfig = {
  width: 900,
  height: 600,
  backgroundColor: 'black',
  scenes: [SceneGameStart, SceneMain, SceneGameOver],
};
