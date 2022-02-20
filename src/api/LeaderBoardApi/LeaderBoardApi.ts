import { BaseApi } from '../BaseApi';
import { LeaderBoardAllRequest, LeaderBoardRequest } from './types';

class LeaderBoardApi extends BaseApi {
  constructor() {
    super('/leaderboard');
  }

  public addResult = (data: LeaderBoardRequest) =>
    this.http.post('/', data, {
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });

  public getBoard = (data: LeaderBoardAllRequest) =>
    this.http.post('/HillValley', data, {
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });
}

export const leaderBoardApi = new LeaderBoardApi();
