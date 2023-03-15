import { Stack, Typography, useTheme } from '@mui/material';

const Header = () => {
  const { breakpoints } = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        width: '100%',
        height: '40px',
        [breakpoints.down('md')]: {
          display: 'none',
        },
        mb: '32px',
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
};

export default Header;
