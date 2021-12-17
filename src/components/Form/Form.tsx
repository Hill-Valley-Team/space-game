import block from 'bem-cn';
import React from 'react';
import { FormProps } from './types';
import './form.css';

const b = block('form');

export const Form = ({ className, children, ...props }: FormProps) => (
  <form className={b.mix(className)} {...props}>
    {children}
  </form>
);
