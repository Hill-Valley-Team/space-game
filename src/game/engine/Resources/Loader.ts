import {
  AudioResourceConfig,
  ImageResourceConfig,
  SceneResourcesConfig,
  SpriteSheetConfig,
} from '../Scene/types';

export class Loader {
  private _path: string;

  private _resourses: Record<string, HTMLImageElement>;

  constructor(path: string) {
    this._path = path;
    this._resourses = {};
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

  private _loadImages = async (images: ImageResourceConfig[]) => {
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

  public async loadResources({ images, spritesheets, audio }: SceneResourcesConfig) {
    if (images) this._loadImages(images);

    if (spritesheets) this._loadSpriteSheets(spritesheets);

    if (audio) this._loadAudio(audio);
  }
}
