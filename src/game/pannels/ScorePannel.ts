import { SCORE_PANNEL_HEIGHT, SCORE_PANNEL_WIDTH, SCORE_PANNEL_X, SCORE_PANNEL_Y } from '../consts';
import { GameObject, Text } from '../engine/GameObjects';
import { Scene } from '../engine/Scene';

export class ScorePannel extends GameObject {
  public type: string;

  public score: number;

  private text: Text;

  constructor(scene: Scene) {
    super({
      scene,
      x: SCORE_PANNEL_X,
      y: SCORE_PANNEL_Y,
      key: 'scorePannel',
      width: SCORE_PANNEL_WIDTH,
      height: SCORE_PANNEL_HEIGHT,
    });
    this.score = 0;
    this.type = 'Score';
    this.text = this.createText();
  }

  createText() {
    const text = new Text({
      parent: this,
      scene: this.scene,
      text: `${this.score}`,
      x: 0,
      y: 0,
    });
    this.children.set('scoreValue', text);
    return text;
  }

  onRender() {
    this.text.text = `${this.scene.game.score}`;
  }
}
