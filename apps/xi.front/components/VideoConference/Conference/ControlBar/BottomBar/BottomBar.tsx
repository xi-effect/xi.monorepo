import { Stack, useMediaQuery } from '@mui/material';
import MobileNav from './Mobile/MobileNav';
import DesktopNav from './Desktop/DesktopNav';

const BottomBar = () => {
  const sm = useMediaQuery('(max-width:700px)');

  return (
    <Stack
      sx={{
        left: 0,
        p: '0 16px',
        width: '100%',
        bottom: '16px',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {sm ? <MobileNav /> : <DesktopNav />}
    </Stack>
  );
};

export default BottomBar;
