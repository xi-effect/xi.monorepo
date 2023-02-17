/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import 'dayjs/locale/ru';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'styles/globals.css';

import { getScheme } from 'pkg.theme.scheme';
import createEmotionCache from 'utils/createEmotionCache';

config.autoAddCss = false;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// Binding events.

const MyApp = (props) => {
  // eslint-disable-next-line react/prop-types
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // @ts-ignore
  const theme = createTheme(getScheme('light')); // Только светлая тема;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=0.9, maximum-scale=0.9"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
