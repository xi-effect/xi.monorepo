import React, { useState } from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import { Chat, Microphone, Endcall, Camera, More } from 'pkg.icons';
import { useStore } from 'store/connect';
import { observer } from 'mobx-react';
import ConferenceButton from 'components/VideoConference/Common/ConferenceButton';
import MorePopper from './MorePopper';

const MobileNav = observer(() => {
  const rootStore = useStore();

  const {
    mediaSt: {
      setConferenceControlBar,
      conferenceControlBar: { chat },
    },
  } = rootStore;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const sm = useMediaQuery('(max-width:450px)');

  const btnStyles = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    m: sm ? '0 25px 0 0' : '0 40px 0 0',
  };

  return (
    <Stack
      sx={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <ConferenceButton sx={btnStyles} title="Включить микрофон">
        <Microphone />
      </ConferenceButton>

      <ConferenceButton sx={btnStyles} title="Включить камеру">
        <Camera />
      </ConferenceButton>

      <ConferenceButton
        sx={btnStyles}
        active={chat}
        title="Открыть чат"
        onClick={() => {
          setConferenceControlBar('chat', !chat);

          setConferenceControlBar('members', false);
        }}
      >
        <Chat />
      </ConferenceButton>

      <ConferenceButton
        sx={btnStyles}
        title="Показать еще"
        className="popper-btn"
        onClick={() => setOpenModal(true)}
      >
        <More />
      </ConferenceButton>

      <ConferenceButton
        sx={{
          ...btnStyles,
          bgcolor: 'moscow.80',
          m: 0,

          '&:hover': {
            bgcolor: 'moscow.40',
          },
        }}
        title="Выйти из конференции"
        onClick={() => setConferenceControlBar('endConference', true)}
      >
        <Endcall />
      </ConferenceButton>

      <MorePopper onClose={() => setOpenModal(false)} open={openModal} />
    </Stack>
  );
});

export default MobileNav;
