import { hot } from 'react-hot-loader/root';
import { Meta } from 'components/Meta';
import React from 'react';
import { AppRoutes } from '../AppRoutes';
import './app.css';
import { useAppSelector } from 'hooks/hooks';
import { useUserTheme } from 'hooks/useUserTheme';
// import { enableServiceWorker } from '../../utils/service-worker';

const App = () => {
  const { data: themeData } = useUserTheme();
  const theme = themeData && themeData.id === 1 ? 'light' : 'dark';

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
