import block from 'bem-cn';
import React from 'react';
import { userAPI } from '../../services/UserService';
import { AppRoutes } from '../AppRoutes';
import './app.css';

const b = block('app');

export const App = () => {
  const { isLoading } = userAPI.useGetUserInfoQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={b()}>
      <AppRoutes />
    </div>
  );
};
