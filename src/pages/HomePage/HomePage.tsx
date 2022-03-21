import block from 'bem-cn';
import React, { useCallback, useEffect } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import './homePage.css';
import { useGetUserInfo } from 'hooks/useGetUserInfo';
import { Meta } from 'components/Meta';
import teamLogoImg from './static/team-logo.png';
import { Button } from '../../components/Button';
import { Switcher } from '../../components/Switcher/Switcher';
import { useUserTheme } from '../../hooks/useUserTheme';
import { Logo } from '../../components/Logo';
import { removeFullscreenListener } from '../../utils/fullscreen';
import { loginWithOAuth } from '../../controllers/OAuthController';

const b = block('home-page');
export const HomePage = () => {
  const { isAuth } = useGetUserInfo();
  const { data: themeData, toggleUserTheme } = useUserTheme();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { requestUserInfo, userData } = useGetUserInfo();

  useEffect(() => {
    // если пришли сюда с параметром code - это была авторизация через oauth
    const code = searchParams.get('code');
    if (code) {
      loginWithOAuth(code)
        .then((result) => {
          if (result.status === 200) {
            requestUserInfo();
          }
        })
        .then(() => navigate('/'));
    }
  }, []);

  const onThemeSwitch = useCallback(() => {
    toggleUserTheme();
  }, [themeData]);

  const onPlayBtnClick = useCallback(() => {
    navigate('/game');
  }, [navigate]);

  const onEnterBtnClick = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const onRegisterBtnClick = useCallback(() => {
    navigate('/registration');
  }, [navigate]);

  const getBtnBlock = () => {
    if (isAuth) {
      return (
        <Button
          width="fixed"
          view="primary"
          text="Играть!"
          className={b('play-button')}
          onClick={onPlayBtnClick}
        />
      );
    }
    return (
      <>
        <Button
          width="fixed"
          view="primary"
          text="Войти"
          className={b('enter-button')}
          onClick={onEnterBtnClick}
        />
        <Button
          width="fixed"
          view="secondary"
          text="Зарегистрироваться"
          className={b('registration-button')}
          onClick={onRegisterBtnClick}
        />
      </>
    );
  };

  const getLinkBlock = () => {
    if (isAuth) {
      return (
        <>
          <NavLink className={b('link')} to="/profile">
            Профиль
          </NavLink>
          <NavLink className={b('link')} to="/forum">
            Форум
          </NavLink>
          <NavLink className={b('link')} to="/leaderboard">
            Таблица игроков
          </NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink className={b('link')} to="/forum">
          Форум
        </NavLink>
        <NavLink className={b('link')} to="/leaderboard">
          Таблица игроков
        </NavLink>
      </>
    );
  };

  return (
    <div className={b()}>
      <Meta title="Space Racing Game - Главная страница игры" />
      <div className={b('container')}>
        <div className={b('left')}>
          <Logo className={b('logo')} />
          <div>
            <h1 className={b('title')}>Космические гонки</h1>
            <p className={b('text')}>
              Собирай монеты и избегай столкновений. Становись лучшим космическим гонщиком!
            </p>
            <div className={b('btn-block')}>{getBtnBlock()}</div>
          </div>
          <div className={b('link-block')}>{getLinkBlock()}</div>
        </div>
        <div className={b('right')}>
          <Switcher
            from="Светлая тема"
            to="Тёмная тема"
            value={themeData?.id}
            onChangeHandler={onThemeSwitch}
          />
          <img src={teamLogoImg} alt="Лого команды" />
        </div>
      </div>
    </div>
  );
};
