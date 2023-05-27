import { IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useStore } from 'store/connect';
import { Send, Close } from 'pkg.icons';
import { observer } from 'mobx-react';
import UserChat from '../../Common/UserChat';
import { File } from '../../Icons/File';

export type ChatUserT = {
  author: string;
  time?: string;
  message: string;
};

const Chat = observer(() => {
  const rootStore = useStore();

  const {
    mediaSt: {
      setConferenceControlBar,
      conferenceControlBar: { chat },
    },
  } = rootStore;

  const [usersChat, setUsersChat] = useState<ChatUserT[]>([
    {
      author: 'test',
      message: 'test message',
    },
  ]);

  const tablet = useMediaQuery('(max-width:700px)');

  const [value, setValue] = useState<string>('');

  const fileRef = useRef<HTMLInputElement>(null);
  const sendMessage = () => {
    if (!value) return;

    setUsersChat((u) => [...u, { message: value, author: value }]);

    setValue('');
  };

  const optionalSx = tablet
    ? {
        top: '52px',
        width: '100%',
        height: 'fill-available',
        borderRadius: 'none',
        position: 'fixed',
        transform: 'translateY(0)',
        right: chat ? 0 : '-100%',
      }
    : {
        top: '50%',
        width: '28%',
        height: '70%',
        borderRadius: '8px',
        position: 'absolute',
        transform: 'translateY(-50%)',
        right: chat ? '16px' : '-50%',
      };

  return (
    <Stack
      sx={{
        color: 'grayscale.0',
        p: '16px 0 16px 16px',
        transition: 'right 0.4s linear',
        backgroundColor: 'grayscale.100',
        ...optionalSx,
      }}
    >
      <Stack pr="16px" mb="16px" alignItems="center" direction="row" justifyContent="space-between">
        <Typography fontSize={18} fontWeight={700}>
          Участники
        </Typography>

        {tablet && (
          <IconButton
            onClick={() => {
              setConferenceControlBar('members', false);

              setConferenceControlBar('chat', false);
            }}
            sx={{
              p: '0',
              color: 'grayscale.0',
            }}
          >
            <Close />
          </IconButton>
        )}
      </Stack>

      <Stack pr="16px" sx={{ overflowY: 'scroll' }} flex="1 1 auto">
        {usersChat.map((u) => (
          <UserChat userChat={u} />
        ))}
      </Stack>

      <Stack p="10px 16px 0 0" height="28px" direction="row" alignItems="center">
        <IconButton onClick={() => fileRef.current?.click()} sx={{ p: 0, color: '#E6E6E6' }}>
          <File />

          <input ref={fileRef} type="file" style={{ display: 'none' }} />
        </IconButton>

        <input
          value={value}
          onKeyUp={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Напишите сообщение"
          style={{
            width: '100%',
            border: 'none',
            outline: 'none',
            color: '#E6E6E6',
            margin: '0 15.4px',
            backgroundColor: 'transparent',
          }}
        />

        <IconButton onClick={sendMessage} sx={{ p: 0, color: '#E6E6E6' }}>
          <Send />
        </IconButton>
      </Stack>
    </Stack>
  );
});

export default Chat;
