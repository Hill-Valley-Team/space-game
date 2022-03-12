import { ValidationType } from './consts';

export type ValidationRules = {
  symbols: string;
  minLength: number;
  maxLength?: number;
  pattern?: RegExp;
};

export type ValidationResult = {
  isValid: boolean;
  errorMessage: string | null;
};

export type ValidationFunction = {
  value: string;
  type: ValidationType;
};
