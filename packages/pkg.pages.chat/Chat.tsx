import { Stack } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import { DateBlock } from './DateBlock';
import { ChatProps } from './types';

export const Chat = ({ name, body }: ChatProps) => (
  <Stack
    direction="column"
    spacing={3}
    justifyContent="flex-end"
    sx={{ bgcolor: 'grayscale.0', height: '100%', overflow: 'auto', borderRadius: '8px' }}
  >
    <Stack sx={{ position: 'fixed', top: '16px' }}>{name}</Stack>
    {body.map((data) => (
      <DateBlock {...data} />
    ))}

    <Input />
  </Stack>
);
