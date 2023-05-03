import { useMemo } from 'react';
import { Stack } from '@mui/material';
import { Participants, Files, Pinned } from './Menu';
import { LayoutChatProps } from './types';

export const LayoutChat = ({ chosenMenu, MenuWidth = '450px', children }: LayoutChatProps) => {
  const isOpened = useMemo(() => !!chosenMenu, [chosenMenu]);

  return (
    <Stack
      direction="row"
      sx={{ height: '100vh', width: '100%', overflow: 'hidden' }}
      spacing={isOpened ? 2 : 0}
    >
      <Stack sx={{ width: '100%', height: '100%' }}>{children}</Stack>

      <Stack
        sx={{
          height: '100%',
          bgcolor: 'grayscale.0',
          transition: '0.5s',
          width: isOpened ? MenuWidth : 0,
        }}
      >
        {chosenMenu === 'participants' && <Participants />}
        {chosenMenu === 'files' && <Files />}
        {chosenMenu === 'pinned' && <Pinned />}
      </Stack>
    </Stack>
  );
};
