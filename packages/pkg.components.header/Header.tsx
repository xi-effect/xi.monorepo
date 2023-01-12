import { useRouter } from 'next/router';
import { Box, Stack, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
  button1Width,
  buttonsHeight,
  buttonsFontSize,
  buttonsLineHeight,
  button2Width,
} from './breakpoints';

export type HeaderProps = {
  logo: any;
};

export const Header = ({ logo }: HeaderProps) => {
  const router = useRouter();
  const theme = useTheme();

  const mobile1920: boolean = useMediaQuery(theme.breakpoints.down(1920));
  const mobile1336: boolean = useMediaQuery(theme.breakpoints.down(1336));
  const mobile1000: boolean = useMediaQuery(theme.breakpoints.down(1000));
  const mobilesm: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  const getDeviceWidth = () => {
    if (mobilesm) return 'min480';
    if (mobile1000) return 'min1000';
    if (mobile1336) return 'min1336';
    if (mobile1920) return 'min1920';
    return 'max1920';
  };

  const deviceWidth = getDeviceWidth();

  const openDiscord = () => {
    // @ts-ignore
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.open('https://discord.gg/aNQfXXb');
    }
  };

  const openVacancy = () => {
    // @ts-ignore
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.open('https://vacancy.xieffect.ru');
    }
  };

  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%', height: '96px', p: mobile1336 ? '4px' : '16px' }}
    >
      <Box
        onClick={() => router.push('/')}
        sx={{
          pb: '12px',
          width: '91px',
          height: '66px',
        }}
      >
        {logo}
      </Box>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
        <Button
          onClick={openVacancy}
          sx={{
            width: button1Width[deviceWidth],
            height: buttonsHeight[deviceWidth],
            color: 'grayscale.100',
            bgcolor: 'grayscale.0',
            borderRadius: '12px',
            fontWeight: '400',
            fontSize: buttonsFontSize[deviceWidth],
            lineHeight: buttonsLineHeight[deviceWidth],
            textTransform: 'capitalize',
            '&:hover': {
              color: 'grayscale.0',
              bgcolor: 'secondary.dark',
            },
          }}
        >
          Вакансии
        </Button>
        <Button
          onClick={openDiscord}
          sx={{
            width: button2Width[deviceWidth],
            height: buttonsHeight[deviceWidth],
            color: 'grayscale.100',
            bgcolor: 'grayscale.0',
            borderRadius: '12px',
            fontWeight: '400',
            fontSize: buttonsFontSize[deviceWidth],
            lineHeight: buttonsLineHeight[deviceWidth],
            textTransform: 'capitalize',
            '&:hover': {
              color: 'grayscale.0',
              bgcolor: 'secondary.dark',
            },
          }}
        >
          Дискорд
        </Button>
      </Stack>
    </Stack>
  );
};
