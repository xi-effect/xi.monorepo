import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Microphone, Camera, ScreenShare } from 'pkg.icons';
import ConferenceButton from 'components/VideoConference/Common/ConferenceButton';
import ScreenSharingPoppers from './ScreenSharingPoppers';
import DevicesPopper from './DevicesPopper';

const LeftTools = () => {
  const [hover, setHover] = useState<boolean>(false);

  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

  const [devicesAnchorEl, setDevicesAnchorEl] = useState<null | HTMLElement>(null);

  const [ScreenSharingAnchorEl, setScreenSharingAnchorEl] = useState<null | HTMLElement>(null);

  const hoverHandler = () => {
    clearTimeout(timer);

    if (devicesAnchorEl === null) return;

    setTimer(setTimeout(() => setHover(true), 1000));
  };

  const mouseoverListener = (e) => {
    const target = e.target as HTMLElement;

    if (target.closest('.devices-popper') || target.closest('#devices-menu')) {
      setHover(true);
    }
  };

  const mouseoutListener = (e) => {
    const target = e.target as HTMLElement;

    if (
      !target.closest('.devices-popper-btn') ||
      !target.closest('.devices-popper') ||
      !target.closest('#devices-menu')
    ) {
      setHover(false);
      setDevicesAnchorEl(null);
    }
  };

  useEffect(hoverHandler, [devicesAnchorEl]);

  useEffect(() => {
    document.body.addEventListener('mouseover', mouseoverListener);

    document.body.addEventListener('mouseout', mouseoutListener);

    return () => {
      document.body.removeEventListener('mouseover', mouseoverListener);

      document.body.removeEventListener('mouseout', mouseoutListener);
    };
  });

  return (
    <Stack sx={{ width: '100%' }} direction="row" justifyContent="flex-start" alignItems="center">
      <Stack
        sx={{
          width: '96px',
          height: '48px',
          borderRadius: '24px',
          bgcolor: 'petersburg.100',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ConferenceButton
          sx={{
            ml: '4px',
            borderRadius: '24px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'ekaterinburg.100',
          }}
          title="Включить микрофон"
          active
          className="devices-popper-btn"
          onMouseOver={(e) => setDevicesAnchorEl(e.currentTarget)}
        >
          <Microphone />
        </ConferenceButton>

        <ConferenceButton
          sx={{
            ml: 0,
            mr: '4px',
            borderRadius: '24px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'ekaterinburg.100',
          }}
          active
          title="Включить камеру"
          className="devices-popper-btn"
          onMouseOver={(e) => setDevicesAnchorEl(e.currentTarget)}
        >
          <Camera />
        </ConferenceButton>
      </Stack>

      <ConferenceButton
        sx={{
          ml: '32px',
          width: '48px',
          height: '48px',
          borderRadius: '24px',
        }}
        title="Демонстрация экрана"
        className="popper-btn"
        onClick={(e) => setScreenSharingAnchorEl(e.currentTarget)}
      >
        <ScreenShare />
      </ConferenceButton>

      <DevicesPopper
        open={hover}
        anchorEl={devicesAnchorEl}
        closeMenu={() => setDevicesAnchorEl(null)}
      />

      <ScreenSharingPoppers
        anchorEl={ScreenSharingAnchorEl}
        closeMenu={() => setScreenSharingAnchorEl(null)}
      />
    </Stack>
  );
};

export default LeftTools;
