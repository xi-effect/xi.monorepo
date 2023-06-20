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
      sx={{
        height: '48px',
        borderRadius: '24px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: md ? '96px' : 'calc(50% + 22px)',
        bgcolor: md ? 'petersburg.100' : 'transparent',
      }}
    >
      <Tooltip title={`${toggleMicro ? 'Выключить' : 'Включить'} микрофон`}>
        <IconButton
          onClick={toggleMicroHandler}
          sx={{
            ml: '2px',
            height: '44px',
            width: '44px',
            borderWidth: '2px',
            borderStyle: 'solid',
            color: 'petersburg.0',
            borderRadius: '22px',
            bgcolor: 'petersburg.100',
            transition: 'border 0.5s ease',
            borderColor: toggleMicro ? 'ekaterinburg.100' : 'petersburg.100',
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
            borderWidth: '2px',
            borderStyle: 'solid',
            borderRadius: '22px',
            color: 'petersburg.0',
            bgcolor: 'petersburg.100',
            transition: 'border 0.5s ease',
            borderColor: toggleCamera ? 'ekaterinburg.100' : 'petersburg.100',
          }}
        >
          <Camera />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default DevicesController;
