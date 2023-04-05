import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { MsgT } from './types';

export const Msg = ({ body, date, author }: MsgT) => {
  const { text } = body;
  const msgDate = dayjs(date).locale('ru').format('DD.MM.YYYY HH:mm');

  return (
    <Stack spacing={0.5}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="m">{author}</Typography>
        <Typography variant="s" sx={{ fontWeight: 400, color: 'grayscale.40' }}>
          {msgDate}
        </Typography>
      </Stack>
      <Typography>{text}</Typography>
    </Stack>
  );
};
