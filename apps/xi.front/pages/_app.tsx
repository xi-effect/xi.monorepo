/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { observer } from 'mobx-react';

import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import 'dayjs/locale/ru';

import { StoreProvider } from 'store/connect';

import { SnackbarProvider } from 'notistack';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'styles/globals.css';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Loading } from 'pkg.components.loading';
import { useStoreInitialized } from 'store/rootStore';
import createEmotionCache from 'store/createEmotionCache';
import { getScheme } from 'pkg.theme.scheme';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SaveConfirm } from 'pkg.notistack.saveconfirm';
import { Notification } from 'pkg.notistack.notification';

config.autoAddCss = false;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// Binding events.

const MyApp = observer((props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const rootStore = useStoreInitialized(pageProps.initialState);

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
