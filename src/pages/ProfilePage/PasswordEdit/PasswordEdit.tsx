import block from 'bem-cn';
import React, { PropsWithChildren, useCallback } from 'react';
import { Button } from '../../../components/Button';
import { Form } from '../../../components/Form/Form';
import { InputField } from '../../../components/InputField';
import { formScheme, InputNames } from '../../../consts/formScheme';
import { useFormInput } from '../../../hooks/useFormInput';

type PasswordEditProps = PropsWithChildren<{ viewHandle: () => void }>;

const b = block('profile-page');

export const PasswordEdit = (props: PasswordEditProps) => {
  const { viewHandle } = props;
  const [
    { value: passwordValue, isValid: passwordIsValid, errorMessage: passwordErrorMessage },
    setPasswordValue,
  ] = useFormInput({ type: formScheme[InputNames.PASSWORD].type, value: '' });

  const [
    { value: oldPasswordValue, isValid: oldPasswordIsValid, errorMessage: oldPasswordErrorMessage },
    setOldPasswordValue,
  ] = useFormInput({ type: formScheme[InputNames.OLD_PASSWORD].type, value: '' });

  const [
    {
      value: repeatPasswordValue,
      isValid: repeatPasswordIsValid,
      errorMessage: repeatPasswordErrorMessage,
    },
    setRepeatPasswordValue,
  ] = useFormInput({ type: formScheme[InputNames.REPEAT_PASSWORD].type });

  const saveHandle = useCallback(() => {
    console.log(passwordValue, repeatPasswordValue);
  }, [passwordValue, repeatPasswordValue]);

  return (
    <Form className={b('form')}>
      <InputField
        id={InputNames.OLD_PASSWORD}
        type="password"
        autoFocus
        name={formScheme[InputNames.OLD_PASSWORD].name}
        label="Старый пароль"
        value={oldPasswordValue}
        isValid={oldPasswordIsValid}
        errorText={oldPasswordErrorMessage}
        onChangeHandle={setOldPasswordValue}
        className={b('input')}
      />
      <InputField
        id={InputNames.PASSWORD}
        type="password"
        name={formScheme[InputNames.PASSWORD].name}
        label="Новый пароль"
        value={passwordValue}
        isValid={passwordIsValid}
        errorText={passwordErrorMessage}
        onChangeHandle={setPasswordValue}
        className={b('input')}
      />
      <InputField
        id={InputNames.REPEAT_PASSWORD}
        type="password"
        name={formScheme[InputNames.REPEAT_PASSWORD].name}
        label="Повторите пароль"
        value={repeatPasswordValue}
        isValid={repeatPasswordIsValid}
        errorText={repeatPasswordErrorMessage}
        onChangeHandle={setRepeatPasswordValue}
        className={b('input')}
      />
      <div className={b('bottom-wrapper')}>
        <Button
          text="Сохранить"
          type="submit"
          className={b('save-btn')}
          view="primary"
          width="stretch"
          onClick={saveHandle}
        />
        <Button
          text="Отменить"
          type="reset"
          className={b('discard-btn')}
          view="secondary"
          width="stretch"
          onClick={viewHandle}
        />
      </div>
    </Form>
  );
};
