import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUser } from '../../store/slices/userSlice';

export const useGetUserInfo = () => {
  const { data, error, status } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const requestUserInfo = async () => dispatch(fetchUser());

  const isAuth = Boolean(data);

  return {
    requestUserInfo,
    userData: data,
    error,
    status,
    isAuth,
  };
};
