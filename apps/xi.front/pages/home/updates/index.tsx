import { observer } from 'mobx-react';
import { Stack, useTheme } from '@mui/material';
import { LayoutPages } from 'pkg.layout.pages';
import { Navigation } from 'kit/Navigation';

import { Items, Header, Footer } from 'components/Home/Updates';

const Updates = observer(() => {
  const { breakpoints } = useTheme();

  return (
    <LayoutPages title="Обновления">
      <Navigation>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            height: '100vh',
            width: '100%',
            [breakpoints.up('xs')]: {
              p: 3,
              pr: 0,
            },
            [breakpoints.up('md')]: {
              p: 3,
              pr: 2.5,
            },
            [breakpoints.up('lg')]: {
              p: 4,
              pr: 3.5,
            },
            overflow: 'auto',
          }}
        >
          <Header />
          <Items />
          <Footer />
        </Stack>
      </Navigation>
    </LayoutPages>
  );
});

export default Updates;
