import { Stack } from '@mui/material';
import { Participants, Files, Pinned } from './Menu';
import { LayoutChatProps } from './types';

export const LayoutChat = ({ chosenMenu, MenuWidth = '450px', children }: LayoutChatProps) => (
  <Stack direction="row" sx={{ height: '100vh', width: '100%' }} spacing={2}>
    <Stack sx={{ width: '100%', height: '100%' }}>{children}</Stack>

    {chosenMenu && (
      <Stack sx={{ width: MenuWidth, height: '100%', bgcolor: 'grayscale.0' }}>
        {chosenMenu === 'participants' && <Participants />}
        {chosenMenu === 'files' && <Files />}
        {chosenMenu === 'pinned' && <Pinned />}
      </Stack>
    )}
  </Stack>
);
