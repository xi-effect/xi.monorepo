import { Stack, Typography } from '@mui/material';

const Header = () => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    sx={{
      width: '100%',
      height: '40px',
    }}
  >
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '40px',
      }}
    >
      Обновления
    </Typography>
  </Stack>
);

export default Header;
