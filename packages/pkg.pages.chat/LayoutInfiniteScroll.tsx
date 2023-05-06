import { List, ListItem, Stack } from '@mui/material';
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Loading } from './Loading';
import { ChatMessagesT, DayMessagesT } from './types';
import { chatMessagesHistory } from './data';

type LayoutInfiniteScrollProps = {
  messagesRes: ChatMessagesT;
  setMessagesRes: (updatedMessages: ChatMessagesT) => void;
  children: ReactNode;
};

export const LayoutInfiniteScroll = ({
  messagesRes,
  setMessagesRes,
  children,
}: LayoutInfiniteScrollProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const scrollableRootRef = useRef<any>(null);
  const lastScrollDistanceToBottomRef = useRef<number>();

  const hasMore = useMemo(() => {
    const hasMoreMessages: boolean = 'next' in messagesRes;
    return hasMoreMessages;
  }, [messagesRes]);

  const fetchMoreMessages = async () => {
    if (!isLoading) {
      await setTimeout(() => {
        const { messages } = messagesRes;
        const updatedMessages: DayMessagesT[] = [...chatMessagesHistory.messages, ...messages];
        setMessagesRes({ ...chatMessagesHistory, messages: updatedMessages });
      }, 1300);
    }
  };
  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };
  const loadMore = async () => {
    await setLoading(true);
    await fetchMoreMessages();
    await setLoading(false);
  };

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    rootMargin: '0px 0px 0px 0px',
  });

  const rootRefSetter = useCallback(
    (node: HTMLDivElement) => {
      rootRef(node);
      scrollableRootRef.current = node;
    },
    [rootRef],
  );
  const handleRootScroll = useCallback(() => {
    const rootNode = scrollableRootRef.current;
    if (rootNode) {
      const scrollDistanceToBottom = rootNode.scrollHeight - rootNode.scrollTop;
      lastScrollDistanceToBottomRef.current = scrollDistanceToBottom;
    }
  }, []);

  useEffect(() => {
    const scrollableRoot = scrollableRootRef.current;
    const lastScrollDistanceToBottom = lastScrollDistanceToBottomRef.current ?? 0;
    if (scrollableRoot) {
      scrollableRoot.scrollTop = scrollableRoot.scrollHeight - lastScrollDistanceToBottom;
    }
  }, [messagesRes, rootRef]);

  return (
    <Stack
      ref={rootRefSetter}
      onScroll={handleRootScroll}
      sx={{
        height: '100%',
        overflow: 'auto',
      }}
    >
      <List>
        {hasMore && (
          <ListItem
            ref={infiniteRef}
            sx={{
              width: '100%',
              bgcolor: 'unset',
              overflow: 'hidden',
              m: '16px 0',
            }}
          >
            <Loading />
          </ListItem>
        )}

        {children}
      </List>
    </Stack>
  );
};
