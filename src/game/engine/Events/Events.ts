import { GameObject } from '../GameObjects';
import { EventCallbackFn, EventsMap } from './types';

export class Events {
  private eventList: EventsMap;

  private holder: Document;

  constructor() {
    this.eventList = new Map();
    this.holder = document;
  }

  public addListener = (
    context: GameObject,
    name: keyof DocumentEventMap,
    fn: Function,
    code?: string,
  ) => {
    const callback = (event: Event) => {
      if (event instanceof KeyboardEvent && event.code === code) {
        fn.call(context);
      }

      if (event instanceof MouseEvent) {
        fn.call(context, event);
      }
    };

    this.holder.addEventListener(name, callback);

    this.setEvent(name, callback);
  };

  public removeAllListeners = () => {
    this.eventList.forEach((value, key) => {
      this.removeListener(value, key);
    });
  };

  public removeListener = (value: EventCallbackFn, key: string) => {
    this.holder.removeEventListener(key, value);
    this.eventList.delete(key);
  };

  public getEvent(key: string) {
    return this.eventList.get(key);
  }

  public setEvent(key: string, event: (event: Event) => void) {
    this.eventList.set(key, event);
  }

  public destroy = () => {
    this.removeAllListeners();
  };
}
