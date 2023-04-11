import { IconButton, Stack, Tooltip } from '@mui/material';
import { Microphone, Camera, Screenshare } from 'pkg.icons';

const LeftTools = () => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    sx={{
      width: '100%',
      height: 48,
    }}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: '96px',
        height: '48px',
        bgcolor: 'petersburg.100',
        borderRadius: '24px',
      }}
    >
      <Tooltip title="Включить микрофон">
        <IconButton
          sx={{
            ml: '2px',
            height: '44px',
            width: '44px',
            color: 'petersburg.0',
            bgcolor: 'petersburg.100',
            border: '2px solid #39EF84',
            borderRadius: '22px',
          }}
        >
          <Microphone />
        </IconButton>
      </Tooltip>
      <Tooltip title="Включить камеру">
        <IconButton
          sx={{
            mr: '2px',
            height: '44px',
            width: '44px',
            color: 'petersburg.0',
            bgcolor: 'petersburg.100',
            border: '2px solid #39EF84',
            borderRadius: '22px',
          }}
        >
          <Camera />
        </IconButton>
      </Tooltip>
    </Stack>
    <Tooltip title="Демонстрация экрана">
      <IconButton
        sx={{
          ml: '32px',
          height: '48px',
          width: '48px',
          color: 'petersburg.0',
          bgcolor: 'petersburg.100',
          borderRadius: '24px',

          '&:hover': {
            bgcolor: 'petersburg.100',
          },
        }}
      >
        <Screenshare />
      </IconButton>
    </Tooltip>
  </Stack>
);

export default LeftTools;
