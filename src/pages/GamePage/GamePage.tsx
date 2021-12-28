import block from 'bem-cn';
import React, { useEffect } from 'react';
import { Game } from '../../game/engine/Game';
import { gameConfig } from '../../game/gameConfig';
import './gamePage.css';

const b = block('game-page');

export const GamePage = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const game = new Game(gameConfig);

    // game.state.add('start', SceneGameStart);
    // game.state.add('main', SceneMain);
    // game.state.add('over', SceneGameOver);
    // game.state.start('start');
  }, []);

  return (
    <div className={b()}>
      <div id="game" />
    </div>
  );
};
