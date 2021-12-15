import block from 'bem-cn';
import React, { ChangeEvent } from 'react';
import { InputFieldProps } from './types';
import './inputField.css';

const b = block('input-field');

export const InputField = ({
  id,
  name,
  value,
  type = 'text',
  className,
  isValid = false,
  disabled = false,
  label,
  errorText = 'Error in this field',
  onChange,
  ...props
}: InputFieldProps) => {
  const errorField = !isValid ? <div className={b.mix('error-text')}>{errorText}</div> : null;

  const labelField = label ? <label htmlFor={id}>{label}</label> : null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, equal?: string) => {
    const newValue = e.target.value;
    if (onChange) {
      return onChange({ value: newValue, equal });
    }
  };

  return (
    <div className={b.mix(className)}>
      {labelField}
      <input
        id={id}
        name={name ?? id}
        type={type}
        className={b.mix('input')}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      {errorField}
    </div>
  );
};
