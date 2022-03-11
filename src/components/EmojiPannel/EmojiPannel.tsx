import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { BaseEmoji, Picker } from 'emoji-mart';
import block from 'bem-cn';
import './emojiPannel.css';

const b = block('emoji-pannel');

type EmojiPannelProps = {
  className?: string;
  onEmojiSelect: (emoji: BaseEmoji) => void;
};

export const EmojiPannel = (props: EmojiPannelProps) => {
  const { className, onEmojiSelect } = props;
  const [isVisiblePicker, setIsVisiblePicker] = useState(false);

  const handlePickerVisibility = () => {
    setIsVisiblePicker(!isVisiblePicker);
  };

  const handleEmojiSelect = (emoji: BaseEmoji) => {
    onEmojiSelect(emoji);
    handlePickerVisibility();
  };

  return (
    <div className={b.mix(className)}>
      <button className={b('button')} onClick={handlePickerVisibility} />
      <div className={b('picker', { hide: !isVisiblePicker })}>
        <Picker native={true} emojiTooltip onSelect={handleEmojiSelect} />
      </div>
    </div>
  );
};
