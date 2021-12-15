import { ChangeEvent } from 'react';
import { HookOutputFunction } from '../../hooks/useFormInput/types';

export type DefaultInputOnChangeFunction = (e: ChangeEvent<HTMLInputElement>) => void;

export type InputFieldProps = {
  id?: string;
  name?: string;
  type?: 'text' | 'email' | 'hidden' | 'number' | 'password' | 'tel';
  value?: string;
  className?: string;
  label?: string;
  errorText?: string | null;
  isValid?: boolean;
  disabled?: boolean;
  onChange?: HookOutputFunction;
};
