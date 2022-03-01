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
    if (userData) {
      dispatch(fetchUserTheme(Number(userData.id)));
    }
  };

  const getUserId = () => {
    return userData ? Number(userData.id) : 0;
  };

  const setUserTheme = async (themeId: number) => {
    const userId = getUserId();
    dispatch(updateUserTheme({ userId, themeId }));
  };

  const toggleUserTheme = async () => {
    let newId;
    if (themeData) {
      newId = themeData.id === DEFAULT_THEME_ID ? SECOND_THEME_ID : DEFAULT_THEME_ID;
    } else {
      newId = DEFAULT_THEME_ID;
    }
    await setUserTheme(newId);
  };

  useEffect(() => {
    const userId = getUserId();
    const themeId = DEFAULT_THEME_ID;
    if (userData) {
      dispatch(fetchOrCreateUserTheme({ userId, themeId }));
    } else {
      dispatch(updateUserTheme({ userId, themeId }));
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
