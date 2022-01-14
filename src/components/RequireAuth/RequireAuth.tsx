import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useGetUserInfoQuery } from '../../services/UserService';

type RequireAuthProps = {
  children: JSX.Element;
  to: string;
  requireAuth: boolean;
};

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, to, requireAuth } = props;
  const { isSuccess } = useGetUserInfoQuery();
  const location = useLocation();

  if (isSuccess === requireAuth) {
    return children;
  }

  return <Navigate to={to} state={{ from: location }} replace />;
};
