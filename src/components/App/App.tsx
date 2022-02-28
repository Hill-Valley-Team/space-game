import { hot } from 'react-hot-loader/root';
import { Meta } from 'components/Meta';
import React from 'react';
import { AppRoutes } from '../AppRoutes';
import './app.css';
import { useAppSelector } from 'hooks/hooks';
// import { enableServiceWorker } from '../../utils/service-worker';

const App = () => {
  const theme = useAppSelector((store) => store.theme.data?.theme);

  return (
    // enableServiceWorker();
    <div className={`app theme-${theme ?? 'light'}`}>
      <Meta />
      <AppRoutes />
    </div>
  );
};

const Component = hot(App);

export { Component as App };
