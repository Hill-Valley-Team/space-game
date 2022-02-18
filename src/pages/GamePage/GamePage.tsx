import block from 'bem-cn';
import React, { useEffect } from 'react';
import { ScenesNames } from '../../game/consts';
import { Game } from '../../game/engine/Game';
import { gameConfig } from '../../game/gameConfig';
import './gamePage.css';
import { setFullscreenListener, removeFullscreenListener } from '../../utils/fullscreen';
import {useGetUserInfo} from "../../hooks/useGetUserInfo";
import {nanoid} from "@reduxjs/toolkit";
import {updateLeaderBoard} from "../../controllers/LeaderBoardController";
import {LeaderBoardRequest} from "../../api/LeaderBoardApi/types";

const b = block('game-page');

export const GamePage = () => {
  const { userData } = useGetUserInfo();
  let game!: Game;

  const sendLeaderBoardScore = async (score: number) => {
    const userScore: LeaderBoardRequest = {
      data: {
        id: nanoid(),
        name: userData.display_name ?? userData.first_name,
        login: userData.login,
        points: score,
      },
      ratingFieldName: 'name',
      teamName: 'HillValley',
    };
    await updateLeaderBoard(userScore);
  }

  useEffect(() => {
    setFullscreenListener();
    game = new Game(gameConfig, sendLeaderBoardScore);
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
