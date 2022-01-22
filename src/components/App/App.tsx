import block from 'bem-cn';
import React from 'react';
import { AppRoutes } from '../AppRoutes';
import './app.css';

const b = block('app');

export const App = () => {
  return (
    <div className={b()}>
      <AppRoutes/>
    </div>
  );
}
