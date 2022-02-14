import block from 'bem-cn';
import React, { useEffect } from 'react';
import { ScenesNames } from '../../game/consts';
import { Game } from '../../game/engine/Game';
import { gameConfig } from '../../game/gameConfig';
import './gamePage.css';
import { setFullscreenListener, removeFullscreenListener } from '../../utils/fullscreen';

const b = block('game-page');

export const GamePage = () => {
  useEffect(() => {
    setFullscreenListener();
    const game = new Game(gameConfig);
    game.scene.start(ScenesNames.START);
  }, []);
  useEffect(
    () => () => {
      removeFullscreenListener();
    },
    [],
  );

  return (
    <div className={b()}>
      <div id="game" />
      <p>Нажмите F, чтобы переключить полноэкранный режим</p>
    </div>
  );
};
