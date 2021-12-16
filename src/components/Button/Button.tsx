import block from 'bem-cn';
import React from 'react';
import { ButtonProps } from '.';
import './button.css';

const b = block('button');

export const Button = ({
  text = 'Button',
  view = 'default',
  width = 'auto',
  className,
  type = 'submit',
  disabled,
  ...props
}: ButtonProps) => (
  <button type={type} disabled={disabled} className={b({ view, width }).mix(className)} {...props}>
    {text}
  </button>
);
