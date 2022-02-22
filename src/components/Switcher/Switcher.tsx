import React from 'react';
import block from 'bem-cn';
import './switcher.css';

const b = block('switcher');

type SwitcherProps = {
  from: string;
  to: string;
  checked: boolean;
};

export const Switcher = (props: SwitcherProps) => {
  return (
    <div className={b()}>
      <div className={b('from')}>{props.from}</div>
      <label className={b('switch')}>
        <input type="checkbox" checked={props.checked} />
        <span className="slider round"></span>
      </label>
      <div className={b('to')}>{props.to}</div>
    </div>
  );
};
