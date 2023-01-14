import React, { useState } from 'react';
import Router, { useRouter, NextRouter } from 'next/router';
import { observer } from 'mobx-react';
import { Link, Stack, Typography, useMediaQuery } from '@mui/material';
import Form from 'components/Signup/Form';
import XiLogo from 'kit/XiLogo';
import { useSessionStorage } from 'react-use';
import { LayoutPages } from 'pkg.layout.pages';

const Tearms = () => (
  <>
    <Typography
      variant="caption"
      paddingTop="12px"
      paddingBottom="5px"
      sx={{
        color: 'grayscale.40',
      }}
    >
      Нажимая «Регистрация», вы принимаете условия
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
      onClick={() => Router.replace('/signup')}
    >
      пользовательского соглашения
    </Link>
  </>
);

const Signup = observer(() => {
  const isMobile = useMediaQuery('(max-width: 472px)');

  const router: NextRouter = useRouter();

  const [activeStep, setActiveStep] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prevPathname, setPrevPathname] = useSessionStorage('prevPathname');

  React.useEffect(() => {
    setPrevPathname(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return (
    <LayoutPages title="регистрация">
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
            border: isMobile ? 'none' : '1px solid #E6E6E6',
            position: 'relative',
          }}
        >
          <Stack alignItems="center">
            <XiLogo width={142} height={24} />
          </Stack>
          <Typography
            variant="xl"
            textAlign="center"
            sx={{
              pb: '16px',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            Регистрация
          </Typography>
          <Form activeStep={activeStep} setActiveStep={setActiveStep} />
          {!isMobile && activeStep === 1 && (
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
              <Tearms />
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
          {isMobile && activeStep === 1 && <Tearms />}
        </Stack>
      )}
    </LayoutPages>
  );
});

export default Signup;
