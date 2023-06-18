import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Avatar } from 'pkg.data.avatar';
import { ChatUserT } from '../Conference/Modals/Chat';

const UserChat: React.FC<{ userChat: ChatUserT }> = (props) => {
  const {
    userChat: { message, time, author },
  } = props;

  const date = new Date();

  return (
    <Box mb="16px">
      <Stack
        sx={{
          mb: '4px',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div>
          <Avatar size={16} />
        </div>

        <Typography
          sx={{
            m: '0 4px',
            fontSize: '12px',
            fontWeight: 500,
            wordBreak: 'break-all',
          }}
        >
          {author}
        </Typography>

        <Typography
          sx={{
            m: '0 4px',
            fontSize: '12px',
            color: 'petersburg.60',
            textTransform: 'uppercase',
          }}
        >
          {time || `${date.getHours()}:${date.getMinutes()}`}
        </Typography>
      </Stack>

      <Box
        sx={{
          p: '8px 12px',
          fontSize: '14px',
          fontWeight: 500,
          borderRadius: '8px',
          lineHeight: '18px',
          wordBreak: 'break-all',
          display: 'inline-block',
          backgroundColor: 'petersburg.80',
        }}
      >
        {message}
      </Box>
    </Box>
  );
};

export default UserChat;
