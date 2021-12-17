import block from 'bem-cn';
import React from 'react';
import { AppRoutes } from '../AppRoutes';
import './app.css';

const b = block('app');

export const App = () => (
  <div className={b()}>
    <AppRoutes />
  </div>
);
