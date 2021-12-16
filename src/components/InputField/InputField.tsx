import block from 'bem-cn';
import React, { ChangeEvent, useState } from 'react';
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
  view = 'default',
  label,
  errorText = 'Error in this field',
  onChange,
  ...props
}: InputFieldProps) => {
  const [passVisible, setPassVisible] = useState(false);

  const errorField = !isValid ? <div className={b('error-text')}>{errorText}</div> : null;

  const labelField = label ? (
    <label htmlFor={id} className={b('label')}>
      {label}
    </label>
  ) : null;

  const togglePasswordControl = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setPassVisible(!passVisible);
    console.log(passVisible);
  };

  const passwordControl =
    type === 'password' ? (
      <button
        type="button"
        onClick={togglePasswordControl}
        aria-label="Показать пароль"
        className={b('password-control', { [passVisible ? 'view' : 'hide']: true })}
      />
    ) : null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, equal?: string) => {
    const newValue = e.target.value;
    if (onChange) {
      return onChange({ value: newValue, equal });
    }
    return null;
  };

  return (
    <div className={b({ [view]: true }).mix(className)}>
      {labelField}
      {passwordControl}
      <input
        id={id}
        name={name ?? id}
        type={type === 'password' && passVisible ? 'text' : type}
        className={b('input')}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      {errorField}
    </div>
  );
};
