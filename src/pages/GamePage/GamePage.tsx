import block from 'bem-cn';
import React from 'react';
import './gamePage.css';

const b = block('game-page');

export const GamePage = () => (
  <div className={b()}>
    <div id="game" />
  </div>
);
