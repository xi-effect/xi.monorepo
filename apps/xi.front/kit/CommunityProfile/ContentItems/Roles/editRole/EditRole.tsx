import React from 'react';
import { observer } from 'mobx-react';
import { IconButton, Paper, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const EditRole = observer(() => {
  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));

  return (
    <Paper
      sx={{
        ml: 3,
        width: mobile700 ? '100%' : '692px',
        p: 3,
      }}
    >
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '22px',
              lineHeight: '30px',
              ml: 1,
            }}
          >
            Редактировать роль - Администратор
          </Typography>
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
});

export default EditRole;
