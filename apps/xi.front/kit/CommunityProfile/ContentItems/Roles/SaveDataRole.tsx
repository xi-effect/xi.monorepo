import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

type SaveDataRoleType = {
  mobile400: boolean;
};

const SaveDataRole: React.FC<SaveDataRoleType> = ({ mobile400 }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    flexWrap="wrap"
    sx={{
      maxWidth: 960,
      width: '100%',
      position: 'fixed',
      bottom: 32,
      left: '50%',
      transform: 'translate(-50%,0)',
      backgroundColor: 'white',
      borderRadius: '16px',
      pr: 2,
    }}
  >
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '24px',
        py: 2,
        pl: 5,
      }}
    >
      У вас есть несохраненные изменения
    </Typography>
    <Stack
      direction="row"
      justifyContent={mobile400 ? 'space-around  ' : 'space-between'}
      sx={{ maxWidth: mobile400 ? '100%' : '220px', width: '100%' }}
    >
      <Button variant="text">Сбросить</Button>
      <Button variant="contained" type="submit">
        Сохранить
      </Button>
    </Stack>
  </Stack>
);

export default SaveDataRole;
