import block from 'bem-cn';
import { Meta } from 'components/Meta';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppRoutes } from '../AppRoutes';
import './app.css';
// import { enableServiceWorker } from '../../utils/service-worker';

const b = block('app');

const App = () => (
  // enableServiceWorker();
  <div className={b()}>
    <Meta />
    <AppRoutes />
  </div>
);

const Component = hot(App);

export { Component as App };
