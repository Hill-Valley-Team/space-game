import block from 'bem-cn';
import { useGetUserInfo } from 'hooks/useGetUserInfo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form/Form';
import { InputField } from '../../components/InputField';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/Title';
import { formScheme, InputNames } from '../../consts/formScheme';

import { useFormInput, withEqualValue } from '../../hooks/useFormInput';
import { useSignupMutation } from '../../services/UserService';
import './registrationPage.css';

const b = block('registration-page');

export const RegistrationPage = () => {
  const [requestError, setRequestError] = useState('');
  const { requestUserInfo } = useGetUserInfo();

  const [
    { value: loginValue, isValid: loginIsValid, errorMessage: loginErrorMessage },
    setLoginValue,
  ] = useFormInput({ type: formScheme[InputNames.LOGIN].type });

  const [
    { value: firstNameValue, isValid: firstNameIsValid, errorMessage: firstNameErrorMessage },
    setFirstNameValue,
  ] = useFormInput({ type: formScheme[InputNames.FIRST_NAME].type });

  const [
    { value: secondNameValue, isValid: secondNameIsValid, errorMessage: secondNameErrorMessage },
    setSecondNameValue,
  ] = useFormInput({ type: formScheme[InputNames.SECOND_NAME].type });

  const [
    { value: emailValue, isValid: emailIsValid, errorMessage: emailErrorMessage },
    setEmailValue,
  ] = useFormInput({ type: formScheme[InputNames.EMAIL].type });

  const [
    { value: phoneValue, isValid: phoneIsValid, errorMessage: phoneErrorMessage },
    setPhoneValue,
  ] = useFormInput({ type: formScheme[InputNames.PHONE].type });

  const [
    { value: passwordValue, isValid: passwordIsValid, errorMessage: passwordErrorMessage },
    setPasswordValue,
  ] = useFormInput({ type: formScheme[InputNames.PASSWORD].type });

  const [
    {
      value: repeatPasswordValue,
      isValid: repeatPasswordIsValid,
      errorMessage: repeatPasswordErrorMessage,
    },
    setRepeatPasswordValue,
  ] = useFormInput({ type: formScheme[InputNames.REPEAT_PASSWORD].type });

  const [signup] = useSignupMutation();

  const formSubmitHandle = (formData: FormData) => {
    signup(formData)
      .then(() => requestUserInfo())
      .catch((error) => {
        if (error.data && 'reason' in error.data) {
          setRequestError(JSON.stringify(error.data.reason));
        }
      });
  };

  return (
    <div className={b()}>
      <PageContainer size="small">
        <Title text="??????????????????????" className={b('title')} />
        <Form className={b('form')} onSubmitHandler={formSubmitHandle}>
          <InputField
            id={InputNames.LOGIN}
            name={formScheme[InputNames.LOGIN].name}
            label="??????????"
            isValid={loginIsValid}
            errorText={loginErrorMessage}
            value={loginValue}
            view="labeled"
            onChangeHandle={setLoginValue}
          />
          <InputField
            id={InputNames.EMAIL}
            name={formScheme[InputNames.EMAIL].name}
            label="Email"
            isValid={emailIsValid}
            errorText={emailErrorMessage}
            value={emailValue}
            type="email"
            view="labeled"
            onChangeHandle={setEmailValue}
          />
          <InputField
            id={InputNames.FIRST_NAME}
            name={formScheme[InputNames.FIRST_NAME].name}
            label="??????"
            isValid={firstNameIsValid}
            errorText={firstNameErrorMessage}
            value={firstNameValue}
            view="labeled"
            onChangeHandle={setFirstNameValue}
          />
          <InputField
            id={InputNames.SECOND_NAME}
            name={formScheme[InputNames.SECOND_NAME].name}
            label="??????????????"
            isValid={secondNameIsValid}
            errorText={secondNameErrorMessage}
            value={secondNameValue}
            view="labeled"
            onChangeHandle={setSecondNameValue}
          />
          <InputField
            id={InputNames.PHONE}
            name={formScheme[InputNames.PHONE].name}
            label="??????????????"
            isValid={phoneIsValid}
            errorText={phoneErrorMessage}
            value={phoneValue}
            view="labeled"
            type="tel"
            onChangeHandle={setPhoneValue}
          />
          <InputField
            id={InputNames.PASSWORD}
            type="password"
            name={formScheme[InputNames.PASSWORD].name}
            label="????????????"
            isValid={passwordIsValid}
            errorText={passwordErrorMessage}
            value={passwordValue}
            view="labeled"
            onChangeHandle={setPasswordValue}
          />
          <InputField
            id={InputNames.REPEAT_PASSWORD}
            type="password"
            name={formScheme[InputNames.REPEAT_PASSWORD].name}
            label="?????????????????? ????????????"
            isValid={repeatPasswordIsValid}
            errorText={repeatPasswordErrorMessage}
            value={repeatPasswordValue}
            view="labeled"
            onChangeHandle={withEqualValue(setRepeatPasswordValue, passwordValue)}
          />
          <Footer>
            <Button
              width="stretch"
              view="primary"
              text="????????????????????????????????????"
              className={b('button')}
              disabled={!(loginIsValid && emailIsValid && passwordIsValid && repeatPasswordIsValid)}
            />
            <Link className="footer__link" to="/login">
              ??????????
            </Link>
          </Footer>
        </Form>
        <div>{requestError}</div>
      </PageContainer>
    </div>
  );
};
