import block from 'bem-cn';
import React, { useEffect } from 'react';
import { gameConfig } from '../../game/config';
import { Game } from '../../game/engine/Game';
import './gamePage.css';

const b = block('game-page');

export const GamePage = () => {
  useEffect(() => {
    const game = new Game(gameConfig);
    console.log(game);
  });
  return (
    <div className={b()}>
      <div id="game" />
    </div>
  );
};
