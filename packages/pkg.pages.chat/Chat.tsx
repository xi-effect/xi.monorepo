import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import { Upbar } from './Upbar';
import { DateBlock } from './DateBlock';
import { ChatProps, ChatInfoT, ChatMessagesT } from './types';
import { chatInfo as chatInfoDefault, chatMessages } from './data';

export const Chat = ({ id }: ChatProps) => {
  /* res from response */
  const [chatInfoRes, setChatInfoRes] = useState<ChatInfoT>({} as ChatInfoT);
  const [messagesRes, setMessagesRes] = useState<ChatMessagesT>({} as ChatMessagesT);
  // const [messages, setMessages] = useState<DateBlockT[]>([]);

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
      {messagesRes.messages?.map((data) => (
        <DateBlock {...data} />
      ))}

      <Input />
    </Stack>
  );
};
