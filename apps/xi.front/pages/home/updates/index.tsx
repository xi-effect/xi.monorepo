import { observer } from 'mobx-react';
import { Stack, useTheme } from '@mui/material';
import { LayoutPages } from 'pkg.layout.pages';
import { Navigation } from 'kit/Navigation';

const Updates = observer(() => {
  const { breakpoints } = useTheme();

  return (
    <LayoutPages>
      <Navigation>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            height: '100vh',
            width: '100%',
            [breakpoints.up('xs')]: {
              p: 2,
              pr: 1.5,
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
          Updates
        </Stack>
      </Navigation>
    </LayoutPages>
  );
});

export default Updates;
