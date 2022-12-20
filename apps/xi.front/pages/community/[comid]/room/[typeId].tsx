// import React, { Suspense } from 'react';
import { observer } from 'mobx-react';
import { LayoutPages } from "pkg.layout.pages";
import { Stack } from '@mui/material';

import { Navigation } from 'kit/Navigation';

// @ts-ignore
// const VideoConference = React.lazy(() => import('components/VideoConference'));

import { VideoConference } from 'components/VideoConference';

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
          p: '8px 16px',
          overflow: 'auto',
        }}
      >
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <VideoConference />
        {/* </Suspense> */}
      </Stack>
    </Navigation>
  </LayoutPages>
));

export default RoomPage;
