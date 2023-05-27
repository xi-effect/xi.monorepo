/* eslint-disable jsx-a11y/media-has-caption */
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Box, Checkbox, FormControlLabel, IconButton, Stack, Typography } from '@mui/material';
import { Close, Check } from '@mui/icons-material';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import DeviceMenu from './DeviceMenu';
import { DeviceUnderTestT } from '../SoundAndVideo';
import Btn from './Btn';

type VideoDeviceT = {
  colorScheme?: 'light' | 'dark';
  stateDeviceUnderTest: [DeviceUnderTestT, Dispatch<SetStateAction<DeviceUnderTestT>>];
};

const VideoDevice = observer((props) => {
  const {
    colorScheme = 'light',
    stateDeviceUnderTest: [deviceUnderTest, setDeviceUnderTest],
  }: VideoDeviceT = props;

  const rootStore = useStore();
  const {
    mediaSt: {
      stopStream,
      startStream,
      mediaInfo: { devices, error, stream },
    },
  } = rootStore;

  const elementRef = useRef<HTMLVideoElement | null>(null);

  const mediaElement = elementRef.current;

  const [showStream, setShowStream] = useState<boolean>(false);

  const [mirrorVideo, setMirrorVideo] = useState<boolean>(true);

  const playMediaDevice = () => {
    setShowStream(true);

    setDeviceUnderTest('videoinput');

    startStream({ enableVideo: true });
  };

  const stopMediaDevice = () => {
    stopStream();

    setShowStream(false);
  };

  const deviceControl = async (id: string) => {
    await startStream({ videoId: id });
  };

  useEffect(() => {
    if (error) {
      console.error(error);
      return;
    }

    if (mediaElement && deviceUnderTest === 'videoinput') {
      mediaElement.volume = 0.1;
      mediaElement.srcObject = stream;
    }

    if (error || deviceUnderTest !== 'videoinput') setShowStream(false);
  }, [stream, error]);

  return (
    <Stack>
      <Stack
        sx={{
          width: '100%',
          borderRadius: '8px',
          position: 'relative',
          backgroundColor: '#E6E6E6',
          mb: colorScheme === 'light' ? '10px' : '16px',
          height:
            colorScheme === 'light' ? '300px' : (((window.innerWidth / 100) * 30 - 32) / 16) * 9,
        }}
        alignItems="center"
        justifyContent="center"
      >
        {!showStream ? <Btn onClick={playMediaDevice}>Проверить</Btn> : ''}

        <video
          autoPlay
          ref={elementRef}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            display: showStream ? 'block' : 'none',
            transform: mirrorVideo ? 'scale(-1, 1)' : 'scale(1, 1)',
          }}
        />

        {showStream ? (
          <IconButton
            onClick={stopMediaDevice}
            sx={{
              position: 'absolute',
              right: '10px',
              top: '10px',
            }}
          >
            <Close />
          </IconButton>
        ) : (
          ''
        )}
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        order={colorScheme === 'light' ? 1 : 2}
        m={colorScheme === 'light' ? '0 0 26px 0' : '16px 0 0 0'}
      >
        <FormControlLabel
          sx={{
            m: 0,
            '& .MuiButtonBase-root': {
              mr: '8px',
              p: 0,
            },
          }}
          label={
            <Typography
              sx={
                colorScheme === 'light'
                  ? {
                      fontWeight: 400,
                      fontSize: '12px',
                      color: 'grayscale.100',
                    }
                  : {
                      fontWeight: 500,
                      fontSize: '14px',
                      color: 'grayscale.0',
                    }
              }
            >
              Отразить зеркально
            </Typography>
          }
          control={
            <Checkbox
              defaultChecked
              onChange={(e) => setMirrorVideo(e.target.checked)}
              icon={
                <Box
                  sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '3px',
                    border: '1px solid #E6E6E6',
                  }}
                />
              }
              checkedIcon={
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '3px',
                    background: colorScheme === 'light' ? 'transparent' : '#B4BDFF',
                    border: `1px solid  ${colorScheme === 'light' ? '#E6E6E6' : '#B4BDFF'}`,
                  }}
                >
                  <Check
                    sx={{
                      width: '17px',
                      height: '17px',
                    }}
                  />
                </Stack>
              }
            />
          }
        />
      </Stack>

      <Stack order={colorScheme === 'light' ? 2 : 1}>
        <Typography
          sx={{
            mb: '8px',
            fontWeight: 500,
            fontSize: '14px',
            color: colorScheme === 'light' ? 'grayscale.100' : 'grayscale.0',
          }}
        >
          Камера
        </Typography>

        <DeviceMenu
          device="videoinput"
          colorScheme={colorScheme}
          deviceControl={deviceControl}
          devices={devices.filter((d) => d.kind === 'videoinput')}
        />
      </Stack>
    </Stack>
  );
});

export default VideoDevice;
