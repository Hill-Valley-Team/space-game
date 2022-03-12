import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import { useGetUserInfo } from 'hooks/useGetUserInfo';
import { resourcesUrl } from '../../../api/consts';
import { Button } from '../../../components/Button';
import { InputFieldAvatar } from '../../../components/InputFieldAvatar';
import { formScheme, InputNames } from '../../../consts/formScheme';
import { useUpdateUserAvatarMutation, useLogoutMutation } from '../../../services/UserService';
import { BackButton } from '../../../components/BackButton';

type HeaderProps = PropsWithChildren<{
  withBackBtn?: boolean;
  withLogoutBtn?: boolean;
}>;

const b = block('profile-page');

export const Header = (props: HeaderProps) => {
  const { withLogoutBtn, withBackBtn } = props;
  const [updateAvatar] = useUpdateUserAvatarMutation();
  const [logout] = useLogoutMutation();
  const { requestUserInfo, userData } = useGetUserInfo();

  const handleLogoutBtnClick = () => {
    logout().then(() => requestUserInfo());
  };

  const changeAvatarHandle = (formData: FormData) => updateAvatar(formData);

  const logoutBtn = withLogoutBtn ? (
    <Button
      className={b('btn-logout')}
      type="button"
      text="Выйти"
      onClick={handleLogoutBtnClick}
      view="info"
      width="auto"
    />
  ) : null;

  const backBtn = withBackBtn ? <BackButton className={b('back')} /> : <div />;

  return (
    <div className={b('top-wrapper')}>
      {backBtn}
      <InputFieldAvatar
        id={InputNames.AVATAR}
        name={formScheme[InputNames.AVATAR].name}
        className={b('avatar')}
        src={`${resourcesUrl}${userData?.avatar}`}
        onChangeHandler={changeAvatarHandle}
      />
      {logoutBtn}
    </div>
  );
};
