import block from 'bem-cn';
import React, { ChangeEvent } from 'react';
import { InputFieldProfileProps } from './types';
import './inputFieldProfile.css';

const b = block('input-field-profile');

export const InputFieldProfile = ({
  id,
  type = 'text',
  className,
  isValid = false,
  isEdit = false,
  label,
  errorText = 'Error in this field',
  onChangeHandle,
  ...props
}: InputFieldProfileProps) => {
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
    <div className={b({ edit: isEdit }).mix(className)}>
      {labelField}
      <input
        id={id}
        readOnly={!isEdit}
        type={type}
        className={b('input')}
        onChange={handleChange}
        {...props}
      />
      {errorField}
    </div>
  );
};
