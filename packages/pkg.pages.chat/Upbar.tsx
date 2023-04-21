import { Stack, Typography } from '@mui/material';
import { Search, Users, File, Shape } from 'pkg.icons';
import { ChatInfoT } from './types';

export const Upbar = ({ name, host }: ChatInfoT) => (
  <Stack
    sx={{ position: 'sticky', top: 0, width: '100%' }}
    justifyContent="space-between"
    direction="row"
  >
    <Stack direction="row" alignItems="flex-end" spacing={1}>
      <Typography variant="xl" sx={{ fontWeight: 600 }}>
        {name}
      </Typography>
      <Typography variant="m" sx={{ color: 'grayscale.40', fontWeight: 400, lineHeight: '26px' }}>
        {host}
      </Typography>
    </Stack>

    <Stack direction="row" spacing={2} sx={{ m: '6px 8px' }}>
      <Stack sx={{ width: '20px' }}>
        <Search sx={{ fontSize: '16px' }} />
      </Stack>
      <Stack sx={{ width: '20px' }}>
        <Shape sx={{ fontSize: '16px' }} />
      </Stack>
      <Stack sx={{ width: '20px' }}>
        <File sx={{ fontSize: '16px' }} />
      </Stack>
      <Stack sx={{ width: '20px' }}>
        <Users sx={{ fontSize: '16px' }} />
      </Stack>
    </Stack>
  </Stack>
);
