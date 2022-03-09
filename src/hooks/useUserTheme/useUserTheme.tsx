import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  fetchOrCreateUserTheme,
  fetchUserTheme,
  updateLocalUserTheme,
  updateUserTheme,
} from '../../store/slices/themeSlice';
import { DEFAULT_THEME_ID, SECOND_THEME_ID } from './consts';

export const useUserTheme = () => {
  const dispatch = useAppDispatch();
  const { data: userData } = useAppSelector((state) => state.user);
  const { data: themeData, status, error } = useAppSelector((state) => state.theme);

  const requestUserTheme = async () => {
    if (userData) {
      dispatch(fetchUserTheme());
    }
  };

  const setUserTheme = async (themeId: number) => {
    dispatch(updateUserTheme(themeId));
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
    const themeId = themeData?.id ?? DEFAULT_THEME_ID;

    if (userData) {
      dispatch(fetchOrCreateUserTheme(themeId));
    } else {
      dispatch(updateLocalUserTheme(themeId));
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
