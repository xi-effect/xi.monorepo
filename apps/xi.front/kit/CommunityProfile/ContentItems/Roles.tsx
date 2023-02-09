import React from 'react';

import { Stack, Typography } from '@mui/material';

import { observer } from 'mobx-react';
import { useStore } from 'store/connect';

const Roles = observer(() => {
  const rootStore = useStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userSt } = rootStore;

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        bgcolor: 'grayscale.0',
        width: '100%',
        height: '120px',
        borderRadius: '8px',
        padding: '24px 36px',
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '32px',
          ml: 2,
        }}
      >
        Роли
      </Typography>
    </Stack>
  );
});

export default Roles;
