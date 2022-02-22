import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUserTheme } from '../../store/slices/themeSlice';

export const useUserTheme = () => {
  const { data, status, error } = useAppSelector((state) => state.theme);
  console.log(data, status, error);
  const dispatch = useAppDispatch();

  const requestUserTheme = async () => {
    const { data: userData } = useAppSelector((state) => state.user);
    dispatch(fetchUserTheme(userData.id));
  };

  //   if (data === undefined) {
  //     requestUserTheme();
  //   }

  return {
    requestUserTheme,
    data,
    status,
    error,
  };
};
