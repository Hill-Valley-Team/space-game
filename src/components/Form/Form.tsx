import block from 'bem-cn';
import React, { Children } from 'react';
import { FormProps } from './types';

const b = block('form');

export const Form = ({ className, ...props }: FormProps) => (
  <form className={b.mix(className)} {...props}>
    {Children}
  </form>
);
