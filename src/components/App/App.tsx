import block from 'bem-cn';
import { hot } from 'react-hot-loader/root';
import { Meta } from 'components/Meta';
import React from 'react';
import { AppRoutes } from '../AppRoutes';
import './app.css';

const b = block('app');

const App = () => {
  return (
    <div className={b()}>
      <Meta />
      <AppRoutes/>
    </div>
  );
}

const Component = hot(App);

export { Component as App };
