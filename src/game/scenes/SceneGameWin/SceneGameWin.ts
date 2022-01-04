import { ScenesNames } from '../../consts';
import { Button } from '../../engine/GameObjects/Button';
import { Text } from '../../engine/GameObjects/Text';
import { Scene } from '../../engine/Scene';
import { SceneManager } from '../../engine/SceneManager';

export class SceneGameWin extends Scene {
  private actionBtn: Button | null;

  constructor(scene: SceneManager) {
    super({ key: ScenesNames.END, scene });
    this.actionBtn = null;
  }

  create() {
    const text = new Text({
      key: 'gameWinText',
      scene: this,
      text: `Вы выиграли! Ваш счёт ${this.scene.game.score} очков`,
      x: this.scene.game.width / 2,
      y: this.scene.game.height / 2 - 50,
    });
    this.displayList.push(text);

    this.createRestartBtn();
    this.addListeners();
  }

  addListeners() {
    const onClickListener = (event: Event) => {
      if (event instanceof MouseEvent && event.type === 'click') {
        if (this.actionBtn?.checkClicked(event.x, event.y)) {
          this.actionBtn.isClicked = true;
        }
      }
    };

    document.addEventListener('click', onClickListener);
    this.setEvent('click', onClickListener);
  }

  createRestartBtn = () => {
    const btnWidth = 150;
    const btnHeight = 50;
    this.actionBtn = new Button({
      scene: this,
      key: 'restartGameBtn',
      x: this.scene.game.width / 2 - btnWidth / 2,
      y: this.scene.game.height / 2 - btnHeight / 2 + 20,
      color: 'black',
      bgColor: 'white',
      width: btnWidth,
      height: btnHeight,
      text: 'Ещё разок!',
      onClick: this.onBtnClick,
    });

    this.displayList.push(this.actionBtn);
  };

  onBtnClick = () => {
    this.scene.start(ScenesNames.MAIN);
  };
}
