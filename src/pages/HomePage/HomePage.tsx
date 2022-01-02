import block from 'bem-cn';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/Title';
import { authController } from '../../controllers/AuthController';

const b = block('home-page');

export const HomePage = () => {
  const [requestError, setRequestError] = useState('');
  const navigate = useNavigate();

  const onClickHandle = () => {
    authController
      .logOut()
      .then(() => navigate('/login'))
      .catch((error) => {
        if (error.response && error.response.data) {
          setRequestError(error.response.data.reason ?? '');
        }
      });
  };

  return (
    <div className={b()}>
      <PageContainer size="large">
        <Title text="Главная страница" />
        <Button text="Выйти" type="button" onClick={onClickHandle} />
        HomePage
        <div>{requestError}</div>
      </PageContainer>
    </div>
  );
};
