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
import { ThreadListItem } from './ThreadListItem';
import { CommentListData, CommentListItem } from './ThreadListItem/types';
import './forumThreadPage.css';
import {Message} from "../../components/Message";

const b = block('forum-thread-page');

export const ForumThreadPage = () => {
  const { topicId } = useParams<'topicId'>();
  const [comments, setComments] = useState<CommentListData>([]);
  const [parent, setParent] = useState<ForumTopic>();
  const [isCommentShow, setIsCommentShow] = useState(false);

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
          parentId: undefined,
          datatime: dateFormat(comment.createdAt),
          userName: undefined,
          comments: [
            {
              id: 234324,
              text: 'blabla',
              parentId: comment.id,
              datatime: dateFormat(comment.createdAt),
              userName: undefined,
              comments: [],
              level: 1,
            }
          ],
          level: 0,
        };
      });
      setComments(comments);
      Promise.all(promises).then((values) => setComments(values));
    }
  };

  useEffect(() => {
    getParent();
    initComments();
  }, []);

  const createCommentHandle = () => {
    console.log('new comment');
    setIsCommentShow(true);
  };

  const addComment = (message: string) => {
    setIsCommentShow(false);
  }

  const getCommentMessageForm = () => {
    return isCommentShow ? <Message withTitle={false} onSubmit={addComment} /> : '';
  }

  const commentsList = comments.map((comment) => <ThreadListItem data={comment} key={comment.id} />);

  return (
    <div className={b()}>
      <PageContainer size="large">
        <div className={b('header')}>
          <BackButton />
          <Title text="Форум" className={b('title')} tag="h1" />
        </div>
        <div className={b('comments-list')}>
          <Title text={parent?.title} tag="h3" className={b('topic-name')} />
          {commentsList}
        </div>
        <Button
          view="primary"
          align="center"
          onClick={createCommentHandle}
          className={b('button')}
          text="Добавить комментарий"
        />
        {getCommentMessageForm()}
      </PageContainer>
    </div>
  );
};
