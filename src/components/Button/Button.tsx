import block from 'bem-cn';
import React from 'react';
import { ButtonProps } from '.';
import './button.css';

const b = block('button');

export const Button = ({ text = 'Button', className, type='submit', ...props }: ButtonProps) => (
  <button type={type} className={b.mix(className)} {...props}>
    {text}
  </button>
);
