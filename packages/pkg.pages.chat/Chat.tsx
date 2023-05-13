import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { ChatInput } from 'pkg.inputs.chat';
import { LayoutChat } from './LayoutChat';
import { Upbar } from './Upbar';
import { ChatProps, MenuT, UserT } from './types';
import { useChat } from './utils';

export const Chat = ({ id }: ChatProps) => {
  const [chosenMenu, setChosenMenu] = useState<MenuT>(null);

  const { chatName, chatHost, initializeMessages, chatId, loadChat } = useChat();

  const openMenu = (type: MenuT) => {
    setChosenMenu((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    loadChat(id);
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
        <Upbar
          openMenu={openMenu}
          menuType={chosenMenu}
          id={chatId ?? ''}
          name={chatName ?? ''}
          host={chatHost ?? ({} as UserT)}
          messages={initializeMessages ?? ''}
        />

        {/* <LayoutInfiniteScroll>
          {messages?.map((data, index) => (
            // change key
            <ListItem sx={{ p: 0 }} key={`dateBlock_${data.date}_${index}`}>
              <DateBlock {...data} />
            </ListItem>
          ))}
        </LayoutInfiniteScroll> */}

        <ChatInput />
      </Stack>
    </LayoutChat>
  );
};
