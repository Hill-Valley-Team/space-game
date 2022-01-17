import { ScenesNames } from '../../consts';
import { Scene } from '../../engine/Scene';
import { SceneManager } from '../../engine/SceneManager';
import { StartButton } from '../../entities/StartButton';

export class SceneGameStart extends Scene {
  public startBtn: StartButton;

  constructor(sceneManager: SceneManager) {
    super({ key: ScenesNames.START, sceneManager });
    this.startBtn = new StartButton(this);
    this.startBtn.init();
  }
}
