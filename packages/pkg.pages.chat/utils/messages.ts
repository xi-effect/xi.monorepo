import { useEffect, useState } from 'react';
import { DayMessagesT, ChatMessagesT } from '../types';
import { testMessages } from '../data';

const loadMessages = async (nextUrl: string | null): Promise<ChatMessagesT> =>
  new Promise((resolve) => {
    if (nextUrl) {
      setTimeout(() => {
        resolve(testMessages[nextUrl]);
      }, 200);
    }
  });

export const useMessages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<DayMessagesT[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [error, setError] = useState<Error>();

  const fetchMessages = async () => {
    setLoading(true);
  };

  useEffect(() => {
    console.log('update loading', loading);
    if (loading) {
      (async () => {
        try {
          const { messages, next } = await loadMessages(nextPage);
          setMessages((current) => {
            const updated = [...messages, ...current];
            console.log('got messages', updated);
            return updated;
          });
          setNextPage(next ?? null);
        } catch (err: any) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [loading]);

  const loadMore = async () => {
    fetchMessages();
  };

  const initializeMessagesHistory = (nextUrl: string) => {
    setNextPage(nextUrl);
    fetchMessages();
  };

  return { loading, messages, nextPage, error, loadMore, initializeMessagesHistory };
};
