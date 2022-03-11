import block from 'bem-cn';
import { EmojiPannel } from 'components/EmojiPannel';
import { BaseEmoji } from 'emoji-mart';
import React, { ChangeEvent, useEffect, useState } from 'react';
import './message.css';
import { getCursorPosition, setCursorPosition } from './utils';

const b = block('message-pannel');

type MessageProps = {
  className?: string;
  message?: string;
  placeholder?: string;
  name?: string;
  form?: string;
  onSubmit?: (message: string) => void;
};

export const Message = (props: MessageProps) => {
  const {
    className,
    placeholder = 'New message...',
    message: initialMessage = '',
    onSubmit,
  } = props;
  const [message, setMessage] = useState(initialMessage);
  const [cursor, setCursor] = useState(0);
  const input = React.createRef<HTMLDivElement>();

  const handleMessageInput = (event: ChangeEvent<HTMLDivElement>) => {
    const value = event.target.textContent;

    if (value !== null) {
      setCursor(getCursorPosition(input));
      input.current?.blur();
      setMessage(value);
    }
  };

  const handleEmojiSelect = (emoji: BaseEmoji) => {
    const newMessage = message.slice(0, cursor) + emoji.native + message.slice(cursor + 1);
    setCursor(cursor + 1);
    setMessage(newMessage);
  };

  const handleInputFocus = () => {
    input.current?.focus();
  };

  const handleMessageSubmit = () => {
    if (onSubmit) {
      onSubmit(message);
    }
  };

  useEffect(() => {
    if (cursor !== 0) {
      setCursorPosition(input, cursor);
    }
  });

  return (
    <div className={b.mix(className)}>
      <div className={b('container')}>
        <div className={b('placeholder', { hide: message.length > 0 })} onClick={handleInputFocus}>
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
            {message}
          </div>
          <div className={b('controls')}>
            <EmojiPannel onEmojiSelect={handleEmojiSelect} />
            <button
              className={b('send-btn')}
              disabled={message.length === 0}
              onClick={handleMessageSubmit}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
