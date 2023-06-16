import React, { useState } from 'react';
import { Backdrop, Box, Button, Fade, Modal, useMediaQuery } from '@mui/material';
import { Users, ShareScreen } from 'pkg.icons';
import { useStore } from 'store/connect';
import { observer } from 'mobx-react';

type MoreModalT = {
  open: boolean;
  onClose: () => void;
};

const MoreModal: React.FC<MoreModalT> = observer((props) => {
  const { onClose, open } = props;

  const rootStore = useStore();

  const {
    mediaSt: { setConferenceControlBar },
  } = rootStore;

  const [raiseHand, setRaiseHand] = useState<boolean>(false);

  const mobile = useMediaQuery('(max-width:375px)');

  const btnStyles = {
    width: '100%',
    height: '44px',
    p: '12px 16px',
    fontWeight: 500,
    fontSize: '16px',
    color: 'grayscale.0',
    alignItems: 'center',
    textTransform: 'none',
    justifyContent: 'space-between',
    backgroundColor: 'grayscale.90',
    transition: 'background 0.3s ease',
    borderRadius: '16px 16px 0px 0px',

    '&:hover': {
      backgroundColor: 'grayscale.80',
    },
  };

  const differentBtnStyles = {
    ...btnStyles,
    borderRadius: '8px',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: 'grayscale.90',
    },
  };

  const memberHandler = () => {
    setConferenceControlBar('members', true);

    setConferenceControlBar('chat', false);

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'transparent',
          },
          timeout: 300,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            p: '16px',
            bottom: 0,
            left: '50%',
            position: 'absolute',
            bgcolor: 'grayscale.100',
            transform: 'translateX(-50%)',
            width: mobile ? '100%' : '70%',
            borderRadius: '16px 16px 0px 0px',
          }}
        >
          <Button
            sx={{
              ...btnStyles,
              borderBottom: '1px solid #333',
            }}
            onClick={memberHandler}
          >
            Участники
            <Users />
          </Button>

          <Button
            sx={{
              ...btnStyles,
              mb: '16px',
              borderRadius: '0px 0px 16px 16px',
            }}
          >
            Показать экран
            <ShareScreen />
          </Button>

          <Button
            onClick={() => setRaiseHand((h) => !h)}
            sx={{
              ...differentBtnStyles,
              mb: '16px',
              backgroundColor: raiseHand ? 'grayscale.90' : 'transparent',
            }}
          >
            ✋ Поднять руку
          </Button>

          <Button sx={differentBtnStyles}>Отмена</Button>
        </Box>
      </Fade>
    </Modal>
  );
});

export default MoreModal;
