import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import { CommentListItem } from './types';
import './threadListItem.css';

const b = block('thread-list-item');

type ThreadListItemProps = PropsWithChildren<{
  data: CommentListItem;
}>;

export const ThreadListItem = (props: ThreadListItemProps) => {
  const { id, text, datatime, userName } = props.data;

  return (
    <div className={b()} key={id}>
      <div className={b('wrapper')}>
        <div className={b('info')}>
          <div className={b('username')}>{userName}</div>
          <div className={b('datetime')}>{datatime}</div>
        </div>
        <div className={b('comment')}>{text}</div>
      </div>
    </div>
  );
};
