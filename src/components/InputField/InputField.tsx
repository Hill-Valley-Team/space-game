import block from 'bem-cn';
import React, { ChangeEvent } from 'react';
import { InputFieldProps } from './types';
import './inputField.css';

const b = block('input-field');

export const InputField = ({
  id,
  type = 'text',
  className,
  isValid = false,
  view = 'default',
  label,
  errorText = 'Error in this field',
  onChangeHandle,
  ...props
}: InputFieldProps) => {
  const errorField = !isValid ? <div className={b('error-text')}>{errorText}</div> : null;

  const labelField = label ? (
    <label htmlFor={id} className={b('label')}>
      {label}
    </label>
  ) : null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, equal?: string) => {
    const newValue = e.target.value;
    if (onChangeHandle) {
      return onChangeHandle({ value: newValue, equal });
    }
    return null;
  };

  return (
    <div className={b({ [view]: true }).mix(className)}>
      {labelField}
      <input id={id} type={type} className={b('input')} onChange={handleChange} {...props} />
      {errorField}
    </div>
  );
};
