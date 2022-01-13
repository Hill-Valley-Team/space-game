import React, { PropsWithChildren } from 'react';
import block from 'bem-cn';
import { Button } from '../../../components/Button';
import { formScheme, InputNames } from '../../../consts/formScheme';
import { InputField } from '../../../components/InputField';
import { useFormInput } from '../../../hooks/useFormInput';
import { userAPI, useUpdateUserProfileMutation } from '../../../services/UserService';
import { prepareDataToRequest } from '../../../controllers/utils/prepareDataToRequest';
import { UserRequest } from '../../../services/types';
import { UserRequestFields } from '../../../services/consts';
import { Form } from '../../../components/Form/Form';

const b = block('profile-page');

type ProfileEditProps = PropsWithChildren<{ viewHandle: () => void }>;

export const ProfileEdit = (props: ProfileEditProps) => {
  const { viewHandle } = props;
  const { data: userData } = userAPI.useGetUserInfoQuery();

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

  const [updateProfile] = useUpdateUserProfileMutation();

  const formSubmitHandle = async (formData: FormData) => {
    const preparedData = prepareDataToRequest<UserRequest>(UserRequestFields, formData);
    await updateProfile(preparedData);
    viewHandle();
  };

  return (
    <Form onSubmitHandler={formSubmitHandle} className={b('form')}>
      <div className={b('input-wrapper')}>
        <InputField
          id={InputNames.FIRST_NAME}
          label="Имя"
          name={formScheme[InputNames.FIRST_NAME].name}
          value={firstNameValue}
          isValid={firstNameIsValid}
          errorText={firstNameErrorMessage}
          onChangeHandle={setFirstNameValue}
          className={b('input')}
          autoFocus
        />
        <InputField
          id={InputNames.SECOND_NAME}
          name={formScheme[InputNames.SECOND_NAME].name}
          label="Фамилия"
          value={secondNameValue}
          isValid={secondNameIsValid}
          errorText={secondNameErrorMessage}
          onChangeHandle={setSecondNameValue}
          className={b('input')}
        />
        <InputField
          id={InputNames.LOGIN}
          name={formScheme[InputNames.LOGIN].name}
          label="Логин"
          className={b('input')}
          value={loginValue}
          isValid={loginIsValid}
          errorText={loginErrorMessage}
          onChangeHandle={setLoginValue}
        />
        <InputField
          id={InputNames.EMAIL}
          name={formScheme[InputNames.EMAIL].name}
          label="Email"
          value={emailValue}
          isValid={emailIsValid}
          errorText={emailErrorMessage}
          onChangeHandle={setEmailValue}
          type="email"
          className={b('input')}
        />
        <InputField
          id={InputNames.PHONE}
          name={formScheme[InputNames.PHONE].name}
          label="Телефон"
          value={phoneValue}
          isValid={phoneIsValid}
          errorText={phoneErrorMessage}
          onChangeHandle={setPhoneValue}
          type="tel"
          className={b('input')}
        />
      </div>
      <div className={b('bottom-wrapper')}>
        <Button
          text="Сохранить"
          type="submit"
          className={b('save-btn')}
          view="primary"
          width="stretch"
          disabled={
            !(firstNameIsValid && secondNameIsValid && loginIsValid && emailIsValid && phoneIsValid)
          }
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
