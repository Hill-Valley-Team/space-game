export enum NAMES {
  KEYDOWN = 'keydown',
  KEYUP = 'keyup',
}

export enum CODES {
  ARROW_RIGHT = 'ArrowRight',
  ARROW_LEFT = 'ArrowLeft',
}

export abstract class Keyboard {
  static NAMES = NAMES;

  static CODES = CODES;

  static code: CODES;
}
