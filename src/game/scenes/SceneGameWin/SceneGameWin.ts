import { ScenesNames } from '../../consts';
import { Button } from '../../engine/GameObjects/Button';
import { Text } from '../../engine/GameObjects/Text';
import { Scene } from '../../engine/Scene';
import { SceneManager } from '../../engine/SceneManager';
import { RestartButton } from '../../entities/RestartButton';

export class SceneGameWin extends Scene {
  public actionBtn: Button | null;

  constructor(sceneManager: SceneManager) {
    super({ key: ScenesNames.END, sceneManager });
    this.actionBtn = new RestartButton(this, 'Ещё разок');
    this.actionBtn.init();
  }

  create() {
    const text = new Text({
      key: 'gameWinText',
      scene: this,
      text: `Вы выиграли! Ваш счёт ${this.sceneManager.game.score} очков`,
      x: this.sceneManager.game.width / 2,
      y: this.sceneManager.game.height / 2 - 50,
    });
    this.add(text);
  }
}
