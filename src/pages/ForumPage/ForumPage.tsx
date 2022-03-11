import block from 'bem-cn';
import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/Title';
import { ListItem } from './ListItem';
import { ThreadListData, ThreadListItem } from './types';

import './forumPage.css';
import { getTopics } from 'controllers/ForumController';
import { userApi } from 'api/User/UserApi';
import { ForumTopic } from 'api/Forum/types';
import { dateFormat } from 'utils/dateFormat';
import { BackButton } from 'components/BackButton';
import { Message } from 'components/Message';

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

  const handleCreatePost = (message: string) => {
    console.log(message);
  };

  return (
    <div className={b()}>
      <PageContainer size="large">
        <div className={b('header')}>
          <BackButton />
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
        {/* <AddBlock
          buttonText="Добавить тему"
          className={b('add-block')}
          onClickHandler={createPostHandle}
        /> */}
        <Message withTitle={true} onSubmit={handleCreatePost} />
      </PageContainer>
    </div>
  );
};
