import { IconButton, Stack, Tooltip } from '@mui/material';
import { Microphone } from 'pkg.icons.microphone';
import { Camera } from 'pkg.icons.camera';
import { Screenshare } from 'pkg.icons.screenshare';

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
        bgcolor: 'grayscale.100',
        borderRadius: '24px',
      }}
    >
      <Tooltip title="Включить микрофон">
        <IconButton
          sx={{
            ml: '2px',
            height: '44px',
            width: '44px',
            color: 'grayscale.0',
            bgcolor: 'grayscale.100',
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
            color: 'grayscale.0',
            bgcolor: 'grayscale.100',
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
          color: 'grayscale.0',
          bgcolor: 'grayscale.100',
          borderRadius: '24px',

          '&:hover': {
            bgcolor: 'grayscale.100',
          },
        }}
      >
        <Screenshare />
      </IconButton>
    </Tooltip>
  </Stack>
);

export default LeftTools;
