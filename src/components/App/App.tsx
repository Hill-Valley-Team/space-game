import block from 'bem-cn';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { store } from '../../store';
import { AppRoutes } from '../AppRoutes';
import './app.css';

const b = block('app');

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(store.getState());
    // dispatch(getUserData());
  }, [dispatch]);
  return (
    <div className={b()}>
      <AppRoutes />
    </div>
  );
};
