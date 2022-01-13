import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { InputFieldAvatar } from '../../../components/InputFieldAvatar';
import { formScheme, InputNames } from '../../../consts/formScheme';
import { authController } from '../../../controllers/AuthController';

type HeaderProps = PropsWithChildren<{
  withBackBtn?: boolean;
  withLogoutBtn?: boolean;
}>;

const b = block('profile-page');

export const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const { withLogoutBtn, withBackBtn } = props;

  const backHandle = () => {
    navigate(-1);
  };

  const logoutHandle = () => {
    authController.logOut().then(() => navigate('/login'));
  };

  const logoutBtn = withLogoutBtn ? (
    <Button
      className={b('btn-logout')}
      type="button"
      text="Выйти"
      onClick={logoutHandle}
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
      onClick={backHandle}
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
