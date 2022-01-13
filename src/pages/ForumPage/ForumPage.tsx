import block from 'bem-cn';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/Title';
import { ListItem } from './ListItem/ListItem';
import { ThreadListData } from './types';
import { Button } from '../../components/Button';

import './forumPage.css';

const b = block('forum-page');

const threadData: ThreadListData = [
  {
    id: 1,
    title: 'Помогаем юзерам выбирать ПК конфигурации и обсуждаем их',
    text: 'Не долго думая создаю&nbsp;тему для общих благ&nbsp;(надеюсь полезную) где будем обсуждать ПК конфигурации. Предлагаю &quot;страждущим&quot; сделать апгрейд или&nbsp;купить новый компьютер кидать сю',
    datatime: '21:28, 25.07.2011',
    userName: 'DaRkSoUl72',
    comments: 200,
  },
  {
    id: 2,
    title: 'Всё о компьютерном разгоне (PC Overclocking - OC)',
    text: 'Начнём, надеюсь будет ПОЛЕЗНОЙ инфой!&nbsp;&nbsp; Всё о компьютерном разгоне (PC Overclocking - OC) Небольшой, скромный о разгоне &nbsp; &nbsp; Базовые понятия: &nbsp; 1. Q:Что такое разгон? От чего',
    datatime: '21:28, 25.07.2011',
    userName: 'DaRkSoUl72',
    comments: 33,
  },
  {
    id: 3,
    title: 'Выбираем, обсуждаем, покупаем игр.мышки',
    text: 'Так как тема была создана немногим раньше (получил бан за рекламу, ХЗ почему, ну пусть будет, это крайнее) пере-создаю её ещё разок, теперь без рекламы, картинок, и без описании мышек. ДАВАЙТЕ-КА буде',
    datatime: '21:28, 25.07.2011',
    userName: 'DaRkSoUl72',
    comments: 17,
  },
];

const threadList = threadData.map((item) => <ListItem data={item} />);

export const ForumPage = () => {
  const navigate = useNavigate();

  const backHandle = () => {
    navigate(-1);
  };

  const createPostHandle = () => {
    console.log('new post');
  };

  return (
    <div className={b()}>
      <PageContainer size="large">
        <div className={b('header')}>
          <Button
            className={b('btn-back')}
            type="button"
            text=""
            view="primary"
            onClick={backHandle}
            width="auto"
          />
          <Title text="Форум" className={b('title')} />
        </div>
        <table className={b('thread-list')}>
          <thead>
            <tr className={b('thead')}>
              <td>Тема</td>
              <td>Автор</td>
              <td>Дата</td>
              <td>Сообщений</td>
            </tr>
          </thead>
          <tbody>{threadList}</tbody>
        </table>
        <Button
          view="primary"
          align="center"
          onClick={createPostHandle}
          className={b('button')}
          text="Добавить тему"
        />
      </PageContainer>
    </div>
  );
};
