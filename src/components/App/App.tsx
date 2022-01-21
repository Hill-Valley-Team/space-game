import block from 'bem-cn';
import React, {useEffect} from 'react';
import { AppRoutes } from '../AppRoutes';
import './app.css';
import {setFullscreenListener} from "../../utils/fullscreen";

const b = block('app');

export const App = () => {
  useEffect(() => {
    setFullscreenListener();
  });

  return (
    <div className={b()}>
      <AppRoutes />
    </div>
  );
}



