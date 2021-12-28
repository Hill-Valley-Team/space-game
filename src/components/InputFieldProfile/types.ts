import { InputHTMLAttributes } from 'react';

export type InputFieldProfileOwnProps = {
  id?: string;
  className?: string;
  label?: string;
  errorText?: string | null;
  isValid?: boolean;
  isEdit?: boolean;
};

export type InputFieldProfileProps = InputFieldProfileOwnProps &
  InputHTMLAttributes<HTMLInputElement>;
