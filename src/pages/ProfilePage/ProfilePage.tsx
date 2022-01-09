import block from 'bem-cn';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profilePage.css';
import { PageContainer } from '../../components/PageContainer';
import { Button } from '../../components/Button';
import { formScheme, InputNames } from '../../consts/formScheme';
import { InputFieldAvatar } from '../../components/InputFieldAvatar';
import { authController } from '../../controllers/AuthController';
import { ProfileEdit } from './ProfileEdit';
import { PasswordEdit } from './PasswordEdit';
import { ProfileView } from './ProfileView';
import { ProfileViews } from './consts';

const b = block('profile-page');

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(ProfileViews.VIEW);

  const backHandle = () => {
    navigate(-1);
  };

  const logoutHandle = () => {
    authController.logOut().then(() => navigate('/login'));
  };

  const editHandle = () => {
    setView(ProfileViews.EDIT);
  };

  const editPasswordHandle = () => {
    setView(ProfileViews.PASSWORD);
  };

  const viewHandle = () => {
    setView(ProfileViews.VIEW);
  };

  let inner = <ProfileView editHandle={editHandle} editPasswordHandle={editPasswordHandle} />;

  if (view === 'edit') inner = <ProfileEdit viewHandle={viewHandle} />;
  if (view === 'password') inner = <PasswordEdit viewHandle={viewHandle} />;

  return (
    <div className={b()}>
      <PageContainer size="medium">
        <div className={b('top-wrapper')}>
          <Button
            className={b('btn-back')}
            type="button"
            text=""
            view="primary"
            onClick={backHandle}
            width="auto"
          />
          <InputFieldAvatar
            id={InputNames.AVATAR}
            name={formScheme[InputNames.AVATAR].name}
            className={b('avatar')}
            value={undefined}
          />
          <Button
            className={b('btn-logout')}
            type="button"
            text="Выйти"
            onClick={logoutHandle}
            view="info"
            width="auto"
          />
        </div>
        {inner}
      </PageContainer>
    </div>
  );
};
