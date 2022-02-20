import { leaderBoardApi } from '../api/LeaderBoardApi';
import { LeaderBoardRequest } from '../api/LeaderBoardApi/types';

export const getLeaderBoard = async (type: string) => {
  const response = await leaderBoardApi.getBoard({
    ratingFieldName: type,
    cursor: 0,
    limit: 100,
  });
  console.log(response);
  return response.data.map((item) => item.data);
};

export const updateLeaderBoard = async (data: LeaderBoardRequest) => {
  const response = await leaderBoardApi.addResult(data);
  console.log(response);
};
