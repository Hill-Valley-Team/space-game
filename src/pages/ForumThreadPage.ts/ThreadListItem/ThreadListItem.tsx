import block from 'bem-cn';
import React, { PropsWithChildren, useState } from 'react';
import { CommentListItem } from './types';
import './threadListItem.css';
import { Button } from '../../../components/Button';
import { Message } from '../../../components/Message';
const b = block('thread-list-item');

type ThreadListItemProps = PropsWithChildren<{
  data: CommentListItem;
  addComment: (message: string) => void;
}>;

export const ThreadListItem = (props: ThreadListItemProps) => {
  const [isCommentShow, setIsCommentShow] = useState(false);
  const { id, text, datatime, userName, comments } = props.data;
  const addComment = props.addComment;

  const getCommentsList = (comments: CommentListItem[] | undefined) => {
    const commentsList = comments
      ? comments.map((comment) => (
          <ThreadListItem data={comment} key={comment.id} addComment={addComment} />
        ))
      : '';
    if (commentsList && commentsList.length) {
      return <div className={b('comments-list')}>{commentsList}</div>;
    }
    return <div />;
  };

  const createCommentHandle = () => {
    setIsCommentShow(true);
  };

  const getCommentMessageForm = (comment?: CommentListItem) => {
    return isCommentShow ? (
      <Message
        withTitle={false}
        onSubmit={addComment}
        comment={comment}
        closeForm={() => setIsCommentShow(false)}
      />
    ) : (
      ''
    );
  };

  return (
    <div className={b()} key={id}>
      <div className={b('wrapper')}>
        <div className={b('info')}>
          <div className={b('username')}>{userName}</div>
          <div className={b('datetime')}>{datatime}</div>
        </div>
        <div className={b('comment')}>{text}</div>
      </div>
      <Button
        view="error"
        align="center"
        onClick={createCommentHandle}
        className={b('button')}
        text="Добавить комментарий"
      />
      {getCommentMessageForm(props.data)}
      {getCommentsList(comments)}
    </div>
  );
};
