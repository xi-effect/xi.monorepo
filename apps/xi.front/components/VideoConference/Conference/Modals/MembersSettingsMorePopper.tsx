import React from 'react';
import { Backdrop, Box, Button, Fade, Modal, Typography, useMediaQuery } from '@mui/material';
import PopperContainer from '../../Common/PopperContainer';
import AccessCheckbox from '../../Common/AccessCheckbox';

type MemberSettingsPopperT = {
  openModal: boolean;
  onClosePopper: () => void;
  onCloseModal: () => void;
  anchorEl: HTMLElement | null;
};

const MembersSettingsMorePopper: React.FC<MemberSettingsPopperT> = (props) => {
  const { onClosePopper, onCloseModal, anchorEl, openModal } = props;

  const tablet = useMediaQuery('(max-width:700px)');

  const memberOptions = (
    <>
      <AccessCheckbox text="Демонстрация экрана" value={1} checked />

      <AccessCheckbox text="Чат" value={2} checked />

      <AccessCheckbox text="Переименовывание себя" value={3} checked />

      <AccessCheckbox text="Включать микрофон" value={4} checked />

      <AccessCheckbox text="Включать видео" value={5} checked sx={{ mb: 0 }} />
    </>
  );

  const tabletModal = (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Fade in={openModal}>
        <Box
          sx={{
            p: '16px',
            bottom: 0,
            left: '50%',
            width: '100%',
            position: 'absolute',
            bgcolor: 'grayscale.100',
            transform: 'translateX(-50%)',
            borderRadius: '16px 16px 0px 0px',
          }}
        >
          <Typography color="grayscale.0" fontWeight={600} fontSize="20px" mb="16px">
            Разрешения участников:
          </Typography>

          <Box
            sx={{
              mb: '16px',
              width: '100%',
              p: '12px 16px',
              borderRadius: '8px',
              color: 'grayscale.0',
              backgroundColor: 'grayscale.80',
            }}
          >
            {memberOptions}
          </Box>

          <Button
            sx={{
              width: '100%',
              height: '44px',
              p: '12px 16px',
              fontWeight: 500,
              fontSize: '16px',
              color: 'grayscale.0',
              alignItems: 'center',
              textTransform: 'none',
              borderRadius: '8px',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              transition: 'background 0.3s ease',

              '&:hover': {
                backgroundColor: 'grayscale.90',
              },
            }}
          >
            Отмена
          </Button>
        </Box>
      </Fade>
    </Modal>
  );

  const desktopPopper = (
    <PopperContainer
      sx={{
        p: '8px 16px',
        width: '240px',
        borderRadius: '8px',
        color: 'grayscale.0',
        backgroundColor: 'grayscale.80',
      }}
      anchorEl={anchorEl}
      closeMenu={onClosePopper}
    >
      <Typography fontWeight={700} fontSize="14px" mb="17px">
        Разрешения участников:
      </Typography>

      {memberOptions}
    </PopperContainer>
  );

  return tablet ? tabletModal : desktopPopper;
};

export default MembersSettingsMorePopper;
