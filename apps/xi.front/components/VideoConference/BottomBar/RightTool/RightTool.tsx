import { IconButton, Stack, Tooltip } from '@mui/material';
import { Endcall } from 'pkg.icons';

const RightTool = () => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    sx={{
      width: '100%',
      height: 48,
    }}
  >
    <Tooltip title="Выйти из конференции">
      <IconButton
        sx={{
          height: '48px',
          width: '48px',
          color: 'petersburg.0',
          bgcolor: 'moscow.80',
          borderRadius: '24px',

          '&:hover': {
            bgcolor: 'moscow.80',
          },
        }}
      >
        <Endcall />
      </IconButton>
    </Tooltip>
  </Stack>
);

export default RightTool;
