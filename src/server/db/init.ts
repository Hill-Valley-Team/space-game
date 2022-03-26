import { ForumComment } from './models/ForumComment';
import { ForumTopic } from './models/ForumTopic';
import { SiteTheme } from './models/SiteTheme';

const DEMO_USER_ID = 166307;

const DEMO_TOPICS = [
  {
    title: 'Помогаем юзерам выбирать ПК конфигурации и обсуждаем их',
    description:
      'Не долго думая создаю тему для общих благ (надеюсь полезную) где будем обсуждать ПК конфигурации. Предлагаю сделать апгрейд или купить новый компьютер кидать сю',
    userId: DEMO_USER_ID,
  },
  {
    title: 'Всё о компьютерном разгоне (PC Overclocking - OC)',
    description:
      'Начнём, надеюсь будет ПОЛЕЗНОЙ инфой! Всё о компьютерном разгоне (PC Overclocking - OC) Небольшой, скромный о разгоне Базовые понятия: &nbsp; 1. Q:Что такое разгон? От чего',
    userId: DEMO_USER_ID,
  },
];

const DEMO_COMMENTS = [
  {
    commentId: 1,
    text: 'Мы заранее проверяли связь, всё работало стабильно. После сбоя испробовали несколько вариантов — увы, найти решение, кроме обычной конференции в Zoom, быстро не получилось. В Zoom есть ограничение по количеству мест.',
    userId: DEMO_USER_ID,
    topicId: 1,
    level: 0,
  },
  {
    commentId: 2,
    text: 'P.S. Если вам нужна личная поддержка любые вопросы, сомнения, переживания можно обсудить со своим куратором в личных сообщениях. Мы постараемся сделать всё, что в наших силах. :heart_hands:',
    userId: DEMO_USER_ID,
    topicId: 1,
    level: 0,
  },
  {
    commentId: 3,
    text: 'blabla',
    userId: DEMO_USER_ID,
    topicId: 1,
    parentId: 1,
    level: 1,
  },
  {
    commentId: 4,
    text: 'blablabla',
    userId: DEMO_USER_ID,
    topicId: 1,
    parentId: 2,
    level: 1,
  },
];

export const DEMO_THEMES = [
  { theme: 'light', description: 'Light theme used by default' },
  { theme: 'dark', description: 'Dark theme' },
];

export const initThemes = async () => {
  try {
    await SiteTheme.bulkCreate(DEMO_THEMES);
    console.log('Themes have been created');
  } catch {
    console.log('Themes have not been created');
  }
};

export const initForumTopics = async () => {
  try {
    await ForumTopic.bulkCreate(DEMO_TOPICS);
    console.log('Demo topics have been created');
  } catch {
    console.log('Demo topics have not been created');
  }
};

export const initForumComments = async () => {
  try {
    await ForumComment.bulkCreate(DEMO_COMMENTS);
    console.log('Demo comments have been created');
  } catch {
    console.log('Demo comments have not been created');
  }
};
