import block from 'bem-cn';
import React from 'react';
import { AppNavigation } from '../../components/AppNavigation/AppNavigation';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/Title';
import './homePage.css';

const b = block('home-page');

export const HomePage = () => (
  <div className={b()}>
    <PageContainer size="large">
      <Title text="Главная страница" />
      <AppNavigation className={b('navigation')} align="center" />
    </PageContainer>
  </div>
);
