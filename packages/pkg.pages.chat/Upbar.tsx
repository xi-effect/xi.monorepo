import { Stack, Typography } from '@mui/material';
import { UpbarT } from './types';

export const Upbar = ({ name, host }: UpbarT) => (
  <Stack sx={{ position: 'fixed', top: '16px' }} justifyContent="space-between">
    <Stack direction="row" alignItems="flex-end" spacing={1}>
      <Typography variant="xl" sx={{ fontWeight: 600 }}>
        {name}
      </Typography>
      <Typography variant="m" sx={{ color: 'grayscale.40', fontWeight: 400, lineHeight: '26px' }}>
        {host}
      </Typography>
    </Stack>
  </Stack>
);
