import { useEffect, useState } from 'react';
import { ListItem, Stack } from '@mui/material';
import { ChatInput } from 'pkg.inputs.chat';
import { LayoutChat } from './Rendering/LayoutChat';
import { Upbar } from './Components/Upbar';
import { ChatProps, MenuT, UserT } from './types';
import { useChat, useMessages } from './utils';
import { LayoutInfiniteScroll } from './Rendering';
import { DateBlock } from './Components/DateBlock';

export const Chat = ({ id }: ChatProps) => {
  const [chosenMenu, setChosenMenu] = useState<MenuT>(null);

  const { chatName, chatHost, messagesUrl, chatId, loadChat } = useChat();
  const { messages, initializeMessages, ...messagesData } = useMessages();

  const openMenu = (type: MenuT) => {
    setChosenMenu((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    loadChat(id);
  }, []);

  useEffect(() => {
    if (messagesUrl) initializeMessages(messagesUrl);
  }, [messagesUrl]);

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
        <Upbar
          openMenu={openMenu}
          menuType={chosenMenu}
          id={chatId ?? ''}
          name={chatName ?? ''}
          host={chatHost ?? ({} as UserT)}
          messages={messagesUrl ?? ''}
        />

        <LayoutInfiniteScroll {...messagesData} messages={messages}>
          {messages?.map((data, index) => (
            // change key
            <ListItem sx={{ p: 0 }} key={`dateBlock_${data.date}_${index}`}>
              <DateBlock {...data} />
            </ListItem>
          ))}
        </LayoutInfiniteScroll>

        <ChatInput />
      </Stack>
    </LayoutChat>
  );
};
