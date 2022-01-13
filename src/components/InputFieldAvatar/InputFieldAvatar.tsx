import block from 'bem-cn';
import React from 'react';
import { Form } from '../Form/Form';
import './inputFieldAvatar.css';
import avatarImg from './static/avatar-back.svg';
import { InputFieldAvatarProps } from './types';

const b = block('input-field-avatar');

export const InputFieldAvatar = ({
  id,
  src,
  className,
  isEdit = false,
  onChangeHandler,
  ...props
}: InputFieldAvatarProps) => {
  const getImageSrc = () => src ?? avatarImg;

  const onChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.currentTarget;
    input?.form?.requestSubmit();
  };

  return (
    <div className={b({ isEdit }).mix(className)}>
      <Form className={b('form')} onSubmitHandler={onChangeHandler}>
        <input
          id={id}
          readOnly={!isEdit}
          type="file"
          accept="image/*"
          className={b('input')}
          onChange={onChangeHandle}
          {...props}
        />
        <label htmlFor={id} className={b('label')}>
          Изменить аватар
        </label>
        <img className={b('img')} alt="Аватар" src={getImageSrc()} />
      </Form>
    </div>
  );
};
