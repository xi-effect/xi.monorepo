import { useState } from 'react';
import { UserT } from '../types';
import { chatInfo } from '../data';

export const useLoadChat = () => {
  const [chatId, setChatId] = useState<string | null>(null);
  const [chatName, setChatName] = useState<string | null>(null);
  const [chatHost, setChatHost] = useState<UserT | null>(null);
  // url to get first portion of chat messages
  const [initializeMessages, setInitializeMessages] = useState<string | null>(null);

  const loadChat = (id: string) => {
    setChatId(id);

    // fetch request to get chat info
    const { host, name, messages } = chatInfo;
    setChatName(name);
    setChatHost(host);
    setInitializeMessages(messages);
  };

  return { chatId, chatName, chatHost, initializeMessages, loadChat };
};
