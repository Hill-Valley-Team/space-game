import block from 'bem-cn';
import React from 'react';
import { Title } from '../../components/Title';

const b = block('error404-page');

export const Error404Page = () => (
  <div className={b()}>
    <Title tag="h1" className={b('title')} text="404" />
  </div>
);
