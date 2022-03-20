import block from 'bem-cn';
import { Spinner } from 'components/Spinner';
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
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </td>
      <td className={b('userName')}>{userName ?? <Spinner />}</td>
      <td className={b('datetime')}>{datatime}</td>
      <td className={b('messages')}>{comments ?? <Spinner />}</td>
    </tr>
  );
};
