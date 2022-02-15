import { ImageResourceConfig, SceneResourcesConfig, SpriteSheetConfig } from './types';

class Resources {
  public path: string | null;

  public cache: Record<string, HTMLImageElement>;

  constructor() {
    this.path = null;
    this.cache = {};
  }

  public getResource(key: string) {
    return this.cache[key] ?? null;
  }

  public setImage(name: string, path: string): Promise<HTMLImageElement> {
    return new Promise((res) => {
      const img = new Image();
      img.onload = () => {
        res(img);
        this.cache[name] = img;
      };
      img.src = this.path + path;
    });
  }

  private loadImages = (images: ImageResourceConfig[]) =>
    Promise.all(images.map(({ name, path }) => this.setImage(name, path)));

  private loadSpriteSheets = (spritesheets: SpriteSheetConfig[]) =>
    Promise.all(spritesheets.map(({ name, path }) => this.setImage(name, path)));

  public load({ images, spritesheets }: SceneResourcesConfig, path: string) {
    this.path = path;
    return Promise.all([this.loadImages(images!), this.loadSpriteSheets(spritesheets!)]);
  }
}

export const gameResourses = new Resources();
