import React from 'react';
import block from 'bem-cn';
import { PageContainer } from '../PageContainer';
import './loading.css';
import { Spinner } from '../Spinner';

const b = block('loading');

export const Loading = () => (
  <PageContainer size="medium" className={b('page-container')}>
    <div className={b()}>
      <Spinner />
    </div>
  </PageContainer>
);
