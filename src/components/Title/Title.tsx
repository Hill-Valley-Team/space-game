import block from 'bem-cn';
import React from 'react';
import { TitleProps } from './types';
import './title.css';

const b = block('title');

export const Title = ({ Tag = 'h3', text = 'Header', className, ...props }: TitleProps) => (
  <Tag className={(b.mix(className), b(Tag))} {...props}>
    {text}
  </Tag>
);
