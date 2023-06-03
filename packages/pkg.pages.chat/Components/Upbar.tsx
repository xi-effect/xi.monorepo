import { Stack, Typography } from '@mui/material';
import { Search, Users, File, Shape } from 'pkg.icons';
import { UpbarProps } from '../types';

export const Upbar = ({ openMenu, menuType, name, host }: UpbarProps) => (
  <Stack
    sx={{ position: 'sticky', top: 0, width: '100%' }}
    justifyContent="space-between"
    direction="row"
  >
    <Stack direction="row" alignItems="flex-end" spacing={1}>
      <Typography variant="xl" sx={{ fontWeight: 600 }}>
        {name}
      </Typography>
      <Typography variant="m" sx={{ color: 'petersburg.40', fontWeight: 400, lineHeight: '26px' }}>
        {host?.username}
      </Typography>
    </Stack>

    <Stack
      direction="row"
      spacing={0.5}
      sx={{
        m: '6px 8px',
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: '32px', height: '32px', borderRadius: '4px', cursor: 'pointer' }}
      >
        <Search sx={{ fontSize: '16px' }} />
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '32px',
          height: '32px',
          borderRadius: '4px',
          cursor: 'pointer',
          bgcolor: menuType === 'pinned' ? 'brand.0' : '',
        }}
        onClick={() => openMenu('pinned')}
      >
        <Shape sx={{ fontSize: '16px', color: menuType === 'pinned' ? 'brand.80' : '' }} />
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '32px',
          height: '32px',
          borderRadius: '4px',
          cursor: 'pointer',
          bgcolor: menuType === 'files' ? 'brand.0' : '',
        }}
        onClick={() => openMenu('files')}
      >
        <File sx={{ fontSize: '16px', color: menuType === 'files' ? 'brand.80' : '' }} />
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '32px',
          height: '32px',
          borderRadius: '4px',
          cursor: 'pointer',
          bgcolor: menuType === 'participants' ? 'brand.0' : '',
        }}
        onClick={() => openMenu('participants')}
      >
        <Users sx={{ fontSize: '16px', color: menuType === 'participants' ? 'brand.80' : '' }} />
      </Stack>
    </Stack>
  </Stack>
);
