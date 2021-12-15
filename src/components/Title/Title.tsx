import block from 'bem-cn';
import React from 'react';
import { TitleProps } from './types';
import './title.css';

const b = block('title');

export const Title = ({ Tag = 'h2', text = 'Header', className, ...props }: TitleProps) => (
  <Tag className={b.mix(className)} {...props}>
    {text}
  </Tag>
);
