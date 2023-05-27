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
      <Stack mb="4px" direction="row" alignItems="center">
        <div>
          <Avatar size={16} />
        </div>

        <Typography sx={{ wordBreak: 'break-all' }} fontWeight={500} fontSize={12} m="0 4px">
          {author}
        </Typography>

        <Typography color="#666" textTransform="uppercase" fontSize={12} m="0 4px">
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
          backgroundColor: 'grayscale.80',
        }}
      >
        {message}
      </Box>
    </Box>
  );
};

export default UserChat;
