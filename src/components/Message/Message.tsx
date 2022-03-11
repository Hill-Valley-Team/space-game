import block from 'bem-cn';
import React from 'react';
import './message.css';

const b = block('message-pannel');

type MessageProps = {
  className?: string;
  value?: string;
  text?: string;
  name?: string;
  form?: string;
  onChange?: (fieldName: string, value: string) => void;
};

export const Message = (props: MessageProps) => {
  return (
    <div className={b()}>
      <div className={b('container')}>
        <div className={b('inner-main')}>
          <div contentEditable="true" role="textbox" tabIndex={0} className={b('input')}></div>
          <div className={b('controls')}>
            <button className={b('send-btn')}></button>
          </div>
        </div>
      </div>
    </div>
  );
};
