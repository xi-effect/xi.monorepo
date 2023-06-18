import React from 'react';
import { Stack } from '@mui/material';
import { LeftTools } from './LeftTools';
import { RightTool } from './RightTool';
import { StateViewT } from '../../Conference';

const UpBar: React.FC<StateViewT> = ({ stateView }) => (
  <Stack
    sx={{
      left: 0,
      p: '0 16px',
      top: '16px',
      width: '100%',
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <LeftTools />
    </Stack>
    <Stack
      spacing={2}
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <RightTool stateView={stateView} />
    </Stack>
  </Stack>
);

export default UpBar;
