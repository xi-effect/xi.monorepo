import { observer } from 'mobx-react';
import { Stack, Typography } from '@mui/material';

const Header = observer(() => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    sx={{
      mt: 4,
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
      Задания
    </Typography>
  </Stack>
));

export default Header;
