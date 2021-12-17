import { ButtonHTMLAttributes } from 'react';

export type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonView = 'default' | 'primary' | 'secondary' | 'error' | 'info';
export type ButtonWidth = 'auto' | 'stretch';

export type ButtonOwnProps = {
  text?: string;
  view?: ButtonView;
  width?: ButtonWidth;
  type?: ButtonTypes;
};

export type ButtonProps = ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement>;