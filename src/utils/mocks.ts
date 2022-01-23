import { nanoid } from '@reduxjs/toolkit';
import type { ResultType } from '../pages/LeaderBoardPage/types';

export const mockResults: ResultType[] = [
  {
    id: nanoid(),
    name: 'Player 1',
    login: 'player1',
    score: 23424,
  },
  {
    id: nanoid(),
    name: 'Player 2',
    login: 'aplayer2',
    score: 114,
  },
  {
    id: nanoid(),
    name: 'Player 3',
    login: 'player3',
    score: 90249,
  },
];
