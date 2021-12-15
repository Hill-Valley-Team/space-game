import { ValidationType } from '../../utils/validation';

export type HookInputObject = {
  value?: string;
  type?: ValidationType;
  equal?: string | undefined;
};

export type HookOutputObject = {
  value: string;
  errorMessage: string | null;
  isValid: boolean;
};

export type HookOutputFunction = ({ value, type, equal }: HookInputObject) => void;

export type HookResult = [HookOutputObject, HookOutputFunction];
