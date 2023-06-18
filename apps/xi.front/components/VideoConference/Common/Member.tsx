import React from 'react';
import { ConferenceUserT } from 'store/media/mediaSt';
import { Stack, Typography } from '@mui/material';
import { Avatar } from 'pkg.data.avatar';
import { Camera, Hand, Microphone } from 'pkg.icons';

type MemberT = {
  user: ConferenceUserT;
};
const Member: React.FC<MemberT> = (props) => {
  const {
    user: {
      name,
      admin,
      raiseHand,
      device: { videoinput, audioinput },
    },
  } = props;

  return (
    <Stack
      sx={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Stack
        sx={{
          mb: '8px',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div>
          <Avatar size={24} />
        </div>

        <Typography
          sx={{
            m: '0 6px',
            fontWeight: 500,
            fontSize: '14px',
          }}
        >
          {name}
        </Typography>

        {admin && (
          <Typography
            sx={{
              fontSize: '14px',
              color: 'petersburg.40',
            }}
          >
            Хост
          </Typography>
        )}
      </Stack>

      <Stack
        sx={{
          mb: '8px',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {raiseHand && <Hand active />}

        {audioinput ? <Microphone sx={{ m: '0 5px' }} /> : <Microphone mute sx={{ m: '0 5px' }} />}

        {videoinput ? <Camera /> : <Camera mute />}
      </Stack>
    </Stack>
  );
};

export default Member;
