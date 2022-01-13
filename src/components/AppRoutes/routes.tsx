import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { PageLayout } from '../PageLayout';
import { HomePage } from '../../pages/HomePage';
import { RegistrationPage } from '../../pages/RegistrationPage/RegistrationPage';
import { Error500Page } from '../../pages/Error500Page';
import { Error404Page } from '../../pages/Error404Page';
import { LoginPage } from '../../pages/LoginPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { ForumPage } from '../../pages/ForumPage/ForumPage';
import { LeaderBoardPage } from '../../pages/LeaderBoardPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'registration',
        element: <RegistrationPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'forum',
        element: <ForumPage />,
      },
      {
        path: 'leaderboard',
        element: <LeaderBoardPage />,
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
