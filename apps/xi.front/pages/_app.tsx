/* eslint-disable react/forbid-prop-types */
import { ThemeProvider } from '@mui/material/styles';
import { observer } from 'mobx-react';
import Head from 'next/head';

import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import 'dayjs/locale/ru';

import { StoreProvider } from 'store/connect';

import { SnackbarProvider } from 'notistack';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'styles/globals.css';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Loading } from 'pkg.components.loading';
import { Notification } from 'pkg.notistack.notification'; // useThemeDetector
import { SaveConfirm } from 'pkg.notistack.saveconfirm';
import { getScheme } from 'pkg.theme';
import createEmotionCache from 'store/createEmotionCache';
import { useStoreInitialized } from 'store/rootStore';

import { useMediaQuery } from '@mui/material';

config.autoAddCss = false;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// Binding events.

const darkTheme = getScheme('dark');

const lightTheme = getScheme('light');

const MyApp = observer((props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const rootStore = useStoreInitialized(pageProps.initialState);
  const { profileSt } = rootStore;
  const { profile } = profileSt;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const distTheme = {
    system: prefersDarkMode ? darkTheme : lightTheme,
    dark: darkTheme,
    light: lightTheme,
  };

  const theme = distTheme[profile.theme];

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=0.9, maximum-scale=0.9"
        />
      </Head>
      {/* MobX Provider */}
      <StoreProvider value={rootStore}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Loading loading={rootStore.uiSt.load.loading} />
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              Components={{
                saveConfirm: SaveConfirm,
                notification: Notification,
              }}
              maxSnack={3}
              preventDuplicate
              dense
            >
              <Component {...pageProps} />
            </SnackbarProvider>
          </ThemeProvider>
        </LocalizationProvider>
      </StoreProvider>
    </CacheProvider>
  );
});

export default MyApp;
