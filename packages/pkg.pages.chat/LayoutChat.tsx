import { Stack } from '@mui/material';
import { Participants, Files, Pinned } from './Menu';
import { LayoutChatProps } from './types';

export const LayoutChat = ({ chosenMenu, MenuWidth = '450px', children }: LayoutChatProps) => (
  <Stack direction="row" sx={{ height: '100vh', bgcolor: 'grayscale.0', width: '100%' }}>
    <Stack sx={{ width: '100%', height: '100%' }}>{children}</Stack>

    {chosenMenu && (
      <Stack sx={{ width: MenuWidth, height: '100%' }}>
        {chosenMenu === 'participants' && <Participants />}
        {chosenMenu === 'files' && <Files />}
        {chosenMenu === 'pinned' && <Pinned />}
      </Stack>
    )}
  </Stack>
);
