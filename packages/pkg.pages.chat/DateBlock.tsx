import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { Badge } from 'pkg.components.badge';
import { Message } from './Message';
import { MessageT, DayMessagesT } from './types';

export const DateBlock = ({ date, messages }: DayMessagesT) => {
  const blockDate = dayjs(date).locale('ru').format('DD MMMM');

  return (
    <Stack sx={{ p: '8px 0', width: '100%' }} spacing={2}>
      <Stack alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
        <Badge bgColor="grayscale.5" size="small">
          {blockDate}
        </Badge>
      </Stack>
      {messages.map((msg: MessageT, index) => (
        // change key
        <Message {...msg} key={`$msg_${msg.id}_${index}`} />
      ))}
    </Stack>
  );
};
