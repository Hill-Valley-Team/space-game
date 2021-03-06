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

import { useFormInput } from '../../hooks/useFormInput';
import { useSigninMutation } from '../../services/UserService';
import './loginPage.css';
import { OAUTH_URL, REDIRECT_URI } from '../../consts/urls';
import axios from 'axios';
axios.defaults.withCredentials = true;

const b = block('login-page');

export const LoginPage = () => {
  const [requestError, setRequestError] = useState('');

  const [
    { value: loginValue, isValid: loginIsValid, errorMessage: loginErrorMessage },
    setLoginValue,
  ] = useFormInput({ type: formScheme[InputNames.LOGIN].type });

  const [
    { value: passwordValue, isValid: passwordIsValid, errorMessage: passwordErrorMessage },
    setPasswordValue,
  ] = useFormInput({ type: formScheme[InputNames.PASSWORD].type });

  const [signin] = useSigninMutation();
  const { requestUserInfo } = useGetUserInfo();

  const formSubmitHandle = (formData: FormData) => {
    signin(formData)
      .then(() => requestUserInfo())
      .catch((error) => {
        if (error.data && 'reason' in error.data) {
          setRequestError(JSON.stringify(error.data.reason));
        }
      });
  };

  async function onOauthClick() {
    try {
      const response = await axios.get(OAUTH_URL);

      if (response.status === 200) {
        const serviceId = await response.data;
        window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId.service_id}&redirect_uri=${REDIRECT_URI}`;
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={b()}>
      <PageContainer size="small">
        <Title text="????????" className={b('title')} />
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
          <Footer>
            <Button
              width="stretch"
              view="primary"
              text="??????????"
              className={b('button')}
              disabled={!loginIsValid || !passwordIsValid}
            />
            <Link className="footer__link" to="/registration">
              ??????????????????????
            </Link>
          </Footer>
        </Form>
        <Button
          width="stretch"
          view="secondary"
          text="OAuth"
          className={b('button')}
          onClick={onOauthClick}
        />
        <div>{requestError}</div>
      </PageContainer>
    </div>
  );
};
