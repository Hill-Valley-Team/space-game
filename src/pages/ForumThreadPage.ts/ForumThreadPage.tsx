import block from 'bem-cn';
import { getComments } from 'controllers/ForumController';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PageContainer } from '../../components/PageContainer';

import './forumPage.css';

const b = block('forum-thread-page');

export const ForumThreadPage = () => {
  const { topicId } = useParams<'topicId'>();
  const [comments, setComments] = useState<any>([]);
  console.log(comments);

  const initComments = async () => {
    const comments = await getComments(Number(topicId));
    setComments(comments);
  };

  useEffect(() => {
    initComments();
  }, []);

  return (
    <div className={b()}>
      <PageContainer>123</PageContainer>
    </div>
  );
};
