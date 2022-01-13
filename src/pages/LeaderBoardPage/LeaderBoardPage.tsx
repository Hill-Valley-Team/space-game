import block from 'bem-cn';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import './leaderBoardPage.css';
import { PageContainer } from '../../components/PageContainer';

const b = block('leader-board-page');
const h = block('table-header');

export const LeaderBoardPage = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate('/');
  };

  const onSortBtnClick = useCallback((event) => {
    // сортировка списка по дата-атрибуту
    const tableHeaderButtons = document.querySelectorAll('.table-header__btn');
    tableHeaderButtons.forEach((btn) => {
      btn.classList.remove('table-header__btn_active');
    });
    event.target.classList.add('table-header__btn_active');
  }, []);

  return (
    <div className={b()}>
      <PageContainer size="medium">
        <div className={b('top-wrapper')}>
          <Button
            onClick={onBtnClick}
            className={b('btn-back')}
            type="button"
            text=""
            view="primary"
            width="auto"
          />
          <Title tag="h2" className={b('title')} text="Таблица достижений" />
        </div>
        <div className={b('table-header').mix(h())}>
          <button onClick={onSortBtnClick} data-sort="name" type="button" className={h('btn')}>
            Имя
          </button>
          <button onClick={onSortBtnClick} data-sort="login" type="button" className={h('btn')}>
            Логин
          </button>
          <button onClick={onSortBtnClick} data-sort="points" type="button" className={h('btn')}>
            Результат
          </button>
        </div>
        <ul className={b('table')}>
          <li className={b('table-row')}>
            <span>Игорь</span>
            <span>igorek</span>
            <span>24545</span>
          </li>
          <li className={b('table-row')}>
            <span>Саша</span>
            <span>sashka</span>
            <span>10445</span>
          </li>
          <li className={b('table-row')}>
            <span>Петя</span>
            <span>pet245</span>
            <span>345</span>
          </li>
        </ul>
      </PageContainer>
    </div>
  );
};
