import { ScenesNames } from '../../consts';
import { Button } from '../../engine/GameObjects/Button';
import { Scene } from '../../engine/Scene';
import { SceneManager } from '../../engine/SceneManager';

export class SceneGameStart extends Scene {
  private startBtn: Button | null;

  constructor(scene: SceneManager) {
    super({ key: 'start', scene });
    this.startBtn = null;
  }

  create() {
    this.createStartBtn();
    this.addListeners();
  }

  addListeners() {
    const onClickListener = (event: Event) => {
      if (event instanceof MouseEvent && event.type === 'click') {
        if (this.startBtn?.checkClicked(event.x, event.y)) {
          this.startBtn.isClicked = true;
        }
      }
    };

    document.addEventListener('click', onClickListener);
    this.setEvent('click', onClickListener);
  }

  onBtnClick = () => {
    this.scene.start(ScenesNames.MAIN);
  };

  createStartBtn = () => {
    const btnWidth = 150;
    const btnHeight = 50;
    this.startBtn = new Button({
      scene: this,
      key: 'startGameBtn',
      x: this.scene.game.width / 2 - btnWidth / 2,
      y: this.scene.game.height / 2 - btnHeight / 2,
      color: 'black',
      bgColor: 'white',
      width: btnWidth,
      height: btnHeight,
      text: 'Start Game',
      onClick: this.onBtnClick,
    });

    this.displayList.push(this.startBtn);
  };
}
