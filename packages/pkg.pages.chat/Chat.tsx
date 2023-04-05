import { Stack } from '@mui/material';
import { MsgsBlock } from './MsgsBlock';
import { ChatProps } from './types';

export const Chat = ({ name, body }: ChatProps) => (
  <Stack direction="column" spacing={3} justifyContent="flex-end" sx={{ bgcolor: 'grayscale.0' }}>
    <Stack sx={{ position: 'fixed', top: '16px' }}>{name}</Stack>
    {body.map((data) => (
      <MsgsBlock {...data} />
    ))}
  </Stack>
);
