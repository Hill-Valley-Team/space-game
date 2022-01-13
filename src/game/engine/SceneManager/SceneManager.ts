import { Game } from '../Game';
import { Scene } from '../Scene';
import { ScenesConfig } from './types';

export class SceneManager {
  public game: Game;

  public current: Scene | null;

  private scenes: ScenesConfig;

  public get(key: string) {
    return this.scenes[key];
  }

  constructor(game: Game, config: ScenesConfig) {
    this.game = game;
    this.current = null;
    this.scenes = config;
  }

  private create(key: string) {
    const NewScene = this.scenes[key].scene;
    return new NewScene(this);
  }

  public start(key: string) {
    if (this.current) {
      this.current.destroy();
      this.current = null;
    }
    const newScene = this.create(key);
    this.current = newScene;
    this.current.start();
  }
}
