import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { ThreadListItem } from '../types';
import './listItem.css';

const b = block('list-item');

type ListItemProps = PropsWithChildren<{
  data: ThreadListItem;
}>;

export const ListItem = (props: ListItemProps) => {
  const { id, title, text, datatime, userName, comments } = props.data;

  return (
    <tr className={b()} key={id}>
      <td className={b('info')}>
        <h3>
          <Link to={`${id}`}>{title}</Link>
        </h3>
        <p>{text}</p>
      </td>
      <td className={b('datetime')}>{datatime}</td>
      <td className={b('userName')}>{userName}</td>
      <td className={b('messages')}>{comments}</td>
    </tr>
  );
};
