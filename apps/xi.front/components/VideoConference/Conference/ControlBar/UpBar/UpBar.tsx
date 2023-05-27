import React from 'react';
import { Stack } from '@mui/material';
import { LeftTools } from './LeftTools';
import { RightTool } from './RightTool';
import { StateViewT } from '../../Conference';

const UpBar: React.FC<StateViewT> = ({ stateView }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{
      left: 0,
      p: '0 16px',
      top: '16px',
      width: '100%',
      position: 'absolute',
    }}
  >
    <Stack direction="row" justifyContent="flex-start" alignItems="center">
      <LeftTools />
    </Stack>
    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
      <RightTool stateView={stateView} />
    </Stack>
  </Stack>
);

export default UpBar;
