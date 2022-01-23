import block from 'bem-cn';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import './backButton.css';
import { BackButtonProps } from './types';

const b = block('back-button');

export const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate(-1);
  };

  return (
    <Button
      onClick={onBtnClick}
      className={b.mix(className)}
      type="button"
      text=""
      view="primary"
      width="auto"
    />
  );
};
