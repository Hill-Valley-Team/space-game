import { Game } from '../Game';
import { Scene } from '../Scene';
import { ScenesConfig } from './types';

export class SceneManager {
  public game: Game;

  public current: Scene | null;

  private scenes: ScenesConfig;

  public cb: Function;

  public get(key: string) {
    return this.scenes[key];
  }

  constructor(game: Game, config: ScenesConfig, cb: Function) {
    this.game = game;
    this.current = null;
    this.scenes = config;
    this.cb = (score: number) => cb(score);
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
    if (key === 'win' || key === 'end') {
      this.cb(this.game.score);
    }
    this.current.start();
  }
}
