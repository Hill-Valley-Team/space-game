import { hot } from 'react-hot-loader/root';
import { Meta } from 'components/Meta';
import React from 'react';
import { AppRoutes } from '../AppRoutes';
import './app.css';
import { useUserTheme } from 'hooks/useUserTheme';

const App = () => {
  const { data: themeData } = useUserTheme();
  const theme = themeData && themeData.id === 1 ? 'light' : 'dark';
  return (
    <div className={`app theme-${theme ?? 'light'}`}>
      <Meta />
      <AppRoutes />
    </div>
  );
};

const Component = hot(App);

export { Component as App };
