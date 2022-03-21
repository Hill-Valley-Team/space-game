import block from 'bem-cn';
import React from 'react';
import './logo.css';
import logoImg from './static/logo.png';

const b = block('logo');

type LogoProps = {
  align?: 'center' | 'left';
  className?: string;
};

export const Logo = ({ align, className, ...props }: LogoProps) => (
  <div className={b({ align }).mix(className)} {...props}>
    <img src={logoImg} alt="Space Racing Game" />
  </div>
);
