import { Stack, Typography } from '@mui/material';
import { Search, Users, File, Shape } from 'pkg.icons';
import { UpbarProps } from './types';

export const Upbar = ({ name, host, openMenu, menuType }: UpbarProps) => (
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
          bgcolor: menuType === 'pinned' ? 'primary.pale' : '',
        }}
        onClick={() => openMenu('pinned')}
      >
        <Shape sx={{ fontSize: '16px', color: menuType === 'pinned' ? 'primary.dark' : '' }} />
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '32px',
          height: '32px',
          borderRadius: '4px',
          cursor: 'pointer',
          bgcolor: menuType === 'files' ? 'primary.pale' : '',
        }}
        onClick={() => openMenu('files')}
      >
        <File sx={{ fontSize: '16px', color: menuType === 'files' ? 'primary.dark' : '' }} />
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '32px',
          height: '32px',
          borderRadius: '4px',
          cursor: 'pointer',
          bgcolor: menuType === 'participants' ? 'primary.pale' : '',
        }}
        onClick={() => openMenu('participants')}
      >
        <Users
          sx={{ fontSize: '16px', color: menuType === 'participants' ? 'primary.dark' : '' }}
        />
      </Stack>
    </Stack>
  </Stack>
);
