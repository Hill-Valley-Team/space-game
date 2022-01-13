import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { block } from 'bem-cn';
import { defaultNavigation } from './defaultNavigation';
import './appNavigation.css';

const b = block('app-navigation');

type AppNavigationProps = PropsWithChildren<{
  className?: string;
  align: 'center' | 'left' | 'right';
}>;

export const AppNavigation = (props: AppNavigationProps) => {
  const { align, className } = props;

  const linkItems = defaultNavigation.map(({ path, name }) => (
    <li key={path}>
      <NavLink className={({ isActive }) => b('item', { active: isActive })} to={path}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={b({ align }).mix(className)}>
      <ul>{linkItems}</ul>
    </nav>
  );
};
