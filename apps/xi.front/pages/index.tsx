import React, { useEffect } from 'react';
import Router from 'next/router';
import { observer } from 'mobx-react';
import { useSessionStorage } from 'react-use';
import XiLogo from 'kit/XiLogo';
import { Stack, Typography, Link, useMediaQuery } from '@mui/material';
import { LayoutPages } from 'pkg.layout.pages';
import { SignIn } from 'pkg.forms.signin';
import { useStore } from 'store/connect';

const Terms = () => (
  <>
    <Typography
      variant="caption"
      paddingTop="12px"
      paddingBottom="5px"
      sx={{
        color: 'petersburg.40',
      }}
    >
      Нажимая «Войти», вы принимаете условия
    </Typography>
    <Link
      underline="none"
      sx={{
        cursor: 'pointer',
        mt: '-4px',
        color: 'primary.main',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: 0,
      }}
      onClick={() => Router.replace('/')}
    >
      пользовательского соглашения
    </Link>
  </>
);

const Signin = observer(() => {
  const rootStore = useStore();
  const { uiSt, profileSt, authorizationSt } = rootStore;

  const [prevPathname] = useSessionStorage('prevPathname');

  const isMobile: boolean = useMediaQuery('(max-width: 472px)');

  useEffect(() => {
    if (prevPathname !== '/home' && prevPathname !== '/signup') {
      uiSt.setLoading('loading', true);
      profileSt.getProfile('login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutPages title="вход">
      {!!authorizationSt.signin.error && (
        <Typography
          position="absolute"
          variant="body1"
          sx={{
            width: '311px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: 'error.pale',
            pt: '5px',
            m: 'auto',
            top: isMobile ? '4px' : '32px',
            left: 0,
            right: 0,
            color: 'error.dark',
            textAlign: 'center',
          }}
        >
          {authorizationSt.signin.error}
        </Typography>
      )}
      <Stack
        justifyContent={isMobile ? 'flex-start' : 'center'}
        alignItems="center"
        sx={{
          width: '100%',
          minHeight: isMobile ? 'calc(100vh - 96px)' : '100vh',
          height: '100%',
        }}
      >
        <Stack
          direction="column"
          padding={isMobile ? '16px 20px 0 20px' : '32px'}
          spacing={2}
          sx={{
            width: isMobile ? '100%' : '420px',
            height: isMobile ? '395px' : '514px',
            borderRadius: '16px',
            border: isMobile ? 'none' : '1px solid #E6E6E6', // petersburg.10
            position: 'relative',
          }}
        >
          <Stack alignItems="center">
            <XiLogo width={142} height={24} />
          </Stack>
          <Typography
            variant="xl"
            sx={{
              pb: '16px',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            Вход в аккаунт
          </Typography>

          <SignIn authorizationSt={authorizationSt} />

          {!isMobile && (
            <Stack
              direction="column"
              alignItems="center"
              sx={{
                position: 'absolute',
                bottom: '-48px',
                left: '0px',
                width: '100%',
              }}
            >
              <Terms />
            </Stack>
          )}
        </Stack>
      </Stack>
      {isMobile && (
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            width: '100%',
            height: '96px',
          }}
        >
          <Terms />
        </Stack>
      )}
    </LayoutPages>
  );
});

export default Signin;
