import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { MessageT } from './types';

export const Message = ({ text, type, createdTime, author }: MessageT) => {
  const msgDate = dayjs(createdTime).locale('ru').format('DD.MM.YYYY HH:mm');

  return (
    <Stack spacing={0.5}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="m">{author}</Typography>
        <Typography variant="s" sx={{ fontWeight: 400, color: 'grayscale.40' }}>
          {msgDate}
        </Typography>
      </Stack>
      {type === 'text' && <Typography>{text}</Typography>}
    </Stack>
  );
};
