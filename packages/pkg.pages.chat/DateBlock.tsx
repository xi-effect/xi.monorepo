import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { Badge } from 'pkg.components.badge';
import { Message } from './Message';
import { ChatBodyT, MsgT } from './types';

export const DateBlock = ({ date, msgs }: ChatBodyT) => {
  const blockDate = dayjs(date).locale('ru').format('DD MMMM');

  return (
    <Stack sx={{ p: '8px' }} spacing={2}>
      <Stack alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
        <Badge bgColor="grayscale.5" size="small">
          {blockDate}
        </Badge>
      </Stack>
      {msgs.map((msg: MsgT) => (
        <Message {...msg} />
      ))}
    </Stack>
  );
};
