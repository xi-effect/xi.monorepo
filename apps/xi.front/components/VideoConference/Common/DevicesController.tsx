import React from 'react';
import { IconButton, Stack, Tooltip, useMediaQuery } from '@mui/material';
import { Microphone, Camera } from 'pkg.icons';

type DevicesControllerT = {
  toggleCamera?: boolean;
  toggleMicro?: boolean;
  toggleCameraHandler: () => void;
  toggleMicroHandler: () => void;
};

const DevicesController: React.FC<DevicesControllerT> = (props) => {
  const { toggleCameraHandler, toggleMicroHandler, toggleCamera, toggleMicro } = props;

  const md = useMediaQuery('(min-width:900px)');

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: '48px',
        borderRadius: '24px',
        width: md ? '96px' : 'calc(50% + 22px)',
        bgcolor: md ? 'grayscale.100' : 'transparent',
      }}
    >
      <Tooltip title={`${toggleMicro ? 'Выключить' : 'Включить'} микрофон`}>
        <IconButton
          onClick={toggleMicroHandler}
          sx={{
            ml: '2px',
            height: '44px',
            width: '44px',
            color: 'grayscale.0',
            bgcolor: 'grayscale.100',
            borderRadius: '22px',
            transition: 'border 0.5s ease',
            border: toggleMicro ? '2px solid #39EF84' : '2px solid #000',
          }}
        >
          <Microphone />
        </IconButton>
      </Tooltip>
      <Tooltip title={`${toggleCamera ? 'Выключить' : 'Включить'} камеру`}>
        <IconButton
          onClick={toggleCameraHandler}
          sx={{
            mr: '2px',
            height: '44px',
            width: '44px',
            borderRadius: '22px',
            color: 'grayscale.0',
            bgcolor: 'grayscale.100',
            transition: 'border 0.5s ease',
            border: toggleCamera ? '2px solid #39EF84' : '2px solid #000',
          }}
        >
          <Camera />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default DevicesController;
