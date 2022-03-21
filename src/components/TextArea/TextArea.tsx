import block from 'bem-cn';
import React from 'react';

const b = block('text-area');

type TextAreaProps = {
  value?: string;
  text?: string;
  className?: string;
};

const textAreaChangeHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  const target = event.target;
};

export const TextArea = (props: TextAreaProps) => {
  const { value, text, className } = props;

  return (
    <textarea
      autoFocus
      onChange={textAreaChangeHandle}
      className={b.mix(className)}
      placeholder={text}
    >
      {value}
    </textarea>
  );
};
