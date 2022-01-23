import { ResultType } from '../pages/LeaderBoardPage/types';

export enum SortEnum {
  NAME = 'name',
  LOGIN = 'login',
  POINTS = 'points',
}

const sortByPoints = (a: ResultType, b: ResultType) => b.score - a.score;
const sortByName = (a: ResultType, b: ResultType) => a.name.localeCompare(b.name);
const sortByLogin = (a: ResultType, b: ResultType) => a.login.localeCompare(b.login);

export const sortResults = (results: ResultType[], sortType?: string) => {
  const localResults = results.slice();
  switch (sortType) {
    case SortEnum.NAME:
      return localResults.sort(sortByName);
    case SortEnum.POINTS:
      return localResults.sort(sortByPoints);
    case SortEnum.LOGIN:
      return localResults.sort(sortByLogin);
    default:
      return localResults.sort(sortByName);
  }
};
