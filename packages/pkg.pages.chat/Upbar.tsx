import { Stack, Typography } from '@mui/material';
import { Search, Users, File, Shape } from 'pkg.icons';
import { UpbarT } from './types';

export const Upbar = ({ name, host }: UpbarT) => (
  <Stack
    sx={{ position: 'relative', top: '16px', width: '100%' }}
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

    <Stack direction="row" spacing={0.5}>
      <Stack>
        <Search />
      </Stack>

      <Stack>
        <Shape />
      </Stack>

      <Stack>
        <File />
      </Stack>

      <Stack>
        <Users />
      </Stack>
    </Stack>
  </Stack>
);
