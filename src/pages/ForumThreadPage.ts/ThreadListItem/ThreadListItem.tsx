import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import { CommentListItem } from './types';
import './threadListItem.css';
const b = block('thread-list-item');

type ThreadListItemProps = PropsWithChildren<{
  data: CommentListItem;
}>;

const getCommentsList = (comments: CommentListItem[] | undefined) => {
  const commentsList = comments ? comments.map((comment) => <ThreadListItem data={comment} key={comment.id} />) : '';
  if (commentsList && commentsList.length) {
    return <div className={b('comments-list')}>{commentsList}</div>
  }
  return <div />;
}

export const ThreadListItem = (props: ThreadListItemProps) => {
  const { id, text, datatime, userName, comments } = props.data;
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
    </div>
  );
};
