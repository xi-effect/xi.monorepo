import React, { ReactNode } from 'react';
import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Header } from 'pkg.components.header';
import { errorCode, errorMessages } from './texts';
import {
  buttonFontSize,
  buttonHeight,
  buttonMarginTop,
  buttonWidth,
  mainFontSize,
  mainMarginTop,
  ScreenSize,
  secondaryFontSize,
  secondaryLineHeight,
  secondaryMarginTop,
} from './breakpoints';

export type ErrorProps = {
  code: errorCode;
  logo: ReactNode;
};

export function Error({ code, logo }: ErrorProps) {
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

  const screenSize: ScreenSize = getDeviceWidth();
  const router: NextRouter = useRouter();

  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 2 }}
      direction="column"
      justifyContent="flex-start"
      sx={{
        zIndex: 1,
        margin: 0,
        overflow: 'auto',
        minHeight: mobilesm ? 'calc(100vh - 14px)' : '100vh',
        height: '100%',
        bgcolor: 'primary.pale',
        p: mobile1336 ? '20px 16px 20px 16px' : '16px 84px 64px 84px',
      }}
    >
      <Header logo={logo} />
      <Typography
        sx={{
          marginLeft: mobile1336 ? '4px' : '16px',
          marginTop: mainMarginTop[screenSize],
          fontSize: mainFontSize[screenSize],
          lineHeight: mainFontSize[screenSize],
          fontWeight: 600,
        }}
      >
        {code}
      </Typography>
      <Typography
        sx={{
          marginLeft: mobile1336 ? '4px' : '16px',
          marginTop: secondaryMarginTop[screenSize],
          fontSize: secondaryFontSize[screenSize],
          lineHeight: secondaryLineHeight[screenSize],
          fontWeight: 400,
        }}
      >
        {errorMessages[code]}
      </Typography>
      <Button
        onClick={() => router.push('/')}
        sx={{
          marginLeft: mobile1336 ? '4px' : '16px',
          marginTop: buttonMarginTop[screenSize],
          height: buttonHeight[screenSize],
          width: buttonWidth[screenSize],
          fontSize: buttonFontSize[screenSize],
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '8px',
          color: 'grayscale.0',
          lineHeight: '22px',
          backgroundColor: 'primary.dark',

          '&:hover': {
            color: 'grayscale.0',
            backgroundColor: 'primary.dark',
          },
        }}
      >
        На главную
      </Button>
    </Stack>
  );
}
