import { HookOutputFunction } from '../types';

export const withEqualValue = (fn: HookOutputFunction, equal: string): HookOutputFunction => {
  return ({ value }) => fn({ value, equal });
};
