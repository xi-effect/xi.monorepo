import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react';
import { StateViewT } from 'components/VideoConference/Conference/Conference';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const RightTool: React.FC<StateViewT> = observer(({ stateView }) => {
  const tablet = useMediaQuery('(max-width:700px)');

  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="center" width="100%">
      {tablet ? <MobileNav /> : <DesktopNav stateView={stateView} />}
    </Stack>
  );
});

export default RightTool;
