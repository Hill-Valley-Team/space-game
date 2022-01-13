import { ButtonHTMLAttributes } from 'react';

export type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonView = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'link';
export type ButtonWidth = 'auto' | 'stretch' | 'fixed';
export type ButtonAlign = 'left' | 'center' | 'right';

export type ButtonOwnProps = {
  text?: string;
  view?: ButtonView;
  width?: ButtonWidth;
  type?: ButtonTypes;
  align?: ButtonAlign;
};

export type ButtonProps = ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement>;
