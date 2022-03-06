import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import './listItem.css';
import { CommentListItem } from './types';

const b = block('list-item');

type ListItemProps = PropsWithChildren<{
  data: CommentListItem;
}>;

export const ListItem = (props: ListItemProps) => {
  const { id, text, datatime, userName } = props.data;

  return (
    <div className={b()} key={id}>
      <div className={b('info')}>
        <div>{userName}</div>
        <div>{datatime}</div>
      </div>
      <div className={b('text')}>{text}</div>
    </div>
  );
};
