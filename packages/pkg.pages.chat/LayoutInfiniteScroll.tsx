import { List, ListItem, Stack } from '@mui/material';
import { ReactNode, useCallback, useEffect, useRef, useMemo } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Loading } from './Loading';
import { DayMessagesT } from './types';

type LayoutInfiniteScrollProps = {
  children: ReactNode;
  loading: boolean;
  nextPage: string | null;
  loadMore: () => void;
  messages: DayMessagesT[];
};

export const LayoutInfiniteScroll = ({
  loading,
  nextPage,
  loadMore,
  messages,
  children,
}: LayoutInfiniteScrollProps) => {
  const hasMore = useMemo(() => !nextPage, [nextPage]);

  const scrollableRootRef = useRef<any>(null);
  const lastScrollDistanceToBottomRef = useRef<number>();

  const onLoadMore = () => {
    console.log('next page to load more', nextPage);
    loadMore();
  };

  useEffect(() => {
    console.log('update messages', messages);
  }, [messages]);

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore,
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
  }, [messages, rootRef]);

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
