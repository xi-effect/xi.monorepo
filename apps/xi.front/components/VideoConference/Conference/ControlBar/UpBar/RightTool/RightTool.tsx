import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react';
import { StateViewT } from 'components/VideoConference/Conference/Conference';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const RightTool: React.FC<StateViewT> = observer(({ stateView }) => {
  const tablet = useMediaQuery('(max-width:700px)');

  return (
    <Stack
      sx={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {tablet ? <MobileNav /> : <DesktopNav stateView={stateView} />}
    </Stack>
  );
});

export default RightTool;
