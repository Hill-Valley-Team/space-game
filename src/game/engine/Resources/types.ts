import { gameResourses } from '.';

export type SpriteSheetConfig = {
  name: string;
  path: string;
  options: {
    frameWidth: number;
    frameHeight: number;
    colls?: number;
    rows?: number;
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

export type GameResourses = typeof gameResourses;
