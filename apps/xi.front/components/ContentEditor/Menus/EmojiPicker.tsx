/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import "emoji-mart/css/emoji-mart.css";

function EmojiPicker({ onSelect }) {
  return <Picker data={data} onEmojiSelect={onSelect} />;
}

export default React.memo(EmojiPicker);
