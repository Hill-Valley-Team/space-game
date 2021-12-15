import block from 'bem-cn';
import React from 'react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { formScheme, InputNames } from '../../consts/formScheme';
import { useFormInput, withEqualValue } from '../../hooks/useFormInput';

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
      <form>
        <InputField
          id={InputNames.LOGIN}
          name={formScheme[InputNames.LOGIN].name}
          label="Логин"
          isValid={loginIsValid}
          errorText={loginErrorMessage}
          value={loginValue}
          onChange={setLoginValue}
        />
        <InputField
          id={InputNames.EMAIL}
          name={formScheme[InputNames.EMAIL].name}
          label="Email"
          isValid={emailIsValid}
          errorText={emailErrorMessage}
          value={emailValue}
          onChange={setEmailValue}
        />
        <InputField
          id={InputNames.PASSWORD}
          name={formScheme[InputNames.PASSWORD].name}
          label="Пароль"
          isValid={passwordIsValid}
          errorText={passwordErrorMessage}
          value={passwordValue}
          onChange={setPasswordValue}
        />
        <InputField
          id={InputNames.REPEAT_PASSWORD}
          name={formScheme[InputNames.REPEAT_PASSWORD].name}
          label="Повторите пароль"
          isValid={repeatPasswordIsValid}
          errorText={repeatPasswordErrorMessage}
          value={repeatPasswordValue}
          onChange={withEqualValue(setRepeatPasswordValue, passwordValue)}
        />
        <Button text='Зарегистрироваться' className={b('button')}/>
      </form>
    </div>
  );
};
