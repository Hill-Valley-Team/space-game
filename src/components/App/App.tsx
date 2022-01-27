import block from 'bem-cn';
import React from 'react';
import { AppRoutes } from '../AppRoutes';
import './app.css';
// import { enableServiceWorker } from '../../utils/service-worker';

const b = block('app');

export const App = () => (
  // enableServiceWorker();
  <div className={b()}>
    <AppRoutes />
  </div>
);
