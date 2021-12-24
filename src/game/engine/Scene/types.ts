import { Game } from '../Game';

export type SceneProps = {
  key: string;
  game: Game;
};

export type EventObject = {
  key: string;
  event: (event: Event) => void;
};
