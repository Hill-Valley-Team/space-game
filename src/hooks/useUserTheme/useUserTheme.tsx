import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUserTheme } from '../../store/slices/themeSlice';

export const useUserTheme = () => {
  const dispatch = useAppDispatch();
  const { data: userData } = useAppSelector((state) => state.user);
  const { data, status, error } = useAppSelector((state) => state.theme);

  const requestUserTheme = async () => {
    dispatch(fetchUserTheme(Number(userData!.id)));
  };

  useEffect(() => {
    requestUserTheme();
  }, []);

  return {
    requestUserTheme,
    data,
    status,
    error,
  };
};
