import block from 'bem-cn';
import React from 'react';
import { HeaderProps } from './types';
import './header.css';

const b = block('title');

export const Header = ({ tag: Tag = 'h3', text = 'Header', className, ...props }: HeaderProps) => (
  <Tag className={b.mix(className)} {...props}>
    {text}
  </Tag>
);
