import { observer } from 'mobx-react';
import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { useStore } from 'store/connect';
import Image from 'next/image';
import dayjs from 'dayjs';
import { UpdateT } from './types';

import { titleSizes, descriptionSizes, infoSizes } from './breakpoints';

const formatDate = (date: Date): string => dayjs(date).locale('ru').format('DD MMMM YYYY');
const Item = observer((data: UpdateT) => {
  const rootStore = useStore();
  const { userSt } = rootStore;
  const { user } = userSt;

  const Content = data.content;

  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(700));
  const mobile375: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(375));

  const getScreenWidth = () => {
    if (mobile375) return 'min375px';
    if (mobile700) return 'min700px';
    return 'min1440px';
  };

  return (
    <Stack sx={{ bgcolor: 'grayscale.0', borderRadius: '16px', p: '24px' }} spacing={2}>
      <Stack spacing={0.5}>
        <Typography sx={{ ...titleSizes[getScreenWidth()], fontWeight: 600 }}>
          {data.title}
        </Typography>
        <Typography
          sx={{
            ...descriptionSizes[getScreenWidth()],
            color: 'grayscale.80',
          }}
        >
          {data.description}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              position: 'relative',
              width: mobile700 ? '24px' : '32px',
              height: mobile700 ? '24px' : '32px',
              borderRadius: '50%',
            }}
          >
            <Image
              src={`https://xieffect.ru:5000/files/${user.avatar?.filename}`}
              fill
              alt="user avatar"
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Typography sx={{ ...infoSizes[getScreenWidth()] }}>{user.username}</Typography>
        </Stack>
        <Typography sx={{ ...infoSizes[getScreenWidth()] }}>{formatDate(data.date)}</Typography>
      </Stack>
      <Stack sx={{ borderRadius: '16px' }}>
        <Content />
      </Stack>
    </Stack>
  );
});

export default Item;
