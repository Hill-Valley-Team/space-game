import block from 'bem-cn';
import React, { useEffect } from 'react';
import { ScenesNames } from '../../game/consts';
import { Game } from '../../game/engine/Game';
import { gameConfig } from '../../game/gameConfig';
import './gamePage.css';

const b = block('game-page');

export const GamePage = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const game = new Game(gameConfig);
    game.scene.start(ScenesNames.START);
    // game.scene.start(ScenesNames.WIN);
  }, []);

  return (
    <div className={b()}>
      <div id="game" />
      <p>Нажмите F11, чтобы переключить полноэкранный режим</p>
    </div>
  );
};
