import block from 'bem-cn';
import React from 'react';
import { Title } from '../../components/Title';

const b = block('error500-page');

export const Error500Page = () => (
    <div className={b()}>
      <Title tag="h1" className={b('title')} text="500"/>
      <Title tag="h2" className={b('subtitle')} text="Сервер не отвечает"/>
      <p className={b('text')}>Но все будет хорошо!</p>
    </div>
  );
