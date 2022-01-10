import block from 'bem-cn';
import React, { useState } from 'react';
import './profilePage.css';
import { PageContainer } from '../../components/PageContainer';
import { ProfileEdit } from './ProfileEdit';
import { PasswordEdit } from './PasswordEdit';
import { ProfileView } from './ProfileView';
import { ProfileViews } from './consts';
import { Header } from './Header';

const b = block('profile-page');

export const ProfilePage = () => {
  const [view, setView] = useState(ProfileViews.VIEW);

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
        <Header withLogoutBtn={view === ProfileViews.VIEW} />
        {inner}
      </PageContainer>
    </div>
  );
};
