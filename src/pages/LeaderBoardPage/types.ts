export type LeaderBoardPageProps = {
  results: ResultType[];
};

export type ResultType = {
  id: string;
  name: string;
  login: string;
  score: number;
};
