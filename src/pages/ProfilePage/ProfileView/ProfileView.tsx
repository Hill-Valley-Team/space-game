import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import { Button } from '../../../components/Button';
import { InputFieldProfile } from '../../../components/InputFieldProfile';
import { Title } from '../../../components/Title';
import { formScheme, InputNames } from '../../../consts/formScheme';
import { userAPI } from '../../../services/UserService';

type ProfileViewProps = PropsWithChildren<{
  editHandle: () => void;
  editPasswordHandle: () => void;
}>;

const b = block('profile-page');

export const ProfileView = (props: ProfileViewProps) => {
  const { editHandle, editPasswordHandle } = props;
  const { data: userData } = userAPI.useGetUserInfoQuery();

  // useEffect(() => refetch());

  return (
    <>
      <Title tag="h1" className={b('title')} text={userData?.first_name} />
      <div className={b('input-wrapper')}>
        <InputFieldProfile
          id={InputNames.FIRST_NAME}
          label="Имя"
          name={formScheme[InputNames.FIRST_NAME].name}
          value={userData?.first_name}
          isValid
          className={b('input')}
        />
        <InputFieldProfile
          id={InputNames.SECOND_NAME}
          name={formScheme[InputNames.SECOND_NAME].name}
          label="Фамилия"
          value={userData?.second_name}
          isValid
          className={b('input')}
        />
        <InputFieldProfile
          id={InputNames.LOGIN}
          name={formScheme[InputNames.LOGIN].name}
          label="Логин"
          className={b('input')}
          isValid
          value={userData?.login}
        />
        <InputFieldProfile
          id={InputNames.EMAIL}
          name={formScheme[InputNames.EMAIL].name}
          label="Email"
          value={userData?.email}
          type="email"
          isValid
          className={b('input')}
        />
        <InputFieldProfile
          id={InputNames.PHONE}
          name={formScheme[InputNames.PHONE].name}
          label="Телефон"
          value={userData?.phone}
          isValid
          type="tel"
          className={b('input')}
        />
        <div className={b('editpass')}>
          Пароль
          <Button view="link" onClick={editPasswordHandle} type="button" text="Изменить" />
        </div>
      </div>
      <div className={b('bottom-wrapper')}>
        <Button
          text="Редактировать"
          type="button"
          className={b('edit-btn')}
          view="secondary"
          width="stretch"
          onClick={editHandle}
        />
      </div>
    </>
  );
};
