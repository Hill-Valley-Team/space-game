import { ForumComment, ForumTopic } from 'api/Forum/types';
import { userApi } from 'api/User/UserApi';
import block from 'bem-cn';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { getComments, getTopic } from 'controllers/ForumController';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { dateFormat } from 'utils/dateFormat';
import { PageContainer } from '../../components/PageContainer';

import './forumPage.css';
import { ListItem } from './ListItem';
import { CommentListData, CommentListItem } from './ListItem/types';

const b = block('forum-thread-page');

export const ForumThreadPage = () => {
  const { topicId } = useParams<'topicId'>();
  const [comments, setComments] = useState<CommentListData>([]);
  const [parent, setParent] = useState<ForumTopic>();

  const getParent = async () => {
    if (topicId) {
      const topic = await getTopic(Number(topicId));
      setParent(topic);
    }
  };

  const setUserToComment = async (comment: ForumComment) => {
    const user = await userApi.getUserById(comment.userId);
    const userName = `${user.data.first_name} ${user.data.second_name}`;
    return {
      id: comment.id,
      text: comment.text,
      datatime: dateFormat(comment.createdAt),
      userName: userName,
    };
  };

  const initComments = async () => {
    const data = await getComments(Number(topicId));
    if (!data?.length) {
      setComments([]);
    } else {
      const promises: Promise<CommentListItem>[] = [];
      const comments = data.map((comment) => {
        promises.push(setUserToComment(comment));
        return {
          id: comment.id,
          text: comment.text,
          datatime: dateFormat(comment.createdAt),
          userName: undefined,
          comments: undefined,
        };
      });
      setComments(comments);
    }
  };

  useEffect(() => {
    getParent();
    initComments();
  }, []);

  const createCommentHandle = () => {
    console.log('new post');
  };

  const commentsList = comments.map((comment) => <ListItem data={comment} />);

  return (
    <div className={b()}>
      <PageContainer size="large">
        <div className={b('header')}>
          <BackButton />
          <Title text="Форум" className={b('title')} />
          <Title text={parent?.title} tag="h4" />
        </div>
        <div className={b('comments-list')}>{commentsList}</div>
        <Button
          view="primary"
          align="center"
          onClick={createCommentHandle}
          className={b('button')}
          text="Добавить комментарий"
        />
      </PageContainer>
    </div>
  );
};
