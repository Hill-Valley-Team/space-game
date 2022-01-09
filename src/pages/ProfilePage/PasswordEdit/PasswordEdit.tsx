import block from 'bem-cn';
import React, { PropsWithChildren } from 'react';
import { Button } from '../../../components/Button';
import { Form } from '../../../components/Form/Form';
import { InputField } from '../../../components/InputField';
import { formScheme, InputNames } from '../../../consts/formScheme';
import { prepareDataToRequest } from '../../../controllers/utils/prepareDataToRequest';
import { useFormInput, withEqualValue } from '../../../hooks/useFormInput';
import { PasswordEditRequestFields } from '../../../services/consts';
import { PasswordRequest } from '../../../services/types';
import { useUpdatePasswordMutation } from '../../../services/UserService';

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

  const [updatePassword] = useUpdatePasswordMutation();

  const formSubmitHandle = async (formData: FormData) => {
    const preparedData = prepareDataToRequest<PasswordRequest>(PasswordEditRequestFields, formData);
    await updatePassword(preparedData);
    viewHandle();
  };

  return (
    <Form className={b('form')} onSubmitHandler={formSubmitHandle}>
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
        onChangeHandle={withEqualValue(setRepeatPasswordValue, passwordValue)}
        className={b('input')}
      />
      <div className={b('bottom-wrapper')}>
        <Button
          text="Сохранить"
          type="submit"
          className={b('save-btn')}
          view="primary"
          width="stretch"
          disabled={!(passwordIsValid && oldPasswordIsValid && repeatPasswordIsValid)}
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
