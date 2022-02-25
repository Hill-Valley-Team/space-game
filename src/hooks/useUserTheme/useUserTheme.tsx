import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  fetchOrCreateUserTheme,
  fetchUserTheme,
  updateUserTheme,
} from '../../store/slices/themeSlice';
import { DEFAULT_THEME_ID, SECOND_THEME_ID } from './consts';

export const useUserTheme = () => {
  const dispatch = useAppDispatch();
  const { data: userData } = useAppSelector((state) => state.user);
  const { data: themeData, status, error } = useAppSelector((state) => state.theme);

  const requestUserTheme = async () => {
    dispatch(fetchUserTheme(Number(userData!.id)));
  };

  const setUserTheme = async (theme?: number) => {
    const userId = Number(userData!.id);
    const themeId = theme ?? DEFAULT_THEME_ID;
    dispatch(updateUserTheme({ userId, themeId }));
  };

  const toggleUserTheme = async (themeId: number) => {
    const newId = themeId === DEFAULT_THEME_ID ? SECOND_THEME_ID : DEFAULT_THEME_ID;
    await setUserTheme(newId);
  };

  useEffect(() => {
    if (userData) {
      const userId = Number(userData.id);
      const themeId = DEFAULT_THEME_ID;
      dispatch(fetchOrCreateUserTheme({ userId, themeId }));
    }
  }, []);

  return {
    requestUserTheme,
    setUserTheme,
    toggleUserTheme,
    data: themeData,
    status,
    error,
  };
};
