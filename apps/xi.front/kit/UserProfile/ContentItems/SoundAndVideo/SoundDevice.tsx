/* eslint-disable jsx-a11y/media-has-caption */
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { MediaElement } from 'store/media/mediaSt';
import { useStore } from 'store/connect';
import { SliderS } from './Styles/styles';
import MinVolume from './Icons/MinVolume';
import MaxVolume from './Icons/MaxVolume';
import DeviceMenu from './DeviceMenu';
import SoundMeter from './SoundMeter';
import { DeviceUnderTestT } from '../SoundAndVideo';
import Btn from './Btn';

type DeviceVolumeT = {
  volume: number | null;
  defaultVolume: number;
};

type SoundDeviceT = {
  colorScheme: 'light' | 'dark';
  device: 'audiooutput' | 'audioinput';
  stateDeviceUnderTest: [DeviceUnderTestT, Dispatch<SetStateAction<DeviceUnderTestT>>];
};

const SoundDevice = observer((props) => {
  const {
    device,
    colorScheme = 'light',
    stateDeviceUnderTest: [deviceUnderTest, setDeviceUnderTest],
  }: SoundDeviceT = props;

  const rootStore = useStore();
  const {
    mediaSt: {
      startStream,
      stopStream,
      mediaInfo: { devices, stream, error },
    },
  } = rootStore;

  const elementRef = useRef<HTMLAudioElement | null>(null);
  const mediaElement = elementRef.current;

  const [mediaStream, setMediaStream] = useState<'play' | 'stop'>('stop');
  const [deviceVolume, setDeviceVolume] = useState<DeviceVolumeT>({
    defaultVolume: 0.1,
    volume: null,
  });

  const changeDevice = async (id: string) => {
    const element = mediaElement as MediaElement | null;

    if (device === 'audiooutput') {
      element?.setSinkId(id);
    } else {
      await startStream({ audioId: id });
    }
  };

  const onSliderChange = (e: Event, volume: number) => {
    setDeviceVolume((v) => ({ ...v, volume }));

    if (mediaElement) mediaElement.volume = volume;
  };

  const deviceControl = (id: string) => {
    changeDevice(id);

    if (mediaStream === 'stop') setMediaStream('play');
  };

  const playMediaDevice = () => {
    setDeviceUnderTest(device);

    setMediaStream('play');

    startStream({});
  };

  const stopMediaDevice = () => {
    stopStream();
    setMediaStream('stop');
  };

  const checkButton =
    mediaStream === 'stop' ? (
      <Btn colorScheme={colorScheme} onClick={playMediaDevice}>
        Проверить
      </Btn>
    ) : (
      <Btn colorScheme={colorScheme} sx={{ backgroundColor: '#ff6a6a' }} onClick={stopMediaDevice}>
        Прекратить
      </Btn>
    );

  useEffect(() => {
    if (error) {
      console.error(error);
      return;
    }

    if (mediaElement) {
      if (deviceVolume.volume === null) mediaElement.volume = deviceVolume.defaultVolume;

      if (device === deviceUnderTest) mediaElement.srcObject = stream;
    }

    if (error || device !== deviceUnderTest) setMediaStream('stop');
  }, [stream, error]);

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '14px',
          mb: colorScheme === 'light' ? '8px' : '16px',
          color: colorScheme === 'light' ? 'grayscale.100' : 'grayscale.0',
        }}
      >
        {device === 'audioinput' ? 'Микрофон' : 'Динамик'}
      </Typography>

      <Stack mb={colorScheme === 'light' ? '8px' : '16px'} direction="row" alignItems="center">
        <DeviceMenu
          device={device}
          colorScheme={colorScheme}
          deviceControl={deviceControl}
          devices={devices.filter((d) => d.kind === device)}
        />

        {colorScheme === 'light' && checkButton}
      </Stack>

      <Stack direction="row" alignItems="center">
        {colorScheme === 'dark' && checkButton}

        <SoundMeter colorScheme={colorScheme} animate={device === deviceUnderTest} />
      </Stack>

      <Stack mt="10px" direction="row" alignItems="center">
        <Typography
          sx={{
            mr: '18px',
            width: '200px',
            fontWeight: 400,
            fontSize: '14px',
            color: colorScheme === 'light' ? 'grayscale.100' : 'grayscale.0',
          }}
        >
          Громкость
        </Typography>

        <Stack sx={{ width: '100%' }} direction="row" alignItems="center">
          <MinVolume fill={colorScheme === 'light' ? '#000' : '#fff'} />

          <Slider
            max={1}
            min={0}
            step={0.05}
            sx={SliderS}
            onChange={onSliderChange}
            value={deviceVolume.volume === null ? deviceVolume.defaultVolume : deviceVolume.volume}
          />

          <MaxVolume fill={colorScheme === 'light' ? '#000' : '#fff'} />
        </Stack>
      </Stack>

      <audio autoPlay style={{ display: 'none' }} ref={elementRef} />
    </Box>
  );
});

export default SoundDevice;
