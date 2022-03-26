import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { PageLayout } from '../PageLayout';
import { HomePage } from '../../pages/HomePage';
import { RegistrationPage } from '../../pages/RegistrationPage/RegistrationPage';
import { Error500Page } from '../../pages/Error500Page';
import { Error404Page } from '../../pages/Error404Page';
import { LoginPage } from '../../pages/LoginPage';
import { GamePage } from '../../pages/GamePage';
import { ProfilePage } from '../../pages/ProfilePage';
import { ForumPage } from '../../pages/ForumPage/ForumPage';
import { LeaderBoardPage } from '../../pages/LeaderBoardPage';
import { RequireAuth } from '../RequireAuth';
import { authorizedPath, nonAuthorizedPath } from './consts';
import { ForumThreadPage } from 'pages/ForumThreadPage.ts';

export const routes: RouteObject[] = [
  { path: '/', index: true, element: <HomePage /> },
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: 'registration',
        element: (
          <RequireAuth to={authorizedPath} requireAuth={false}>
            <RegistrationPage />
          </RequireAuth>
        ),
      },
      {
        path: 'login',
        element: (
          <RequireAuth to={authorizedPath} requireAuth={false}>
            <LoginPage />
          </RequireAuth>
        ),
      },
      {
        path: 'game',
        element: (
          <RequireAuth to={nonAuthorizedPath} requireAuth>
            <GamePage />
          </RequireAuth>
        ),
      },
      {
        path: 'profile',
        element: (
          <RequireAuth to={nonAuthorizedPath} requireAuth>
            <ProfilePage />
          </RequireAuth>
        ),
      },
      {
        path: 'forum',
        element: (
          <RequireAuth to={nonAuthorizedPath} requireAuth>
            <ForumPage />
          </RequireAuth>
        ),
      },
      {
        path: 'forum/:topicId',
        element: <ForumThreadPage />,
      },
      {
        path: 'forum/:topicId',
        element: <ForumThreadPage />,
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
