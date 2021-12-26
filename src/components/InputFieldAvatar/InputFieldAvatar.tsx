import block from 'bem-cn';
import React from 'react';
import './inputFieldAvatar.css';
import avatarImg from './static/avatar-back.svg';
import { InputFieldAvatarProps } from './types';

const b = block('input-field-avatar');

export const InputFieldAvatar = ({
  id,
  src,
  className,
  isEdit = false,
  ...props
}: InputFieldAvatarProps) => {
  const getImageSrc = () => src ?? avatarImg;

  return (
    <div className={b({ isEdit }).mix(className)}>
      <input
        id={id}
        readOnly={!isEdit}
        type="file"
        accept="image/*"
        className={b('input')}
        {...props}
      />
      <label htmlFor={id} className={b('label').mix('hidden')}>
        Аватар
      </label>
      <img className={b('img')} alt="Аватар" src={getImageSrc()} />
    </div>
  );
};
