import { useAppSelector } from 'hooks/hooks';

export const useAuth = () => {
  const userData = useAppSelector((state) => state.user);
  const isAuth = Boolean(userData);

  return {
    userData,
    isAuth,
  };
};
