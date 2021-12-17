export type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonView = 'default' | 'primary' | 'secondary' | 'error' | 'info';
export type ButtonWidth = 'auto' | 'stretch';

export type ButtonProps = {
  text?: string;
  className?: string;
  type?: ButtonTypes;
  view?: ButtonView;
  width?: ButtonWidth;
};
