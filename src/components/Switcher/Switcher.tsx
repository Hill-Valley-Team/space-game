import React from 'react';
import block from 'bem-cn';
import './switcher.css';
import { DEFAULT_THEME_ID } from 'hooks/useUserTheme/consts';

const b = block('switcher');

type SwitcherProps = {
  from: string;
  to: string;
  value: number | undefined;
  onChangeHandler?: () => void;
};

export const Switcher = (props: SwitcherProps) => {
  const { from, to, value, onChangeHandler } = props;

  return (
    <div className={b()}>
      <div className={b('from')}>{from}</div>
      <label className={b('switch')}>
        <input
          type="checkbox"
          defaultChecked={value !== DEFAULT_THEME_ID}
          onClick={onChangeHandler}
        />
        <span className="slider round"></span>
      </label>
      <div className={b('to')}>{to}</div>
    </div>
  );
};
