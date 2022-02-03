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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const game = new Game(gameConfig);
    game.scene.start(ScenesNames.START);
  }, []);
  useEffect(
    () => () => {
      console.log('remove');
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
