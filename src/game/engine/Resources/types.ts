export type SpriteSheetConfig = {
  name: string;
  path: string;
  options: {
    frameWidth: number;
    frameHeight: number;
  };
};

export type ImageResourceConfig = {
  name: string;
  path: string;
};

export type AudioResourceConfig = {
  name: string;
  path: string;
};

export type SceneResourcesConfig = {
  images?: ImageResourceConfig[];
  spritesheets?: SpriteSheetConfig[];
  audio?: AudioResourceConfig[];
};
