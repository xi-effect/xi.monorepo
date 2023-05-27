import React from 'react';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';

const NoUsers = () => {
  const tablet = useMediaQuery('(max-width:700px)');

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        m: '8px',
        p: '20px',
        height: '47%',
        textAlign: 'center',
        borderRadius: '8px',
        bgcolor: 'grayscale.80',
        flex: tablet ? '1 1 90%' : '1 1 40%',
      }}
    >
      <Typography
        maxWidth="400px"
        mb={tablet ? '32px' : 0}
        color="grayscale.0"
        fontSize={24}
        fontWeight={600}
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
            color: 'grayscale.0',
            backgroundColor: 'primary.dark',

            '&:hover': {
              color: 'grayscale.40',
              backgroundColor: 'grayscale.10',
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
