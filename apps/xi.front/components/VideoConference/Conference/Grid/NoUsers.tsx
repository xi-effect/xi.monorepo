import React from 'react';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';

const NoUsers = () => {
  const tablet = useMediaQuery('(max-width:700px)');

  return (
    <Stack
      sx={{
        m: '8px',
        p: '20px',
        height: '47%',
        textAlign: 'center',
        borderRadius: '8px',
        bgcolor: 'petersburg.80',
        alignItems: 'center',
        justifyContent: 'center',
        flex: tablet ? '1 1 90%' : '1 1 40%',
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          maxWidth: '400px',
          fontSize: '24px',
          color: 'petersburg.0',
          mb: tablet ? '32px' : 0,
        }}
      >
        {tablet
          ? 'Пригласите других участников, отправив ссылку на встречу'
          : 'Здесь пока никого нет'}
      </Typography>

      {tablet && (
        <Button
          fullWidth
          sx={{
            height: '56px',
            maxWidth: '312px',
            color: 'petersburg.0',
            backgroundColor: 'brand.80',

            '&:hover': {
              color: 'petersburg.40',
              backgroundColor: 'petersburg.10',
            },
          }}
        >
          Скопировать ссылку
        </Button>
      )}
    </Stack>
  );
};

export default NoUsers;
