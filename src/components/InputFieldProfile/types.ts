import { InputHTMLAttributes } from 'react';
import { HookOutputFunction } from '../../hooks/useFormInput/types';

export type InputFieldProfileOwnProps = {
  id?: string;
  className?: string;
  label?: string;
  errorText?: string | null;
  isValid?: boolean;
  isEdit?: boolean;
  onChangeHandle?: HookOutputFunction;
};

export type InputFieldProfileProps = InputFieldProfileOwnProps &
  InputHTMLAttributes<HTMLInputElement>;
