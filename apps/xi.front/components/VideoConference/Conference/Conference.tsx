import React, { useRef, useState } from 'react';
import { Box, Stack, useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import { UpBar } from './ControlBar/UpBar';
import { BottomBar } from './ControlBar/BottomBar';
import UsersGridContainer from './Grid/UsersGridContainer';
import Modals from './Modals/Modals';

export type StateViewT = {
  stateView: ['tile' | 'speaker', React.Dispatch<React.SetStateAction<'tile' | 'speaker'>>];
};

const Conference = observer(() => {
  const rootStore = useStore();

  const sm = useMediaQuery('(max-width:700px)');

  const boxRef = useRef<HTMLDivElement>(null);

  /*
   *  view не добавлен в общий стор, из-за бага при событии "resize",
   * пропадает конект с стором и view становится по умолчанию
   * */

  const stateView = useState<'tile' | 'speaker'>('tile');

  const {
    mediaSt: {
      conferenceGridData: { users },
      conferenceControlBar: { fullScreen, view, members, chat },
    },
  } = rootStore;

  const calcPadding = () => {
    if (sm) return '65px 0 80px';

    if (view === 'speaker') return members || chat ? '75px 16px 80px' : '75px 83px 80px';

    return members || chat
      ? '116px 16px 124px'
      : `116px ${users.length <= 4 ? '8px' : '31px'} 124px `;
  };

  return (
    <Box width="100%" height="100%" p={sm ? 0 : '8px 16px'}>
      <Stack
        sx={{
          top: 0,
          left: 0,
          zIndex: 100,
          width: '100%',
          height: '100%',
          p: calcPadding(),
          overflow: 'hidden',
          backgroundColor: 'grayscale.90',
          borderRadius: fullScreen || sm ? 0 : '8px',
          position: fullScreen ? 'fixed' : 'relative',
        }}
      >
        <UpBar stateView={stateView} />

        <Box ref={boxRef} width="100%" height="100%">
          <UsersGridContainer stateView={stateView} boxRef={boxRef} />
        </Box>

        <BottomBar />

        <Modals />
      </Stack>
    </Box>
  );
});

export default Conference;
