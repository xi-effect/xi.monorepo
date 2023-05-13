import { useEffect, useState } from 'react';
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

export const useLoadMessages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<DayMessagesT[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    console.log('updaete nextPage', nextPage);
  }, [nextPage]);

  const loadMore = async (nextUrl: string | null) => {
    console.log('loading more messages', nextUrl);

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

  const initializeMessagesHistory = (nextUrl: string) => {
    console.log('loading more messages', nextUrl);
    setNextPage(nextUrl);
    loadMore(nextUrl);
  };

  return { loading, messages, nextPage, error, loadMore, initializeMessagesHistory };
};
