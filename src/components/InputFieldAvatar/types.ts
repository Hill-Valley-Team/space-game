import { InputHTMLAttributes } from 'react';

export type InputFieldAvatarOwnProps = {
  id?: string;
  className?: string;
  label?: string;
  errorText?: string | null;
  isValid?: boolean;
  isEdit?: boolean;
  onChangeHandler: (formData: FormData) => void;
};

export type InputFieldAvatarProps = InputFieldAvatarOwnProps &
  InputHTMLAttributes<HTMLInputElement>;
