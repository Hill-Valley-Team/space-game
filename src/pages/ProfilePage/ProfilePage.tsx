import block from 'bem-cn';
import React, { useCallback } from 'react';
import { Title } from '../../components/Title';
import './profilePage.css';
import { PageContainer } from '../../components/PageContainer';
import { Button } from '../../components/Button';
import { formScheme, InputNames } from '../../consts/formScheme';
import { Form } from '../../components/Form/Form';
import { InputFieldProfile } from '../../components/InputFieldProfile';
import { InputFieldAvatar } from '../../components/InputFieldAvatar';

const b = block('profile-page');

export const ProfilePage = () => {
  let isEditMode = true;

  const onBottomBtnClick = useCallback(() => {
    isEditMode = !isEditMode;
  }, []);

  const getBottomButtons = () => {
    if (isEditMode) {
      return (
        <>
          <Button
            text="Сохранить"
            type="submit"
            className={b('save-btn')}
            view="primary"
            width="stretch"
            onClick={onBottomBtnClick}
          />
          <Button
            text="Отменить"
            type="reset"
            className={b('discard-btn')}
            view="secondary"
            width="stretch"
            onClick={onBottomBtnClick}
          />
        </>
      );
    }
    return (
      <Button
        text="Редактировать"
        type="button"
        className={b('edit-btn')}
        view="secondary"
        width="stretch"
        onClick={onBottomBtnClick}
      />
    );
  };

  const getTitle = () =>
    isEditMode ? (
      <Title tag="h1" className={b('title').mix('hidden')} text="Профиль" />
    ) : (
      <Title tag="h1" className={b('title')} text='sdfsdf' />
    );

  const getLogoutBtn = () =>
    isEditMode ? (
      ''
    ) : (
      <Button className={b('btn-logout')} type="button" text="Выйти" view="info" width="auto" />
    );

  return (
    <div className={b()}>
      <PageContainer size="medium">
        <Form className={b('form')}>
          <div className={b('top-wrapper', { dual: isEditMode })}>
            <Button className={b('btn-back')} type="button" text="" view="primary" width="auto" />
            <InputFieldAvatar
              id={InputNames.AVATAR}
              name={formScheme[InputNames.AVATAR].name}
              isEdit={isEditMode}
              className={b('avatar')}
              value={undefined}
            />
            {getLogoutBtn()}
          </div>
          {getTitle()}
          <div className={b('input-wrapper')}>
            <InputFieldProfile
              id={InputNames.FIRST_NAME}
              name={formScheme[InputNames.FIRST_NAME].name}
              label="Имя"
              value="sss"
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.SECOND_NAME}
              name={formScheme[InputNames.SECOND_NAME].name}
              label="Фамилия"
              value="sdfsf"
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.LOGIN}
              name={formScheme[InputNames.LOGIN].name}
              label="Никнейм"
              value="ффф"
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.EMAIL}
              name={formScheme[InputNames.EMAIL].name}
              label="Email"
              value="aaa@aa.aa"
              type="email"
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.PHONE}
              name={formScheme[InputNames.PHONE].name}
              label="Телефон"
              value={+79999999999}
              type="tel"
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.PASSWORD}
              type="password"
              name={formScheme[InputNames.PASSWORD].name}
              label="Пароль"
              value="sdfsdf"
              isEdit={isEditMode}
              className={b('input')}
            />
          </div>
          <div className={b('bottom-wrapper', { dual: isEditMode })}>{getBottomButtons()}</div>
        </Form>
      </PageContainer>
    </div>
  );
};
