import { Stack } from '@mui/material';
import React from 'react';
import { observer } from 'mobx-react';

import Form from 'components/Invite/Form';
import { LayoutPages } from 'pkg.layout.pages';
import XiLogo from 'kit/XiLogo';

const InviteCommunity = observer(() => (
  <LayoutPages title="приглашение">
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'brand.0',
      }}
    >
      <XiLogo />
      <Form />
      <div />
    </Stack>
  </LayoutPages>
));

export default InviteCommunity;
