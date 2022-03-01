import { ForumTopic } from './models/ForumTopic';
import { SiteTheme } from './models/SiteTheme';

const DEMO_USER_ID = 166307;

const DEMO_TOPICS = [
  {
    title: 'Помогаем юзерам выбирать ПК конфигурации и обсуждаем их',
    description:
      'Не долго думая создаю тему для общих благ (надеюсь полезную) где будем обсуждать ПК конфигурации. Предлагаю &quot;страждущим&quot; сделать апгрейд или&nbsp;купить новый компьютер кидать сю',
    userId: DEMO_USER_ID,
  },
  {
    title: 'Всё о компьютерном разгоне (PC Overclocking - OC)',
    description:
      'Начнём, надеюсь будет ПОЛЕЗНОЙ инфой!&nbsp;&nbsp; Всё о компьютерном разгоне (PC Overclocking - OC) Небольшой, скромный о разгоне &nbsp; &nbsp; Базовые понятия: &nbsp; 1. Q:Что такое разгон? От чего',
    userId: DEMO_USER_ID,
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
