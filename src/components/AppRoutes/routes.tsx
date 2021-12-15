import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { PageLayout } from '../PageLayout';
import { HomePage } from '../../pages/HomePage';
import { RegistrationPage } from '../../pages/RegistrationPage/RegistrationPage';
import { Error500Page } from '../../pages/Error500Page';
import { Error404Page } from '../../pages/Error404Page';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/registration',
        element: <RegistrationPage />,
      },
      {
        path: '500',
        element: <Error500Page />,
      },
      {
        path: '*',
        element: <Error404Page />,
      },
    ],
  },
];
