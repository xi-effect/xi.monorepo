import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { contentSubTitle, contentTitle } from './SoundAndVideo/Styles/styles';
import SoundDevice from './SoundAndVideo/SoundDevice';
import VideoDevice from './SoundAndVideo/VideoDevice';

export type DeviceUnderTestT = 'audiooutput' | 'audioinput' | 'videoinput' | null;

const SoundAndVideo = () => {
  const stateDeviceUnderTest = useState<DeviceUnderTestT>(null);

  return (
    <>
      <Box
        sx={{
          p: '24px',
          width: '100%',
          borderRadius: '8px',
          backgroundColor: 'petersburg.0',
        }}
      >
        <Typography
          sx={{
            mb: '12px',
            ...contentTitle,
          }}
        >
          Звук
        </Typography>

        <Typography
          sx={{
            mb: '32px',
            ...contentSubTitle,
          }}
        >
          Настройте звук перед звонком
        </Typography>

        <Box mb="24px">
          <SoundDevice device="audioinput" stateDeviceUnderTest={stateDeviceUnderTest} />
        </Box>

        <SoundDevice device="audiooutput" stateDeviceUnderTest={stateDeviceUnderTest} />
      </Box>
      <Box
        sx={{
          p: '24px',
          width: '100%',
          borderRadius: '8px',
          backgroundColor: 'petersburg.0',
        }}
      >
        <Typography
          sx={{
            mb: '12px',
            ...contentTitle,
          }}
        >
          Камера
        </Typography>

        <Typography
          sx={{
            mb: '24px',
            ...contentSubTitle,
          }}
        >
          Настройте камеру для видеоконференций
        </Typography>

        <VideoDevice stateDeviceUnderTest={stateDeviceUnderTest} />
      </Box>
    </>
  );
};

export default SoundAndVideo;
