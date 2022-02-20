export type LeaderBoardData = {
  id: string;
  name: string;
  login: string;
  points: number;
};

export type LeaderBoardRequest = {
  data: LeaderBoardData;
  ratingFieldName: string;
  teamName: string;
};

export type LeaderBoardAllRequest = {
  ratingFieldName: string;
  cursor: number;
  limit: number;
};
