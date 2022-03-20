import { ForumComment, ForumTopic } from 'api/Forum/types';
import { userApi } from 'api/User/UserApi';
import block from 'bem-cn';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { addNewComment, getComments, getTopic } from 'controllers/ForumController';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { dateFormat } from 'utils/dateFormat';
import { PageContainer } from '../../components/PageContainer';
import { ThreadListItem } from './ThreadListItem';
import { CommentListData, CommentListItem } from './ThreadListItem/types';
import './forumThreadPage.css';
import { Message } from '../../components/Message';

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
      parentId: comment.parentId,
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
      data.forEach((comment) => {
        promises.push(setUserToComment(comment));
      });
      Promise.all(promises).then((values) => setComments(createCommentsList(values)));
    }
  };

  useEffect(() => {
    getParent();
    initComments();
  }, []);

  const createCommentHandle = () => {
    setIsCommentShow(true);
  };

  const addComment = async (message: string, title?: string, comment?: CommentListItem) => {
    setIsCommentShow(false);
    await addNewComment(
      message,
      comment?.id ?? null,
      Number(topicId) ?? 0,
      comment?.level ?? 0,
    ).then();
    await initComments();
    setIsCommentShow(false);
  };

  const getCommentMessageForm = (comment?: CommentListItem) => {
    return isCommentShow ? (
      <Message withTitle={false} onSubmit={addComment} comment={comment} />
    ) : (
      ''
    );
  };

  const createCommentsList = (arr: CommentListData) => {
    if (!arr || arr.length === 0) {
      return [];
    }
    const tc = arr.slice();
    let levelsDone = tc.length;
    let maxLevel = 0;
    tc.forEach((item) => {
      if (!item.parentId) {
        item.level = 0;
        item.comments = [];
        levelsDone--;
      }
    }); // первый проход для определения уровня 0
    while (levelsDone > 0) {
      tc.forEach((item) => {
        const parent = tc.find((p) => p.id === item.parentId);
        if (parent && parent.level !== undefined) {
          item.level = parent.level + 1;
          item.comments = [];
          if (item.level > maxLevel) {
            maxLevel = item.level;
          }
          levelsDone--;
        }
      });
    }

    const leveledComments: CommentListItem[] = [];
    while (maxLevel >= 0) {
      tc.forEach((item) => {
        if (item.level === maxLevel) {
          const parent = tc.find((p) => p.id === item.parentId);
          if (parent) {
            parent.comments?.push(item);
          }
        }
      });
      maxLevel--;
      if (!maxLevel) {
        tc.forEach((item) => {
          if (item.level === maxLevel) {
            leveledComments.push(item);
          }
        });
      }
    }
    return leveledComments;
  };

  const commentsList = comments.map((comment) => (
    <ThreadListItem data={comment} key={comment.id} addComment={addComment} />
  ));

  return (
    <div className={b()}>
      <PageContainer size="large">
        <div className={b('header')}>
          <BackButton />
          <Title text="Форум" className={b('title')} tag="h1" />
        </div>
        <div className={b('comments-list')}>
          <Title text={parent?.title} tag="h3" className={b('topic-name')} />
          <p
            className={b('topic-description')}
            dangerouslySetInnerHTML={{ __html: parent?.description ?? '' }}
          />
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
