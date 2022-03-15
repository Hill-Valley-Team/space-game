import block from 'bem-cn';
import React, {PropsWithChildren, useState} from 'react';
import { CommentListItem } from './types';
import './threadListItem.css';
import {Button} from "../../../components/Button";
import {Message} from "../../../components/Message";
const b = block('thread-list-item');

type ThreadListItemProps = PropsWithChildren<{
  data: CommentListItem;
  addComment: (message: string, title?: string | undefined) => void;
  createCommentHandle: () => void;
}>;

export const ThreadListItem = (props: ThreadListItemProps) => {
  const [isCommentShow, setIsCommentShow] = useState(false);

  const { id, text, datatime, userName, comments } = props.data;
  const addComment = props.addComment;
  const createCommentHandle = props.createCommentHandle;

  const getCommentsList = (comments: CommentListItem[] | undefined) => {
    const commentsList = comments ? comments.map((comment) => <ThreadListItem data={comment} key={comment.id} addComment={addComment} createCommentHandle={createCommentHandle} />) : '';
    if (commentsList && commentsList.length) {
      return <div className={b('comments-list')}>{commentsList}</div>
    }
    return <div />;
  }

  const getCommentMessageForm = () => {

    return isCommentShow ? <Message withTitle={false} onSubmit={addComment} /> : '';
  }

  return (
    <div className={b()} key={id}>
      <div className={b('wrapper')}>
        <div className={b('info')}>
          <div className={b('username')}>{userName}</div>
          <div className={b('datetime')}>{datatime}</div>
        </div>
        <div className={b('comment')}>{text}</div>
      </div>
      {getCommentsList(comments)}
      <Button
        view="primary"
        align="center"
        onClick={createCommentHandle}
        className={b('button')}
        text="Добавить комментарий"
      />
      {getCommentMessageForm()}
    </div>
  );
};
