import { InputHTMLAttributes } from 'react';

export type InputFieldAvatarOwnProps = {
  id?: string;
  className?: string;
  label?: string;
  errorText?: string | null;
  isValid?: boolean;
  isEdit?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeHandler: (data: any) => void;
};

export type InputFieldAvatarProps = InputFieldAvatarOwnProps &
  InputHTMLAttributes<HTMLInputElement>;
