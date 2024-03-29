/* eslint-disable jsx-a11y/media-has-caption */
import { observer } from 'mobx-react';
import { Button, Stack, Typography } from '@mui/material';
import { Add } from 'pkg.icons';

const Header = observer(() => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    sx={{
      width: '100%',
    }}
  >
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '40px',
        color: 'petersburg.100',
      }}
    >
      Объявления
    </Typography>
    <Button
      variant="contained"
      sx={{
        ml: '21px',
        width: 118,
        height: 40,
        boxShadow: 0,
        borderRadius: '8px',
        bgcolor: 'petersburg.0',

        '&:hover': {
          boxShadow: 0,
          bgcolor: 'petersburg.0',
        },

        svg: {
          fill: '#000',
        },
      }}
    >
      <Add />
      <Typography
        sx={{
          ml: '4px',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
          color: 'petersburg.100',
          textTransform: 'capitalize',
        }}
      >
        Создать
      </Typography>
    </Button>
  </Stack>
));

export default Header;
