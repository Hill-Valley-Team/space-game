import block from 'bem-cn';
import React from 'react';
import { useParams } from 'react-router';
import { PageContainer } from '../../components/PageContainer';

import './forumPage.css';

const b = block('forum-thread-page');

export const ForumThreadPage = () => {
  let { topicId } = useParams<'topicId'>();
  console.log(topicId);

  return (
    <div className={b()}>
      <PageContainer>123</PageContainer>
    </div>
  );
};
