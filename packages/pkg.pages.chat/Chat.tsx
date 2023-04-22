import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Upbar } from './Upbar';
import { DateBlock } from './DateBlock';
import { ChatProps, ChatInfoT, ChatMessagesT, DayMessagesT } from './types';
import { chatInfo as chatInfoDefault, chatMessages, chatMessagesHistory } from './data';

export const Chat = ({ id }: ChatProps) => {
  /* res from response */
  const [chatInfoRes, setChatInfoRes] = useState<ChatInfoT>({} as ChatInfoT);
  const [messagesRes, setMessagesRes] = useState<ChatMessagesT>({} as ChatMessagesT);
  // const [messages, setMessages] = useState<DateBlockT[]>([]);

  const fetchMoreMessages = () => {
    const { messages } = messagesRes;
    const updatedMessages: DayMessagesT[] = [...messages, ...chatMessagesHistory.messages];
    setMessagesRes((data) => ({ ...data, messages: updatedMessages }));
  };

  useEffect(() => {
    // fetch request to get chat info
    console.log(id);
    setChatInfoRes(chatInfoDefault);
    setMessagesRes(chatMessages);
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
      }}
    >
      <Upbar {...chatInfoRes} />

      <div
        id="scrollableDiv"
        style={{
          height: '50%',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <InfiniteScroll
          dataLength={messagesRes.messages ? messagesRes.messages.length - 2 : 0}
          next={fetchMoreMessages}
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
          inverse
          hasMore
          scrollThreshold={0.9}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {messagesRes.messages?.map((data) => (
            <DateBlock {...data} />
          ))}
        </InfiniteScroll>
      </div>

      <Input />
    </Stack>
  );
};
