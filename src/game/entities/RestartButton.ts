import { BTN_HEIGHT, BTN_WIDTH, ScenesNames } from '../consts';
import { Button } from '../engine/GameObjects/Button';
import { Scene } from '../engine/Scene';

export class RestartButton extends Button {
  constructor(scene: Scene, text?: string) {
    super({
      scene,
      key: 'restartGameBtn',
      x: scene.game.width / 2 - BTN_WIDTH / 2,
      y: scene.game.height / 2 - BTN_HEIGHT / 2 + 20,
      color: 'black',
      bgColor: 'white',
      width: BTN_WIDTH,
      height: BTN_HEIGHT,
      text: text ?? 'Restart Game',
    });
  }

  onBtnClick() {
    this.scene.sceneManager.start(ScenesNames.MAIN);
  }
}
