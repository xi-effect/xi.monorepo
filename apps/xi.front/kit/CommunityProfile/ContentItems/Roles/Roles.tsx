import React from 'react';

import { Stack } from '@mui/material';

import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import RolesSidebar from './rolesSidebar/RolesSidebar';
import EditRole from './editRole/EditRole';

const Roles = observer(() => {
  const rootStore = useStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userSt } = rootStore;

  // const mobile800: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));
  // const mobile1400: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(1400));
  // const isMobile: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexWrap="nowrap"
      sx={{ width: '100%' }}
    >
      <RolesSidebar />
      <EditRole />
    </Stack>
  );
});

export default Roles;
