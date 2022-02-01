import { useAppSelector } from 'hooks/hooks';

export const useAuth = () => {
  const userData = useAppSelector((state) => state.user.data);
  const isAuth = Boolean(userData);

  return {
    userData,
    isAuth,
  };
};
