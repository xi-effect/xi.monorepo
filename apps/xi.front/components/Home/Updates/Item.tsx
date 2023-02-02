import { observer } from 'mobx-react';
import { Stack, Typography } from '@mui/material';
import { UpdateT } from './types';

const Item = observer((data: UpdateT) => {
  const Content = data.content;

  return (
    <Stack sx={{ bgcolor: 'grayscale.0', borderRadius: '16px', p: '24px' }} spacing={2}>
      <Stack spacing={0.5}>
        <Typography variant="h4">{data.title}</Typography>
        <Typography sx={{ color: 'grayscale.80', fontSize: '18px', lineHeight: '24px' }}>
          {data.description}
        </Typography>
      </Stack>
      <Stack>user etc...</Stack>
      <Stack sx={{ bgcolor: 'secondary.pale', borderRadius: '16px' }}>
        <Content />
      </Stack>
    </Stack>
  );
});

export default Item;
