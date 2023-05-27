import React from 'react';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { DeviceUnderTestT } from 'kit/UserProfile/ContentItems/SoundAndVideo';
import { ArrowList } from 'components/VideoConference/Icons/ArrowList';
import { Camera } from 'components/VideoConference/Icons/Camera';
import { Microphone } from 'components/VideoConference/Icons/Microphone';
import { Speaker } from 'components/VideoConference/Icons/Speaker';
import { useStore } from 'store/connect';
import { observer } from 'mobx-react';

type DevicePopperListT = {
  device: DeviceUnderTestT;
};

const DevicePopperList: React.FC<DevicePopperListT> = observer((props) => {
  const { device } = props;

  const rootStore = useStore();
  const {
    mediaSt: {
      mediaInfo: { devices },
    },
  } = rootStore;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const currentDevice = devices.filter((d) => d.kind === device);

  return (
    <>
      <Button
        sx={{
          p: '6px',
          width: '100%',
          fontWeight: 500,
          fontSize: '12px',
          alignItems: 'center',
          textTransform: 'none',
          justifyContent: 'flex-start',
          backgroundColor: 'transparent',
          pointerEvents: !currentDevice.length ? 'none' : 'default',
          color: !currentDevice.length ? 'grayscale.80' : 'grayscale.0',
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {device === 'videoinput' && <Camera />}

        {device === 'audioinput' && <Microphone />}

        {device === 'audiooutput' && <Speaker />}

        <Box component="span" display="inline-block" m="0 auto 0 14px">
          {device === 'videoinput' && 'Встроенная камера'}

          {device === 'audioinput' && 'Встроенный микрофон'}

          {device === 'audiooutput' && 'Встроенные динамики'}
        </Box>

        <ArrowList
          transition="transform 0.3s ease"
          transform={anchorEl ? 'rotate(180deg)' : 'rotate(0)'}
        />
      </Button>

      <Menu
        id="devices-menu"
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },

          '& .MuiPaper-root': {
            width: '318px',
            backgroundColor: 'grayscale.80',
          },

          '& .MuiButtonBase-root': {
            p: '6px 12px',
          },
        }}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        {currentDevice.map((d) => (
          <MenuItem onClick={() => setAnchorEl(null)}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '13px',
                overflow: 'hidden',
                color: 'grayscale.0',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                maxWidth: 'calc(100% - 10px)',
              }}
            >
              {d.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
});

export default DevicePopperList;
