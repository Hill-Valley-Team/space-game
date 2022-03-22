import block from 'bem-cn';
import { EmojiPannel } from 'components/EmojiPannel';
import { BaseEmoji } from 'emoji-mart';
import { useFormInput } from 'hooks/useFormInput';
import React, { ChangeEvent, useState } from 'react';
import { ValidationType } from 'utils/validation/consts';
import './message.css';
import { CommentListItem } from '../../pages/ForumThreadPage.ts/ThreadListItem/types';

const b = block('message-pannel');

type MessageProps = {
  className?: string;
  message?: string;
  placeholder?: string;
  name?: string;
  form?: string;
  withTitle?: boolean;
  onSubmit?: (message: string, title?: string, comment?: CommentListItem) => void;
  closeForm?: () => void;
  comment?: CommentListItem;
};

export const Message = (props: MessageProps) => {
  const {
    className,
    placeholder = 'New message...',
    message: initialMessage = '',
    withTitle = false,
    onSubmit,
    comment,
    closeForm,
  } = props;

  const [cursor, setCursor] = useState(0);

  const [
    { value: titleValue, isValid: titleIsValid, errorMessage: titleErrorMessage },
    setTitleValue,
  ] = useFormInput({ type: ValidationType.MESSAGE_TITLE });

  const [
    { value: messageValue, isValid: messageIsValid, errorMessage: messageErrorMessage },
    setMessageValue,
  ] = useFormInput({ value: initialMessage, type: ValidationType.MESSAGE });

  const handleMessageInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target;
    setMessageValue({ value: target.value });
  };

  const handleMessageSelect = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target;
    setCursor(target.selectionEnd);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitleValue({ value });
  };

  const handleEmojiSelect = (emoji: BaseEmoji) => {
    const newMessage =
      messageValue.slice(0, cursor) + emoji.native + messageValue.slice(cursor + 1);
    setMessageValue({ value: newMessage });
  };

  const reset = () => {
    setTitleValue({ value: initialMessage });
    setMessageValue({ value: '' });
  };

  const handleMessageSubmit = () => {
    if (onSubmit) {
      onSubmit(messageValue, titleValue, comment);
      if (closeForm) {
        closeForm();
      }
      reset();
    }
  };

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
        <div className={b('inner-main')}>
          <textarea
            placeholder={placeholder}
            className={b('input')}
            onChange={handleMessageInput}
            onSelect={handleMessageSelect}
            value={messageValue}
          />
          {messageErrorBlock}
          <div className={b('controls')}>
            <EmojiPannel onEmojiSelect={handleEmojiSelect} />
            <button
              className={b('send-btn')}
              disabled={!(messageIsValid && (withTitle ? titleIsValid : true))}
              onClick={handleMessageSubmit}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
