import React, { useState } from 'react';
import { Button, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import { useStore } from 'store/connect';
import { observer } from 'mobx-react';
import { Close } from 'pkg.icons';
import MembersSettingsMorePopper from './MembersSettingsMorePopper';
import Member from '../../Common/Member';

const MembersSettings = observer(() => {
  const rootStore = useStore();

  const {
    mediaSt: {
      setConferenceControlBar,
      conferenceGridData: { users },
      conferenceControlBar: { members },
    },
  } = rootStore;

  const mobile = useMediaQuery('(max-width:375px)');

  const tablet = useMediaQuery('(max-width:700px)');

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const currentMembers = users.map((u) => <Member user={u} />);

  const btnStyle = {
    fontSize: '12px',
    fontWeight: 500,
    color: 'grayscale.40',
    textTransform: 'none ',
  };

  const optionalSx = tablet
    ? {
        top: '52px',
        position: 'fixed',
        height: 'fill-available',
        transform: 'translateY(0)',
        right: members ? 0 : '-100%',
        borderRadius: ' 8px 0 0 8px',
        width: mobile ? '100%' : '50%',
      }
    : {
        top: '50%',
        width: '28%',
        height: '70%',
        position: 'absolute',
        borderRadius: '8px',
        transform: 'translateY(-50%)',
        right: members ? '16px' : '-50%',
      };

  const openMorePopper = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (tablet) {
      setOpenModal(true);
    } else {
      setAnchorEl(e.currentTarget);
    }
  };

  return (
    <Stack
      sx={{
        p: '16px 0 16px 16px',
        color: 'grayscale.0',
        transition: 'right 0.3s linear',
        backgroundColor: 'grayscale.100',
        ...optionalSx,
      }}
    >
      <Stack pr="16px" mb="16px" alignItems="center" direction="row" justifyContent="space-between">
        <Typography fontSize={18} fontWeight={700}>
          Участники
        </Typography>

        {tablet && (
          <IconButton
            onClick={() => {
              setConferenceControlBar('members', false);

              setConferenceControlBar('chat', false);
            }}
            sx={{
              p: '0',
              color: 'grayscale.0',
            }}
          >
            <Close />
          </IconButton>
        )}
      </Stack>

      <Stack pr="16px" sx={{ overflowY: 'scroll' }} flex="1 1 auto">
        {currentMembers}
      </Stack>

      <Stack
        pr="16px"
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent={tablet ? 'space-between' : 'space-around'}
      >
        <Button sx={btnStyle}>Пригласить участника</Button>

        {!tablet && <Button sx={btnStyle}>Отключить микрофон у всех</Button>}

        <IconButton
          className="popper-btn"
          onClick={openMorePopper}
          sx={{
            width: '20px',
            height: '20px',
            borderRadius: '4px',
            color: 'grayscale.0',
            position: 'relative',
            backgroundColor: 'grayscale.80',

            '&::before': {
              content: '"..."',
              top: '-10px',
              left: '5px',
              height: '4px',
              width: '12px',
              letterSpacing: '-11.5px',
              position: 'absolute',
            },

            '&:hover': {
              backgroundColor: 'grayscale.90',
            },
          }}
        />

        <MembersSettingsMorePopper
          anchorEl={anchorEl}
          openModal={openModal}
          onCloseModal={() => setOpenModal(false)}
          onClosePopper={() => setAnchorEl(null)}
        />
      </Stack>
    </Stack>
  );
});

export default MembersSettings;
