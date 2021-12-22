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
    return this._resourses[key];
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

  private _loadImages = (images: ImageResourceConfig[]) => {
    Promise.all([
      images.forEach(({ name, path }) => {
        this.setImage(name, path);
      }),
    ]);
  };

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

  public loadResources({ images, spritesheets, audio }: SceneResourcesConfig, path: string) {
    this._path = path;
    if (images) this._loadImages(images);

    if (spritesheets) this._loadSpriteSheets(spritesheets);

    if (audio) this._loadAudio(audio);

    return this._resourses;
  }
}
