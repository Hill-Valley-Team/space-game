import block from 'bem-cn';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title';
import './profilePage.css';
import { PageContainer } from '../../components/PageContainer';
import { Button } from '../../components/Button';
import { formScheme, InputNames } from '../../consts/formScheme';
import { Form } from '../../components/Form/Form';
import { InputFieldProfile } from '../../components/InputFieldProfile';
import { InputFieldAvatar } from '../../components/InputFieldAvatar';
import { useAppSelector } from '../../hooks/hooks';
import { useFormInput } from '../../hooks/useFormInput';
import { authController } from '../../controllers/AuthController';

const b = block('profile-page');

export const ProfilePage = () => {
  const navigate = useNavigate();
  const useSelector = useAppSelector;
  const [isEditMode, setIsEditMode] = useState(false);
  const userData = useSelector((state) => state.user.data);
  console.log(userData);

  const [
    { value: loginValue, isValid: loginIsValid, errorMessage: loginErrorMessage },
    setLoginValue,
  ] = useFormInput({ type: formScheme[InputNames.LOGIN].type, value: userData?.login });

  const [
    { value: firstNameValue, isValid: firstNameIsValid, errorMessage: firstNameErrorMessage },
    setFirstNameValue,
  ] = useFormInput({ type: formScheme[InputNames.FIRST_NAME].type, value: userData?.first_name });

  const [
    { value: secondNameValue, isValid: secondNameIsValid, errorMessage: secondNameErrorMessage },
    setSecondNameValue,
  ] = useFormInput({ type: formScheme[InputNames.SECOND_NAME].type, value: userData?.second_name });

  const [
    { value: emailValue, isValid: emailIsValid, errorMessage: emailErrorMessage },
    setEmailValue,
  ] = useFormInput({ type: formScheme[InputNames.EMAIL].type, value: userData?.email });

  const [
    { value: phoneValue, isValid: phoneIsValid, errorMessage: phoneErrorMessage },
    setPhoneValue,
  ] = useFormInput({ type: formScheme[InputNames.PHONE].type, value: userData?.phone });

  const [
    { value: passwordValue, isValid: passwordIsValid, errorMessage: passwordErrorMessage },
    setPasswordValue,
  ] = useFormInput({ type: formScheme[InputNames.PASSWORD].type, value: '********' });

  const [
    {
      value: repeatPasswordValue,
      isValid: repeatPasswordIsValid,
      errorMessage: repeatPasswordErrorMessage,
    },
    setRepeatPasswordValue,
  ] = useFormInput({ type: formScheme[InputNames.REPEAT_PASSWORD].type });

  // const formSubmitHandle = useCallback(
  //   () => (formData: FormData) => {
  //     authController
  //       .signUp(formData)
  //       .then(() => {
  //         navigate('/');
  //       })
  //       .catch((error) => {
  //         if (error.response && error.response.data) {
  //           setRequestError(error.response.data.reason ?? '');
  //         }
  //       });
  //   },
  //   [navigate],
  // );

  const onBottomBtnClick = useCallback(() => {
    setIsEditMode(!isEditMode);
  }, [isEditMode]);

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

  const getRepeatPasswordInput = () => {
    if (isEditMode) {
      return (
        <InputFieldProfile
          id={InputNames.REPEAT_PASSWORD}
          type="password"
          name={formScheme[InputNames.REPEAT_PASSWORD].name}
          label="Повторите пароль"
          value={repeatPasswordValue}
          isValid={repeatPasswordIsValid}
          errorText={repeatPasswordErrorMessage}
          onChangeHandle={setRepeatPasswordValue}
          isEdit={isEditMode}
          className={b('input')}
        />
      );
    }
    return null;
  };

  const getTitle = () =>
    isEditMode ? (
      <Title tag="h1" className={b('title').mix('hidden')} text="Профиль" />
    ) : (
      <Title tag="h1" className={b('title')} text={firstNameValue} />
    );

  const navigateBackHandle = () => {
    navigate(-1);
  };

  const logoutHandle = () => {
    authController.logOut().then(() => navigate('/login'));
  };

  const getLogoutBtn = () =>
    isEditMode ? (
      ''
    ) : (
      <Button
        className={b('btn-logout')}
        type="button"
        text="Выйти"
        onClick={logoutHandle}
        view="info"
        width="auto"
      />
    );

  return (
    <div className={b()}>
      <PageContainer size="medium">
        <Form className={b('form')}>
          <div className={b('top-wrapper', { dual: isEditMode })}>
            <Button
              className={b('btn-back')}
              type="button"
              text=""
              view="primary"
              onClick={navigateBackHandle}
              width="auto"
            />
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
              label="Имя"
              name={formScheme[InputNames.FIRST_NAME].name}
              value={firstNameValue}
              isValid={firstNameIsValid}
              errorText={firstNameErrorMessage}
              onChangeHandle={setFirstNameValue}
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.SECOND_NAME}
              name={formScheme[InputNames.SECOND_NAME].name}
              label="Фамилия"
              value={secondNameValue}
              isValid={secondNameIsValid}
              errorText={secondNameErrorMessage}
              onChangeHandle={setSecondNameValue}
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.LOGIN}
              name={formScheme[InputNames.LOGIN].name}
              label="Никнейм"
              isEdit={isEditMode}
              className={b('input')}
              value={loginValue}
              isValid={loginIsValid}
              errorText={loginErrorMessage}
              onChangeHandle={setLoginValue}
            />
            <InputFieldProfile
              id={InputNames.EMAIL}
              name={formScheme[InputNames.EMAIL].name}
              label="Email"
              value={emailValue}
              isValid={emailIsValid}
              errorText={emailErrorMessage}
              onChangeHandle={setEmailValue}
              type="email"
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.PHONE}
              name={formScheme[InputNames.PHONE].name}
              label="Телефон"
              value={phoneValue}
              isValid={phoneIsValid}
              errorText={phoneErrorMessage}
              onChangeHandle={setPhoneValue}
              type="tel"
              isEdit={isEditMode}
              className={b('input')}
            />
            <InputFieldProfile
              id={InputNames.PASSWORD}
              type="password"
              name={formScheme[InputNames.PASSWORD].name}
              label="Пароль"
              value={passwordValue}
              isValid={passwordIsValid}
              errorText={passwordErrorMessage}
              onChangeHandle={setPasswordValue}
              isEdit={isEditMode}
              className={b('input')}
            />
            {getRepeatPasswordInput()}
          </div>
          <div className={b('bottom-wrapper', { dual: isEditMode })}>{getBottomButtons()}</div>
        </Form>
      </PageContainer>
    </div>
  );
};
