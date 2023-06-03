import { Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react';

const Content = observer(() => (
  <Stack
    alignItems="center"
    justifyContent="center"
    sx={{ height: '80%', p: '186px 0', bgcolor: 'brand.0', borderRadius: '16px' }}
  >
    <Typography variant="l" sx={{ color: 'vladivostok.100' }}>
      Content
    </Typography>
  </Stack>
));

export default Content;
