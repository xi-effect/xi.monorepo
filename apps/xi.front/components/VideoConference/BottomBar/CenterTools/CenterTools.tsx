import { IconButton, Stack, Tooltip } from '@mui/material';
import { Users, Hand, Chat } from 'pkg.icons';

const BottomBar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{
      width: '144px',
      height: '48px',
      bgcolor: 'petersburg.100',
      borderRadius: '24px',
    }}
  >
    <Tooltip title="Список участников">
      <IconButton
        sx={{
          ml: '2px',
          height: '44px',
          width: '44px',
          color: 'petersburg.0',
          bgcolor: 'petersburg.100',
          borderRadius: '22px',
        }}
      >
        <Users />
      </IconButton>
    </Tooltip>
    <Tooltip title="Открыть чат">
      <IconButton
        sx={{
          mr: '2px',
          height: '44px',
          width: '44px',
          color: 'petersburg.0',
          bgcolor: 'petersburg.100',
          borderRadius: '22px',
        }}
      >
        <Chat />
      </IconButton>
    </Tooltip>
    <Tooltip title="Поднять руку">
      <IconButton
        sx={{
          mr: '2px',
          height: '44px',
          width: '44px',
          color: 'petersburg.0',
          bgcolor: 'petersburg.100',
          borderRadius: '22px',
        }}
      >
        <Hand />
      </IconButton>
    </Tooltip>
  </Stack>
);

export default BottomBar;
