import block from 'bem-cn';
import React, { useEffect } from 'react';
import { Game } from '../../game/engine/Game';
import { gameConfig } from '../../game/gameConfig';
import { SceneGameOver } from '../../game/scenes/SceneGameOver';
import { SceneGameStart } from '../../game/scenes/SceneGameStart';
import { SceneMain } from '../../game/scenes/SceneMain';
import './gamePage.css';

const b = block('game-page');

export const GamePage = () => {
  useEffect(() => {
    const game = new Game(gameConfig);

    game.state.add('start', SceneGameStart);
    game.state.add('main', SceneMain);
    game.state.add('over', SceneGameOver);
    game.state.start('main');
  }, []);

  return (
    <div className={b()}>
      <div id="game" />
    </div>
  );
};
