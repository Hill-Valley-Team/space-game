import { useGetUserInfo } from 'hooks/useGetUserInfo';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type RequireAuthProps = {
  children: JSX.Element;
  to: string;
  requireAuth: boolean;
};

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, to, requireAuth } = props;
  const { isAuth } = useGetUserInfo();
  const location = useLocation();

  if (isAuth === requireAuth) {
    return children;
  }

  return <Navigate to={to} state={{ from: location }} replace />;
};
