import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useGetUserInfoQuery } from '../../services/UserService';
import { nonAuthorizedUserPath } from './consts';

type RequireAuthProps = {
  children: JSX.Element;
  to: string;
  requireAuth: boolean;
};

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, to, requireAuth } = props;
  const { data: userData = null } = useGetUserInfoQuery();
  const location = useLocation();

  if (Boolean(userData) !== requireAuth) {
    return <Navigate to={to ?? nonAuthorizedUserPath} state={{ from: location }} replace />;
  }

  return children;
};
