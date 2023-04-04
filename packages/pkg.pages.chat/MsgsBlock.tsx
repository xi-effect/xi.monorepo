import { Stack, Typography } from '@mui/material';
import { ChatBodyT, MsgT } from './types';
import { Msg } from './Msg';

export const MsgsBlock = ({ date, msgs }: ChatBodyT) => (
  <Stack>
    <Typography>{date}</Typography>
    {msgs.map((msg: MsgT) => (
      <Msg {...msg} />
    ))}
  </Stack>
);
