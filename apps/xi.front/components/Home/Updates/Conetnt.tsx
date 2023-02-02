import { Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react';

const Content = observer(() => (
  <Stack alignItems="center" justifyContent="center" sx={{ height: '80%', p: '186px' }}>
    <Typography variant="l" sx={{ color: 'secondary.dark' }}>
      Content
    </Typography>
  </Stack>
));

export default Content;
