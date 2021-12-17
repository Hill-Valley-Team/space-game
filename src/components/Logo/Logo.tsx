import block from 'bem-cn';
import React from 'react';
import './logo.css';
import logoImg from './static/logo.png';

const b = block('logo');

export const Logo = () => (
  <div className={b()}>
    <img src={logoImg} alt="Space Racing Game" />
  </div>
);
