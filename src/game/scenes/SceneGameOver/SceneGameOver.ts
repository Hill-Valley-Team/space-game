import { ScenesNames } from '../../consts';
import { Button } from '../../engine/GameObjects/Button';
import { Text } from '../../engine/GameObjects/Text';
import { Scene } from '../../engine/Scene';
import { SceneManager } from '../../engine/SceneManager';
import { RestartButton } from '../../entities/RestartButton';

export class SceneGameOver extends Scene {
  public actionBtn: Button | null;

  constructor(sceneManager: SceneManager) {
    super({ key: ScenesNames.END, sceneManager });
    this.actionBtn = new RestartButton(this);
    this.actionBtn.init();
  }

  create() {
    const text = new Text({
      key: 'gameOverText',
      scene: this,
      text: 'Вы проиграли :( Начать заново?',
      x: this.game.width / 2,
      y: this.game.height / 2 - 50,
    });

    this.add(text);
  }
}
