import { Game } from '../../engine/Game';
import { Scene } from '../../engine/Scene';

export class SceneGameOver extends Scene {
  constructor(game: Game) {
    super({ key: 'SceneGameOver', game });
  }

  create() {}
}
