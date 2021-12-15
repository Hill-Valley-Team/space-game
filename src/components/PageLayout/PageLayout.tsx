import block from 'bem-cn';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Logo } from '../Logo';
import './pageLayout.css';

const b = block('page-layout');

export const PageLayout = () => (
  <div className={b()}>
    <Link to="/">
      <Logo />
    </Link>
    <Outlet />
  </div>
);
