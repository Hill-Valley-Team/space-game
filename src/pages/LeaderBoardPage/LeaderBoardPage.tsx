import block from 'bem-cn';
import React, {useEffect, useState} from 'react';
import { Title } from '../../components/Title';
import { BackButton } from '../../components/BackButton';
import './leaderBoardPage.css';
import { PageContainer } from '../../components/PageContainer';
import { SortEnum } from '../../utils/sort';
import {getLeaderBoard} from "../../controllers/LeaderBoardController";
import {LeaderBoardAllRequest, LeaderBoardData} from "../../api/LeaderBoardApi/types";

const b = block('leader-board-page');
const h = block('table-header');

export const LeaderBoardPage = () => {
  const [results, setResults] = useState<LeaderBoardData[]>([]);

  const updateResults = (type: string) => {
    getLeaderBoard(type)
      .then((data: LeaderBoardData[]) => {
        console.log(data);
        if (!data?.length) {
          setResults([]);
        } else {
          setResults(data);
        }
        return true;
      })
      .catch(() => {
        console.log('error loading leaderboard');
      });
  }
  useEffect(() => {
    updateResults('name');
  }, []);



  const onSortBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    updateResults(event.currentTarget.dataset.sort ?? 'name');
  };

  return (
    <div className={b()}>
      <PageContainer size="medium">
        <div className={b('top-wrapper')}>
          <BackButton className={b('back')} />
          <Title tag="h2" className={b('title')} text="Таблица достижений" />
        </div>
        <div className={b('table-header').mix(h())}>
          <button
            onClick={onSortBtnClick}
            data-sort={SortEnum.NAME}
            type="button"
            className={h('btn')}
          >
            Имя
          </button>
          <button
            onClick={onSortBtnClick}
            data-sort={SortEnum.LOGIN}
            type="button"
            className={h('btn')}
          >
            Логин
          </button>
          <button
            onClick={onSortBtnClick}
            data-sort={SortEnum.POINTS}
            type="button"
            className={h('btn')}
          >
            Результат
          </button>
        </div>
        <ul className={b('table')}>
          {results.map((item) => (
            <li key={item.id} className={b('table-row')}>
              <span>{item.name}</span>
              <span>{item.login}</span>
              <span>{item.points}</span>
            </li>
          ))}
        </ul>
      </PageContainer>
    </div>
  );
};
