import React, { useState } from 'react';
import { Box, Fade, IconButton, Modal, Stack, Typography } from '@mui/material';
import { useStore } from 'store/connect';
import { observer } from 'mobx-react';
import { Close } from 'pkg.icons';
import { DeviceUnderTestT } from 'kit/UserProfile/ContentItems/SoundAndVideo';
import VideoDevice from 'kit/UserProfile/ContentItems/SoundAndVideo/VideoDevice';
import SoundDevice from 'kit/UserProfile/ContentItems/SoundAndVideo/SoundDevice';

const Settings = observer(() => {
  const rootStore = useStore();

  const {
    mediaSt: {
      setConferenceControlBar,
      conferenceControlBar: { settings },
    },
  } = rootStore;

  const stateDeviceUnderTest = useState<DeviceUnderTestT>(null);

  return (
    <Modal open={settings} onClose={() => setConferenceControlBar('settings', false)}>
      <Fade in={settings}>
        <Box
          sx={{
            width: '30%',
            p: '25px 16px',
            height: '100%',
            marginLeft: 'auto',
            overflowY: 'scroll',
            borderRadius: '8px 0 0 8px',
            backgroundColor: 'grayscale.100',
          }}
        >
          <Stack>
            <Stack mb="25px" direction="row" alignItems="center" justifyContent="space-between">
              <Typography color="grayscale.0">Настройки</Typography>

              <IconButton
                sx={{ color: 'grayscale.0' }}
                onClick={() => setConferenceControlBar('settings', false)}
              >
                <Close />
              </IconButton>
            </Stack>

            <Box mb="33px">
              <Typography mb="16px" color="grayscale.0">
                Камера
              </Typography>

              <VideoDevice colorScheme="dark" stateDeviceUnderTest={stateDeviceUnderTest} />
            </Box>

            <Box mb="32px">
              <SoundDevice
                colorScheme="dark"
                device="audioinput"
                stateDeviceUnderTest={stateDeviceUnderTest}
              />
            </Box>

            <SoundDevice
              colorScheme="dark"
              device="audiooutput"
              stateDeviceUnderTest={stateDeviceUnderTest}
            />
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
});

export default Settings;
