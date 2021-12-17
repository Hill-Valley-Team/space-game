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
  ...props
}: ButtonProps) => (
  <button type={type} className={b({ view, width }).mix(className)} {...props}>
    {text}
  </button>
);
