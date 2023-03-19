import React from 'react';

import { Stack, Theme, useMediaQuery } from '@mui/material';

import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import RolesSidebar from './rolesSidebar/RolesSidebar';
import EditRole from './editRole/EditRole';

const Roles = observer(() => {
  const rootStore = useStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userSt } = rootStore;

  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexWrap={mobile700 ? 'wrap' : 'nowrap'}
      sx={{ width: '100%' }}
    >
      <RolesSidebar />
      <EditRole />
    </Stack>
  );
});

export default Roles;
