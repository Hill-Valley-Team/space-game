import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { InputFieldAvatar } from '../../../components/InputFieldAvatar';
import { formScheme, InputNames } from '../../../consts/formScheme';
import { useLogoutMutation } from '../../../services/UserService';

type HeaderProps = PropsWithChildren<{
  withBackBtn?: boolean;
  withLogoutBtn?: boolean;
}>;

const b = block('profile-page');

export const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const { withLogoutBtn, withBackBtn } = props;
  const [logout] = useLogoutMutation();

  const handleBackBtnClick = () => {
    navigate(-1);
  };

  const handleLogoutBtnClick = () => {
    logout();
  };

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

  const backBtn = withBackBtn ? (
    <Button
      className={b('btn-back')}
      type="button"
      text=""
      view="primary"
      onClick={handleBackBtnClick}
      width="auto"
    />
  ) : null;

  return (
    <div className={b('top-wrapper')}>
      {backBtn}
      <InputFieldAvatar
        id={InputNames.AVATAR}
        name={formScheme[InputNames.AVATAR].name}
        className={b('avatar')}
        value={undefined}
      />
      {logoutBtn}
    </div>
  );
};

Header.defaultProps = {
  withLogoutBtn: true,
  withBackBtn: true,
};
