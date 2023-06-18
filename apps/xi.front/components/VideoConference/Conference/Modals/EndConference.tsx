import React from 'react';
import { Button, Fade, Modal, Stack, useMediaQuery } from '@mui/material';
import { useStore } from 'store/connect';
import { observer } from 'mobx-react';

const EndConference = observer(() => {
  const rootStore = useStore();

  const {
    mediaSt: {
      setConferenceControlBar,
      conferenceControlBar: { endConference },
    },
  } = rootStore;

  const sm = useMediaQuery('(max-width:400px)');

  const btnSx = {
    p: '12px 23px',
    fontWeight: 500,
    lineHeight: '22px',
    borderRadius: '8px',
    textTransform: 'none ',
    color: 'petersburg.40',
    border: '1px solid #999',
    fontSize: sm ? '14px' : '18px',
    backgroundColor: 'transparent',
    transition: 'background 0.3s ease, color 0.3s ease, border 0.3s ease,',

    '&:hover': {
      color: 'petersburg.0',
      border: '1px solid #F42D2D',
      backgroundColor: 'moscow.100',
    },
  };

  return (
    <Modal
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: '#898989',
        },
      }}
      open={endConference}
      onClose={() => setConferenceControlBar('endConference', false)}
    >
      <Fade in={endConference}>
        <Stack
          sx={{
            p: '32px',
            top: '50%',
            left: '50%',
            borderRadius: '16px',
            position: 'relative',
            width: sm ? '95%' : '425px',
            backgroundColor: 'petersburg.100',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Button sx={{ ...btnSx, mb: '16px' }}>Завершить конференцию для всех</Button>

          <Button sx={{ ...btnSx, mb: '16px' }}>Покинуть конференцию</Button>

          <Button
            sx={{ ...btnSx, border: '1px solid transparent' }}
            onClick={() => setConferenceControlBar('endConference', false)}
          >
            Отмена
          </Button>
        </Stack>
      </Fade>
    </Modal>
  );
});

export default EndConference;
