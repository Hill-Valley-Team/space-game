import block from 'bem-cn';
import { EmojiPannel } from 'components/EmojiPannel';
import { BaseEmoji } from 'emoji-mart';
import { useFormInput } from 'hooks/useFormInput';
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { ValidationType } from 'utils/validation/consts';
import './message.css';
import { getCursorPosition, setCursorPosition } from './utils';

const b = block('message-pannel');

type MessageProps = {
  className?: string;
  message?: string;
  placeholder?: string;
  name?: string;
  form?: string;
  withTitle?: boolean;
  onSubmit?: (message: string, title?: string) => void;
};

export const Message = (props: MessageProps) => {
  const {
    className,
    placeholder = 'New message...',
    message: initialMessage = '',
    withTitle = false,
    onSubmit,
  } = props;

  const [cursor, setCursor] = useState(0);
  const input = React.createRef<HTMLDivElement>();

  const [
    { value: titleValue, isValid: titleIsValid, errorMessage: titleErrorMessage },
    setTitleValue,
  ] = useFormInput({ type: ValidationType.SHORT_TEXT });

  const [
    { value: messageValue, isValid: messageIsValid, errorMessage: messageErrorMessage },
    setMessageValue,
  ] = useFormInput({ type: ValidationType.TEXT });

  const handleMessageInput = (event: ChangeEvent<HTMLDivElement>) => {
    const value = event.target.textContent;
    if (value !== null) {
      setCursor(getCursorPosition(input));
      input.current?.blur();
      setMessageValue({ value });
    }
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitleValue({ value });
  };

  const handleEmojiSelect = (emoji: BaseEmoji) => {
    const newMessage =
      messageValue.slice(0, cursor) + emoji.native + messageValue.slice(cursor + 1);
    setCursor(cursor + 1);
    setMessageValue({ value: newMessage });
  };

  const handleInputFocus = () => {
    input.current?.focus();
  };

  const handleMessageSubmit = () => {
    if (onSubmit) {
      onSubmit(messageValue, titleValue);
    }
  };

  useEffect(() => {
    if (cursor !== 0) {
      setCursorPosition(input, cursor);
    }
  }, [messageValue]);

  const titleErrorBlock = !titleIsValid ? (
    <div className={b('error-message')}>{titleErrorMessage}</div>
  ) : null;

  const messageErrorBlock = !messageIsValid ? (
    <div className={b('error-message')}>{messageErrorMessage}</div>
  ) : null;

  const titleInput = withTitle ? (
    <>
      <div className={b('title')}>
        <input placeholder="Заголовок" value={titleValue} onChange={handleTitleChange} />
      </div>
      {titleErrorBlock}
    </>
  ) : null;

  return (
    <div className={b.mix(className)}>
      {titleInput}
      <div className={b('container')}>
        <div
          className={b('placeholder', { hide: messageValue.length > 0 })}
          onClick={handleInputFocus}
        >
          {placeholder}
        </div>
        <div className={b('inner-main')}>
          <div
            contentEditable="true"
            role="textbox"
            className={b('input')}
            onInput={handleMessageInput}
            suppressContentEditableWarning={true}
            ref={input}
          >
            {messageValue}
          </div>
          {messageErrorBlock}
          <div className={b('controls')}>
            <EmojiPannel onEmojiSelect={handleEmojiSelect} />
            <button
              className={b('send-btn')}
              disabled={!(messageIsValid && titleIsValid)}
              onClick={handleMessageSubmit}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
