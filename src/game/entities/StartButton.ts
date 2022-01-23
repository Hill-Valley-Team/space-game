import { BTN_HEIGHT, BTN_WIDTH, ScenesNames } from '../consts';
import { Button } from '../engine/GameObjects/Button';
import { Scene } from '../engine/Scene';

export class StartButton extends Button {
  constructor(scene: Scene) {
    super({
      scene,
      key: 'startGameBtn',
      x: scene.game.width / 2 - BTN_WIDTH / 2,
      y: scene.game.height / 2 - BTN_HEIGHT / 2,
      color: 'black',
      bgColor: 'white',
      width: BTN_WIDTH,
      height: BTN_HEIGHT,
      text: 'Start Game',
    });
  }

  onBtnClick() {
    this.scene.sceneManager.start(ScenesNames.MAIN);
  }
}
