/* eslint-disable jsx-a11y/media-has-caption */
import React, { LegacyRef, useEffect, useState } from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import { useStore } from 'store/connect';
import { observer } from 'mobx-react';
import { MediaElement } from 'store/media/mediaSt';
import DeviceSettings from '../Common/DeviceSettings';
import DevicesController from '../Common/DevicesController';

type VideoPreviewT = {
  elementRef: React.MutableRefObject<MediaElement | null>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

const VideoPreview = observer((props) => {
  const { elementRef, setShowSettings }: VideoPreviewT = props;

  const rootStore = useStore();

  const {
    mediaSt: {
      startStream,
      mediaInfo: { error, stream },
    },
  } = rootStore;

  const [toggleCamera, setToggleCamera] = useState<boolean>(false);

  const [toggleMicro, setToggleMicro] = useState<boolean>(true);

  const dl = useMediaQuery('(min-width:1200px)');
  const toggleCameraHandler = () => {
    setToggleCamera((c) => {
      startStream({ enableAudio: toggleMicro, enableVideo: !c });

      return !c;
    });
  };

  const toggleMicroHandler = () => {
    setToggleMicro((m) => {
      startStream({ enableAudio: !m, enableVideo: toggleCamera });

      return !m;
    });
  };

  useEffect(() => {
    const mediaElement = elementRef.current;

    if (error) {
      console.error(error);

      setToggleCamera(false);

      return;
    }

    if (mediaElement) {
      mediaElement.volume = 0.1;
      mediaElement.srcObject = stream;
    }
  }, [stream, error]);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        m: '16px',
        borderRadius: '8px',
        minHeight: '300px',
        position: 'relative',
        border: '10px solid #333333',
        backgroundColor: 'grayscale.90',
        width: dl ? '50%' : 'fill-available',
        height: dl ? 'auto' : '100%',
      }}
    >
      {toggleCamera ? (
        <video
          autoPlay
          ref={elementRef as LegacyRef<HTMLVideoElement>}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Typography textAlign="center" fontWeight={500} fontSize="24px" color="grayscale.10">
          {error ? 'Проверьте ваши устройства' : 'Камера выключена'}
        </Typography>
      )}

      <Stack
        p="20px"
        left="0"
        bottom="0"
        width="100%"
        direction="row"
        position="absolute"
        justifyContent="space-between"
      >
        <DevicesController
          toggleMicro={toggleMicro}
          toggleCamera={toggleCamera}
          toggleMicroHandler={toggleMicroHandler}
          toggleCameraHandler={toggleCameraHandler}
        />

        <DeviceSettings elementRef={elementRef} setShowSettings={setShowSettings} />
      </Stack>
    </Stack>
  );
});

export default VideoPreview;
