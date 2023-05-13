import { useEffect, useState } from 'react';
import { Stack, ListItem } from '@mui/material';
import { ChatInput } from 'pkg.inputs.chat';
import { LayoutChat } from './LayoutChat';
import { Upbar } from './Upbar';
import { LayoutInfiniteScroll } from './LayoutInfiniteScroll';
import { DateBlock } from './DateBlock';
import { ChatProps, MenuT } from './types';
import { useLoadMessages, useLoadChat } from './utils/index';

export const Chat = ({ id }: ChatProps) => {
  const { messages, initializeMessagesHistory } = useLoadMessages();
  const { loadChat, initializeMessages } = useLoadChat();
  const [chosenMenu, setChosenMenu] = useState<MenuT>(null);

  const openMenu = (type: MenuT) => {
    setChosenMenu((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    loadChat(id);
  }, []);

  useEffect(() => {
    console.log('initialize messages', initializeMessages);
    if (initializeMessages) initializeMessagesHistory(initializeMessages);
  }, [initializeMessages]);

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
        <Upbar openMenu={openMenu} menuType={chosenMenu} />

        <LayoutInfiniteScroll>
          {messages?.map((data) => (
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
