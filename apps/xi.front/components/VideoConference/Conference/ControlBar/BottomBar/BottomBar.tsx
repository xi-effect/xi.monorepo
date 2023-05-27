import { Stack, useMediaQuery } from '@mui/material';
import MobileNav from './Mobile/MobileNav';
import DesktopNav from './Desktop/DesktopNav';

const BottomBar = () => {
  const sm = useMediaQuery('(max-width:700px)');

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        left: 0,
        p: '0 16px',
        width: '100%',
        bottom: '16px',
        position: 'absolute',
      }}
    >
      {sm ? <MobileNav /> : <DesktopNav />}
    </Stack>
  );
};

export default BottomBar;
