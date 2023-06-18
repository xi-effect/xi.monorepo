import { IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useStore } from 'store/connect';
import { Send, Close, Clip } from 'pkg.icons';
import { observer } from 'mobx-react';
import UserChat from '../../Common/UserChat';

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
        color: 'petersburg.0',
        p: '16px 0 16px 16px',
        transition: 'right 0.4s linear',
        backgroundColor: 'petersburg.100',
        ...optionalSx,
      }}
    >
      <Stack
        sx={{
          pr: '16px',
          mb: '16px',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Участники</Typography>

        {tablet && (
          <IconButton
            onClick={() => {
              setConferenceControlBar('members', false);

              setConferenceControlBar('chat', false);
            }}
            sx={{
              p: '0',
              color: 'petersburg.0',
            }}
          >
            <Close />
          </IconButton>
        )}
      </Stack>

      <Stack
        sx={{
          pr: '16px',
          flex: '1 1 auto',
          overflowY: 'scroll',
        }}
      >
        {usersChat.map((u) => (
          <UserChat userChat={u} />
        ))}
      </Stack>

      <Stack
        sx={{
          height: '28px',
          p: '10px 16px 0 0',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <IconButton onClick={() => fileRef.current?.click()} sx={{ p: 0, color: 'petersburg.100' }}>
          <Clip />

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
            margin: '0 15.4px',
            color: 'petersburg.100',
            backgroundColor: 'transparent',
          }}
        />

        <IconButton onClick={sendMessage} sx={{ p: 0, color: 'petersburg.100' }}>
          <Send />
        </IconButton>
      </Stack>
    </Stack>
  );
});

export default Chat;
