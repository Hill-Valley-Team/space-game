import block from 'bem-cn';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form/Form';
import { InputField } from '../../components/InputField';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/Title';
import { formScheme, InputNames } from '../../consts/formScheme';
import { useFormInput, withEqualValue } from '../../hooks/useFormInput';
import './registrationPage.css';

const b = block('registration-page');

export const RegistrationPage = () => {
  const [
    { value: loginValue, isValid: loginIsValid, errorMessage: loginErrorMessage },
    setLoginValue,
  ] = useFormInput({ type: formScheme[InputNames.LOGIN].type });

  const [
    { value: emailValue, isValid: emailIsValid, errorMessage: emailErrorMessage },
    setEmailValue,
  ] = useFormInput({ type: formScheme[InputNames.EMAIL].type });

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

  return (
    <div className={b()}>
      <PageContainer size="small">
        <Title text="Регистрация" className={b('title')} />
        <Form className={b('form')}>
          <InputField
            id={InputNames.LOGIN}
            name={formScheme[InputNames.LOGIN].name}
            label="Логин"
            isValid={loginIsValid}
            errorText={loginErrorMessage}
            value={loginValue}
            view="labeled"
            onChange={setLoginValue}
          />
          <InputField
            id={InputNames.EMAIL}
            name={formScheme[InputNames.EMAIL].name}
            label="Email"
            isValid={emailIsValid}
            errorText={emailErrorMessage}
            value={emailValue}
            view="labeled"
            onChange={setEmailValue}
          />
          <InputField
            id={InputNames.PASSWORD}
            type="password"
            name={formScheme[InputNames.PASSWORD].name}
            label="Пароль"
            isValid={passwordIsValid}
            errorText={passwordErrorMessage}
            value={passwordValue}
            view="labeled"
            onChange={setPasswordValue}
          />
          <InputField
            id={InputNames.REPEAT_PASSWORD}
            type="password"
            name={formScheme[InputNames.REPEAT_PASSWORD].name}
            label="Повторите пароль"
            isValid={repeatPasswordIsValid}
            errorText={repeatPasswordErrorMessage}
            value={repeatPasswordValue}
            view="labeled"
            onChange={withEqualValue(setRepeatPasswordValue, passwordValue)}
          />
        </Form>
        <Footer>
          <Button
            width="stretch"
            view="primary"
            text="Зарегистрироваться"
            className={b('button')}
          />
          <Link className="footer__link" to="/login">
            Войти
          </Link>
        </Footer>
      </PageContainer>
    </div>
  );
};
