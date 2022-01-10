import block from 'bem-cn';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/Title';

const b = block('forum-page');

type ThreadItem = {
  id: number;
  title: string;
  text: string;
  datatime: string;
  userName: string;
  comments: number;
};
type ThreadData = ThreadItem[];

const threadData: ThreadData = [
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

const threadList = threadData.map((item) => {
  const { id, title, text, datatime, userName, comments } = item;
  return (
    <div className={b('thread-item')}>
      <div>
        <Link to={`/${id}`}>{title}</Link>
      </div>
      <div>{text}</div>
      <div>{datatime}</div>
      <div>{userName}</div>
      <div>{comments}</div>
    </div>
  );
});

export const ForumPage = () => (
  <div className={b()}>
    <PageContainer size="large">
      <Title text="Форум" className={b('title')} />
      <div className={b('threads')}>{threadList}</div>
    </PageContainer>
  </div>
);
