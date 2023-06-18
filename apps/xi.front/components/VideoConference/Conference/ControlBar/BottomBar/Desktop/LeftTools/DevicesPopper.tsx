/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react';
import PopperContainer, {
  PopperContainerT,
} from 'components/VideoConference/Common/PopperContainer';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import { Stack, Typography } from '@mui/material';
import DevicePopperList from './DevicePopperList';

const DevicesPopper: React.FC<PopperContainerT> = observer((props) => {
  const { anchorEl, closeMenu, open } = props;

  const rootStore = useStore();
  const {
    mediaSt: {
      mediaInfo: { error, stream },
    },
  } = rootStore;

  const elementRef = useRef<HTMLVideoElement | null>(null);

  const mediaElement = elementRef.current;

  useEffect(() => {
    if (error) {
      console.error(error);
      return;
    }

    if (mediaElement) {
      mediaElement.volume = 0.1;
      mediaElement.srcObject = stream;
    }
  }, [stream, error]);

  return (
    <PopperContainer
      sx={{
        p: '16px',
        width: '350px',
        borderRadius: '20px',
        color: 'petersburg.0',
        backgroundColor: 'petersburg.100',
      }}
      open={open}
      placement="top"
      anchorEl={anchorEl}
      closeMenu={closeMenu}
      className="devices-popper"
    >
      <Stack
        sx={{
          mb: '17px',
          height: '165px',
          alignItems: 'center',
          borderRadius: '12px',
          justifyContent: 'center',
          backgroundColor: 'petersburg.90',
        }}
      >
        {error ? (
          <Typography>Проверте ваше устройство</Typography>
        ) : (
          <video autoPlay ref={elementRef} style={{ width: '100%', height: '100%' }} />
        )}
      </Stack>

      <DevicePopperList device="videoinput" />

      <DevicePopperList device="audioinput" />

      <DevicePopperList device="audiooutput" />
    </PopperContainer>
  );
});

export default DevicesPopper;
