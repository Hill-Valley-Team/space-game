import block from 'bem-cn';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './pageLayout.css';

const b = block('page-layout');

export const PageLayout = () => (
  <div className={b()}>
    <Outlet />
  </div>
);
