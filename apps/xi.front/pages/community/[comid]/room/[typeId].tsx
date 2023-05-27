import { observer } from 'mobx-react';
import { LayoutPages } from 'pkg.layout.pages';
import { Stack } from '@mui/material';

import { Navigation } from 'kit/Navigation';
import dynamic from 'next/dynamic';

const VideoConference = dynamic(() => import('components/VideoConference/VideoConference'), {
  loading: () => <div>Loading...</div>,
});

const RoomPage = observer(() => (
  <LayoutPages noIndex>
    <Navigation>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          height: '100vh',
          width: '100%',
          overflow: 'auto',
        }}
      >
        <VideoConference />
      </Stack>
    </Navigation>
  </LayoutPages>
));

export default RoomPage;
