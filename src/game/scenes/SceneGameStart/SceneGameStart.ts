import { Game } from '../../engine/Game';
import { Scene } from '../../engine/Scene';

export class SceneGameStart extends Scene {
  constructor(game: Game) {
    super({ key: 'SceneGameStart', game });
  }

  create() {}
}
