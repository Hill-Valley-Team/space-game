import block from 'bem-cn';
import { Button } from 'components/Button';
import { TextArea } from 'components/TextArea';
import React from 'react';
import { DEFAULT_BTN_TEXT } from './consts';
import './addBlock.css';

const b = block('add-block');

type AddBlockProps = {
  onClickHandler?: () => void;
  className?: string;
  buttonText?: string;
};

export const AddBlock = (props: AddBlockProps) => {
  const { onClickHandler, className, buttonText = DEFAULT_BTN_TEXT } = props;
  return (
    <div className={b.mix(className)}>
      <TextArea className={b('text-area')} text="Новая тема" />
      <Button
        view="primary"
        align="center"
        onClick={onClickHandler}
        className={b('button')}
        text={buttonText}
      />
    </div>
  );
};
