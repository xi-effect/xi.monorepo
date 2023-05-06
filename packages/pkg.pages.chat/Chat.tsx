import { useEffect, useState } from 'react';
import { Stack, ListItem } from '@mui/material';
import { ChatInput } from 'pkg.inputs.chat';
import { LayoutChat } from './LayoutChat';
import { Upbar } from './Upbar';
import { LayoutInfiniteScroll } from './LayoutInfiniteScroll';
import { DateBlock } from './DateBlock';
import { ChatProps, ChatInfoT, ChatMessagesT, MenuT } from './types';
import { chatInfo as chatInfoDefault, chatMessages } from './data';

export const Chat = ({ id }: ChatProps) => {
  /* res from response */
  const [chatInfoRes, setChatInfoRes] = useState<ChatInfoT>({} as ChatInfoT);
  const [messagesRes, setMessagesRes] = useState<ChatMessagesT>({} as ChatMessagesT);

  const [chosenMenu, setChosenMenu] = useState<MenuT>(null);

  const openMenu = (type: MenuT) => {
    setChosenMenu((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    // fetch request to get chat info
    console.log('chat is', id);
    setChatInfoRes(chatInfoDefault);
    setMessagesRes(chatMessages);
  }, []);

  return (
    <LayoutChat chosenMenu={chosenMenu}>
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
        <Upbar {...chatInfoRes} openMenu={openMenu} menuType={chosenMenu} />

        <LayoutInfiniteScroll messagesRes={messagesRes} setMessagesRes={setMessagesRes}>
          {messagesRes.messages?.map((data) => (
            <ListItem sx={{ p: 0 }}>
              <DateBlock {...data} />
            </ListItem>
          ))}
        </LayoutInfiniteScroll>

        <ChatInput />
      </Stack>
    </LayoutChat>
  );
};
