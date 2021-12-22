import {
  AudioResourceConfig,
  ImageResourceConfig,
  SceneResourcesConfig,
  SpriteSheetConfig,
} from '../Scene/types';

export class Loader {
  private _path: string | null;

  private _resourses: Record<string, HTMLImageElement>;

  constructor() {
    this._path = null;
    this._resourses = {};
  }

  public getResource(key: string) {
    return this._resourses[key] ?? null;
  }

  public get resources() {
    return this._resourses;
  }

  public setImage(name: string, path: string): Promise<HTMLImageElement> {
    return new Promise((res) => {
      const img = new Image();
      img.onload = () => {
        res(img);
        this._resourses[name] = img;
      };
      img.src = this._path + path;
    });
  }

  private _loadImages(images: ImageResourceConfig[]) {
    return Promise.all([
      images.forEach(({ name, path }) => {
        this.setImage(name, path);
      }),
    ]);
  }

  private _loadSpriteSheets = (spritesheets: SpriteSheetConfig[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    spritesheets.forEach(({ name, path, options }) => {
      this.setImage(name, path); // TODO
    });
  };

  private _loadAudio = (audios: AudioResourceConfig[]) => {
    audios.forEach(({ name, path }) => {
      console.log(name, path);
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async loadResources({ images, spritesheets, audio }: SceneResourcesConfig, path: string) {
    // TODO

    this._path = path;
    return this._loadImages(images!).then(() => this._resourses);

    // if (spritesheets) this._loadSpriteSheets(spritesheets);

    // if (audio) this._loadAudio(audio);
  }
}
