import { Stack } from '@mui/material';
import { MsgT } from './types';

export const Msg = ({ body }: MsgT) => {
  const { text } = body;

  return <Stack>{text}</Stack>;
};
