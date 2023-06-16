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
    <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="space-between">
      <Stack mb="8px" direction="row" alignItems="center">
        <div>
          <Avatar size={24} />
        </div>

        <Typography fontWeight={500} fontSize={14} m="0 6px">
          {name}
        </Typography>

        {admin && (
          <Typography fontSize={14} color="grayscale.40">
            Хост
          </Typography>
        )}
      </Stack>

      <Stack mb="8px" direction="row" alignItems="center">
        {raiseHand && <Hand active />}

        {audioinput ? <Microphone sx={{ m: '0 5px' }} /> : <Microphone mute sx={{ m: '0 5px' }} />}

        {videoinput ? <Camera /> : <Camera mute />}
      </Stack>
    </Stack>
  );
};

export default Member;
