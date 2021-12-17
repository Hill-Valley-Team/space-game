import block from 'bem-cn';
import React from 'react';
import { FormProps } from './types';
import './form.css';

const b = block('form');

export const Form = ({ className, children, onSubmitHandler, ...props }: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (onSubmitHandler) {
      onSubmitHandler(formData);
    }
  };

  return (
    <form className={b.mix(className)} {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};
