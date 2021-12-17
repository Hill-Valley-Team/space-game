import React from 'react';
import block from 'bem-cn';
import { PageContainerProps } from './types';
import './pageContainer.css';

const b = block('page-container');

export const PageContainer = ({
  size = 'meduim',
  children,
  className,
  ...props
}: PageContainerProps) => (
  <div className={b({ [size]: true }).mix(className)} {...props}>
    {children}
  </div>
);
