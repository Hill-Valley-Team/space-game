import block from 'bem-cn';
import React from 'react';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import './error404Page.css';

const b = block('error404-page');

export const Error404Page = () => (
  <div className={b()}>
    <Title tag="h1" className={b('title')} text="404" />
    <Title tag="h2" className={b('subtitle')} text="Не туда попали" />

    <Button
      text="Назад к игре"
      type="button"
      className={b('button')}
      view="secondary"
      width="stretch"
    />
  </div>
);
