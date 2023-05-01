import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Stack, List, ListItem } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Upbar } from './Upbar';
import { DateBlock } from './DateBlock';
import { ChatProps, ChatInfoT, ChatMessagesT, DayMessagesT } from './types';
import { chatInfo as chatInfoDefault, chatMessages, chatMessagesHistory } from './data';

export const Chat = ({ id }: ChatProps) => {
  /* res from response */
  const [chatInfoRes, setChatInfoRes] = useState<ChatInfoT>({} as ChatInfoT);
  const [messagesRes, setMessagesRes] = useState<ChatMessagesT>({} as ChatMessagesT);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const hasMore = useMemo(() => {
    const hasMoreMessages: boolean = 'next' in messagesRes;
    console.log('update has more', messagesRes.id);
    return hasMoreMessages;
  }, [messagesRes]);

  const scrollableRootRef = useRef<any>(null);
  const lastScrollDistanceToBottomRef = useRef<number>();

  const fetchMoreMessages = async () => {
    await setTimeout(() => {
      const { messages } = messagesRes;
      const updatedMessages: DayMessagesT[] = [...chatMessagesHistory.messages, ...messages];
      setMessagesRes({ ...chatMessagesHistory, messages: updatedMessages });
    }, 0);
  };
  const setLoading = (loading: boolean) => setIsLoading(loading);
  const loadMore = async () => {
    await setLoading(true);
    await fetchMoreMessages();
    await setLoading(false);
  };

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    rootMargin: '1000px 0px 0px 0px',
  });

  useEffect(() => {
    // fetch request to get chat info
    console.log(id);
    setChatInfoRes(chatInfoDefault);
    setMessagesRes(chatMessages);
  }, []);

  useEffect(() => {
    const scrollableRoot = scrollableRootRef.current;
    const lastScrollDistanceToBottom = lastScrollDistanceToBottomRef.current ?? 0;
    if (scrollableRoot) {
      scrollableRoot.scrollTop = scrollableRoot.scrollHeight - lastScrollDistanceToBottom;
    }
  }, [messagesRes, rootRef]);

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

  return (
    <Stack
      direction="column"
      spacing={3}
      justifyContent="flex-end"
      sx={{
        bgcolor: 'grayscale.0',
        height: '100%',
        overflow: 'auto',
        borderRadius: '8px',
        p: '16px',
        width: '100%',
      }}
    >
      <Upbar {...chatInfoRes} />

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
              sx={{ width: '100%', height: '1200px', bgcolor: 'unset' }}
            />
          )}

          {messagesRes.messages?.map((data) => (
            <ListItem sx={{ p: 0 }}>
              <DateBlock {...data} />
            </ListItem>
          ))}
        </List>
      </Stack>

      <Input />
    </Stack>
  );
};
