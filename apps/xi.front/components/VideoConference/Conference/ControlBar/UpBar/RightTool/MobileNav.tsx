import React from 'react';
import { Stack } from '@mui/material';
import ConferenceButton from 'components/VideoConference/Common/ConferenceButton';
import { Bluetooth } from 'components/VideoConference/Icons/Bluetooth';
import { Flip } from 'components/VideoConference/Icons/Flip';

const MobileNav = () => {
  const btnStyles = {
    m: 0,
    height: '32px',
    width: '32px',
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        width: '72px',
        height: '32px',
        borderRadius: '32px',
        bgcolor: 'grayscale.100',
      }}
    >
      <ConferenceButton sx={btnStyles} title="Воспроизведение " onClick={() => {}}>
        <Bluetooth />
      </ConferenceButton>

      <ConferenceButton sx={btnStyles} title="Перевернуть камеру" onClick={() => {}}>
        <Flip />
      </ConferenceButton>
    </Stack>
  );
};

export default MobileNav;
