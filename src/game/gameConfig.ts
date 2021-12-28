import { GameConfig } from './engine/Game/types';
import { SceneGameOver } from './scenes/SceneGameOver';
import { SceneGameStart } from './scenes/SceneGameStart';
import { SceneMain } from './scenes/SceneMain';
import { ScenesConfig } from './engine/SceneManager/types';
import { ScenesNames } from './consts';
import { SceneGameWin } from './scenes/SceneGameWin';

const scenesConfig: ScenesConfig = {
  [ScenesNames.MAIN]: {
    scene: SceneMain,
    autoPlay: true,
  },
  [ScenesNames.START]: {
    scene: SceneGameStart,
    autoPlay: true,
  },
  [ScenesNames.END]: {
    scene: SceneGameOver,
    autoPlay: true,
  },

  [ScenesNames.WIN]: {
    scene: SceneGameWin,
    autoPlay: true,
  },
};

export const gameConfig: GameConfig = {
  width: 900,
  height: 600,
  backgroundColor: 'black',
  scenes: scenesConfig,
};
