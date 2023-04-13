import { Stack } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import { Upbar } from './Upbar';
import { DateBlock } from './DateBlock';
import { ChatProps } from './types';

export const Chat = ({ upbar, body }: ChatProps) => (
  <Stack
    direction="column"
    spacing={3}
    justifyContent="flex-end"
    sx={{ bgcolor: 'grayscale.0', height: '100%', overflow: 'auto', borderRadius: '8px' }}
  >
    <Upbar {...upbar} />
    {body.map((data) => (
      <DateBlock {...data} />
    ))}

    <Input />
  </Stack>
);
