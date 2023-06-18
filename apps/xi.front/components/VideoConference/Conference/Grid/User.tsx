/* eslint-disable jsx-a11y/media-has-caption */
import { Box, Stack, SxProps, Theme, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { Avatar } from 'pkg.data.avatar';
import { observer } from 'mobx-react';
import { ConferenceUserT } from 'store/media/mediaSt';
import { useStore } from 'store/connect';
import { Microphone } from 'pkg.icons';
import { StateViewT } from '../Conference';

type UserT = {
  sx?: SxProps<Theme>;
  user: ConferenceUserT;
  layoutSx?: (different: boolean) => SxProps<Theme>;
};

const User: React.FC<UserT & StateViewT> = observer((props) => {
  const {
    sx,
    stateView,
    layoutSx,
    user: {
      id,
      name,
      admin,
      stream,
      speaker,
      device: { audioinput },
    },
  } = props;

  const [view] = stateView;

  const rootStore = useStore();

  const {
    mediaSt: { setConferenceSpeaker },
  } = rootStore;

  const tablet = useMediaQuery('(max-width:700px)');

  const elementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaElement = elementRef.current;

    if (stream && mediaElement) {
      mediaElement.srcObject = stream;
    }
  }, [stream]);

  const interactionSx: SxProps<Theme> = tablet
    ? {
        cursor: 'pointer',
        pointerEvents: 'all',
      }
    : {
        cursor: view === 'tile' || speaker ? 'default' : 'pointer',
        pointerEvents: view === 'tile' || speaker ? 'none' : 'all',
      };

  const styles = layoutSx
    ? { ...interactionSx, ...layoutSx(speaker) }
    : { ...interactionSx, ...sx };

  return (
    <Stack
      onClick={() => {
        if (tablet) {
          setConferenceSpeaker(id);
        }
      }}
      onDoubleClick={() => {
        if (!tablet) {
          setConferenceSpeaker(id);
        }
      }}
      sx={{
        m: '8px',
        borderRadius: '8px',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'petersburg.80',
        ...styles,
      }}
    >
      {stream ? (
        <video
          autoPlay
          ref={elementRef}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Box sx={{ pointerEvents: 'none' }}>
          <Avatar size={tablet ? 40 : 80} />
        </Box>
      )}

      <Stack
        sx={{
          bottom: '8px',
          left: '8px',
          p: '4px 7px',
          borderRadius: '4px',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          backgroundColor: admin ? 'ekaterinburg.100' : 'petersburg.100',
        }}
      >
        <Microphone
          mute={!audioinput}
          fill="#999"
          sx={{
            width: '15px',
            height: '15px',
            mr: '7.5px',
          }}
        />

        <Typography
          fontSize={12}
          fontWeight={500}
          lineHeight="16px"
          color={admin ? 'petersburg.100' : 'petersburg.0'}
        >
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
});

export default User;
