import { useState } from 'react';
import { UserT } from '../types';
import { chatInfo } from '../data';

export const useChat = () => {
  const [chatId, setChatId] = useState<string | null>(null);
  const [chatName, setChatName] = useState<string | null>(null);
  const [chatHost, setChatHost] = useState<UserT | null>(null);
  // url to get first portion of chat messages
  const [messagesUrl, setMessagesUrl] = useState<string | null>(null);

  const loadChat = (id: string) => {
    setChatId(id);

    // fetch request to get chat info
    const { host, name, messages } = chatInfo;
    setChatName(name);
    setChatHost(host);
    setMessagesUrl(messages);
  };

  return { chatId, chatName, chatHost, messagesUrl, loadChat };
};
