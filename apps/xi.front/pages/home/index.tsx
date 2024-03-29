import { Stack } from '@mui/material';
import { observer } from 'mobx-react';
import { Navigation } from 'kit/Navigation';
import { LayoutPages } from 'pkg.layout.pages';
import { HomePage } from 'components/Home';

const Home = observer(() => (
  <LayoutPages title="главная" noIndex>
    <Navigation>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          height: '100vh',
          width: '100%',
          p: 4,
          overflow: 'auto',
        }}
      >
        <HomePage />
      </Stack>
    </Navigation>
  </LayoutPages>
));

export default Home;
