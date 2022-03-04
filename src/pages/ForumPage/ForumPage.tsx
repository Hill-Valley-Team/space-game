import block from 'bem-cn';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/Title';
import { ListItem } from './ListItem/ListItem';
import { ThreadListData, ThreadListItem } from './types';
import { Button } from '../../components/Button';

import './forumPage.css';
import { getTopics } from 'controllers/ForumController';
import { userApi } from 'api/User/UserApi';
import { ForumTopic } from 'api/Forum/types';

const b = block('forum-page');

export const ForumPage = () => {
  const [topics, setTopics] = useState<ThreadListData>([]);

  const threadList = topics.map((item) => <ListItem key={item.id} data={item} />);

  const setUserToTopic = async (topic: ForumTopic) => {
    const user = await userApi.getUserById(topic.userId);
    const userName = `${user.data.first_name} ${user.data.second_name}`;
    const count = 0; // TODO
    return {
      id: topic.id,
      title: topic.title,
      text: topic.description,
      datatime: dateFormat(topic.createdAt),
      userName: userName,
      comments: count,
    };
  };

  const dateFormat = (dt: string) => {
    const date = Date.parse(dt);
    return new Date().toLocaleDateString();
  };

  const initTopics = async () => {
    try {
      const topics = await getTopics();
      if (!topics?.length) {
        setTopics([]);
      } else {
        const promises: Promise<ThreadListItem>[] = [];

        const threads = topics.map((topic) => {
          promises.push(setUserToTopic(topic));
          return {
            id: topic.id,
            title: topic.title,
            text: topic.description,
            datatime: dateFormat(topic.createdAt),
            userName: undefined,
            comments: undefined,
          };
        });

        setTopics(threads);
        Promise.all(promises).then((values) => setTopics(values));
      }
    } catch {
      console.log('error loading forum threads');
    }
  };

  useEffect(() => {
    initTopics();
  }, []);

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
