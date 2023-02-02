import { observer } from 'mobx-react';
import { Box, Stack, Typography } from '@mui/material';
import { useStore } from 'store/connect';
import Image from 'next/image';
import { UpdateT } from './types';

const months = [
  'января',
  'февраля',
  'марта',
  'апрела',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const formatDate = (date: Date): string => {
  const day = date.getDay();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const Item = observer((data: UpdateT) => {
  const rootStore = useStore();
  const { userSt } = rootStore;
  const { user } = userSt;
  console.log(user.avatar);

  const Content = data.content;

  return (
    <Stack sx={{ bgcolor: 'grayscale.0', borderRadius: '16px', p: '24px' }} spacing={2}>
      <Stack spacing={0.5}>
        <Typography variant="h4">{data.title}</Typography>
        <Typography sx={{ color: 'grayscale.80', fontSize: '18px', lineHeight: '24px' }}>
          {data.description}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box sx={{ position: 'relative', width: '32px', height: '32px', borderRadius: '50%' }}>
            <Image
              src={`https://xieffect.ru:5000/files/${user.avatar?.filename}`}
              fill
              alt="user avatar"
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Typography variant="m">{user.username}</Typography>
        </Stack>
        <Typography variant="m">{formatDate(data.date)}</Typography>
      </Stack>
      <Stack sx={{ borderRadius: '16px' }}>
        <Content />
      </Stack>
    </Stack>
  );
});

export default Item;
