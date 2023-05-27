import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { Settings } from 'pkg.icons';
import { VolumeUp } from '@mui/icons-material';
import { MediaElement } from 'store/media/mediaSt';
import { useStore } from 'store/connect';
import { observer } from 'mobx-react';

type DeviceSettingsT = {
  elementRef: React.MutableRefObject<MediaElement | null>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeviceSettings = observer((props) => {
  const { setShowSettings, elementRef }: DeviceSettingsT = props;

  const rootStore = useStore();

  const {
    mediaSt: { setUserSettings },
  } = rootStore;

  const [volume, setVolume] = useState<boolean>(true);

  const md = useMediaQuery('(min-width:900px)');

  const styles = {
    ml: '8px',
    height: '40px',
    width: '40px',
    color: 'grayscale.0',
    bgcolor: 'grayscale.100',
    borderRadius: '20px',
  };

  useEffect(() => {
    const mediaElement = elementRef.current;

    if (mediaElement) {
      if (volume) {
        mediaElement.volume = 0.1;

        setUserSettings('audiooutput', 'default');
      } else {
        mediaElement.volume = 0;
        setUserSettings('audiooutput', 'off');
      }
    }
  }, [volume]);

  return md ? (
    <Tooltip title="Настройки" placement="bottom">
      <IconButton onClick={() => setShowSettings((s) => !s)} sx={styles}>
        <Settings />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title={`${volume ? 'Выключить' : 'Включить'} звук`} placement="bottom">
      <IconButton
        onClick={() => setVolume((v) => !v)}
        sx={{
          ...styles,
          border: volume ? '2px solid #39EF84' : '2px solid #000',
        }}
      >
        <VolumeUp />
      </IconButton>
    </Tooltip>
  );
});

export default DeviceSettings;
