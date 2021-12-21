export type SceneProps = {
  key: string;
};

export type SpriteSheetConfig = {
  //TODO перенести
  name: string;
  path: string;
  options: {
    frameWidth: number;
    frameHeight: number;
  };
};

export type ImageResourceConfig = {
  //TODO перенести
  name: string;
  path: string;
};

export type AudioResourceConfig = {
  //TODO перенести
  name: string;
  path: string;
};

export type SceneResourcesConfig = {
  images?: ImageResourceConfig[];
  spritesheets?: SpriteSheetConfig[];
  audio?: AudioResourceConfig[];
};
