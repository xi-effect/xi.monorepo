import { useState } from 'react';
import { DayMessagesT, ChatMessagesT } from '../types';
import { testMessages } from '../data';

const loadMessages = async (nextUrl: string | null): Promise<ChatMessagesT> =>
  new Promise((resolve) => {
    if (nextUrl) {
      setTimeout(() => {
        resolve(testMessages[nextUrl]);
      }, 1300);
    }
  });

export const useMessages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<DayMessagesT[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [error, setError] = useState<Error>();

  const fetchMessages = async (nextUrl: string | null) => {
    setLoading(true);

    try {
      const { messages, next } = await loadMessages(nextUrl);
      setMessages((current) => [...messages, ...current]);
      console.log('set next page', next, next ?? null);
      setNextPage(next ?? null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    console.log('loading more messages', nextPage);
    fetchMessages(nextPage);
  };

  const initializeMessagesHistory = (nextUrl: string) => {
    console.log('initialize messages history', nextUrl);
    setNextPage(nextUrl);
    fetchMessages(nextUrl);
  };

  return { loading, messages, nextPage, error, loadMore, initializeMessagesHistory };
};
