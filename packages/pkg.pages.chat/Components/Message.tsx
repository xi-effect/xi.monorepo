import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { File } from 'pkg.components.file';
import Image from 'next/image';
import { MessageT } from '../types';

const getUserInitials = (username: string) => {
  const names = username.split(' ');
  const initials = names.map((name) => name[0]);
  return initials.join('');
};

export const Message = ({ text, type, createdTime, author, file }: MessageT) => {
  const msgDate = dayjs(createdTime).locale('ru').format('DD.MM.YYYY HH:mm');

  return (
    <Stack direction="row" alignItems="flex-start" spacing={1}>
      {author.avatar && (
        <Image
          src={author.avatar.filename}
          alt="user avatar"
          style={{
            minWidth: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'warning.main',
          }}
        />
      )}
      {!author.avatar && (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ minWidth: '48px', height: '48px', borderRadius: '50%', bgcolor: 'warning.pale' }}
        >
          <Typography variant="m" sx={{ textTransform: 'uppercase', color: 'warning.main' }}>
            {getUserInitials(author.username)}
          </Typography>
        </Stack>
      )}
      <Stack spacing={0.5} sx={{ width: '100%', maxWidth: '600px' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="m">{author.username}</Typography>
          <Typography variant="s" sx={{ fontWeight: 400, color: 'grayscale.40' }}>
            {msgDate}
          </Typography>
        </Stack>
        {type === 'text' && text && <Typography>{text}</Typography>}
        {type === 'file' && file && <File {...file} hideCloseIcon style={{ maxWidth: '256px' }} />}
      </Stack>
    </Stack>
  );
};
