export class Inputs {
  eventName: keyof DocumentEventMap | null;

  code: KeyboardEvent['code'] | null;

  fn: (() => void) | null;

  constructor() {
    this.eventName = null;
    this.code = null;
    this.fn = null;
  }
}
