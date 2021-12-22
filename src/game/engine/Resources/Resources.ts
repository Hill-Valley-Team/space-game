import {
  AudioResourceConfig,
  ImageResourceConfig,
  SceneResourcesConfig,
  SpriteSheetConfig,
} from './types';

export class Resources {
  private _path: string | null;

  private _cache: Record<string, HTMLImageElement>;

  constructor() {
    this._path = null;
    this._cache = {};
  }

  public getResource(key: string) {
    return this._cache[key] ?? null;
  }

  public get cache() {
    return this._cache;
  }

  public setImage(name: string, path: string): Promise<HTMLImageElement> {
    return new Promise((res) => {
      const img = new Image();
      img.onload = () => {
        res(img);
        this._cache[name] = img;
      };
      img.src = this._path + path;
    });
  }

  private async _loadImages(images: ImageResourceConfig[]) {
    return Promise.all(images.map(({ name, path }) => this.setImage(name, path)));
  }

  private _loadSpriteSheets = (spritesheets: SpriteSheetConfig[]) =>
    Promise.all(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      spritesheets.map(({ name, path, options }) => this.setImage(name, path)),
    );

  private _loadAudio = (audios: AudioResourceConfig[]) => {
    audios.forEach(({ name, path }) => {
      console.log(name, path);
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async load({ images, spritesheets, audio }: SceneResourcesConfig, path: string) {
    // TODO
    this._path = path;
    await Promise.all([this._loadImages(images!), this._loadSpriteSheets(spritesheets!)]);

    // if (audio) this._loadAudio(audio);
  }
}
