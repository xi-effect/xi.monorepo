import React from 'react';
import { Stack } from '@mui/material';
import { LeftTools } from './LeftTools';
import { CenterTools } from './CenterTools';
import { RightTool } from './RightTool';

const DesktopNav = () => (
  <>
    <Stack sx={{ width: '176px' }}>
      <LeftTools />
    </Stack>

    <Stack sx={{ width: '176px', alignItems: 'center' }}>
      <CenterTools />
    </Stack>

    <Stack sx={{ width: '176px' }}>
      <RightTool />
    </Stack>
  </>
);

export default DesktopNav;
