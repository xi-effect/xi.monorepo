import { observer } from 'mobx-react';
import { LayoutPages } from 'pkg.layout.pages';
import React from 'react';
import { useRouter } from 'next/router';
import { Stack, Box } from '@mui/material';
import { Navigation } from 'kit/Navigation';
import dynamic from 'next/dynamic';

const ContentEditor = dynamic(import('kit/Editor/ContentEditor'), { ssr: false });

const PagePage = observer(() => {
  const router = useRouter();

  React.useEffect(() => {
    if (router.query.id !== undefined) {
      // do smth
    }
  }, [router.query.id]);

  return (
    <LayoutPages noIndex>
      <Navigation>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            height: '100vh',
            width: '100%',
            p: '8px 16px',
            overflow: 'auto',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1060px',
            }}
          >
            <ContentEditor />
          </Box>
        </Stack>
      </Navigation>
    </LayoutPages>
  );
});

export default PagePage;
