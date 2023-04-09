import { Grid } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Navigation } from 'kit/Navigation';
import { useStore } from 'store/connect';

import { getLastCodeFromURL } from 'pkg.utils';
import { LayoutPages } from 'pkg.layout.pages';

const Community = observer(() => {
  const store = useStore();
  const { communitySt } = store;

  const router = useRouter();

  useEffect(() => {
    const code = getLastCodeFromURL();
    communitySt.getMeta(code);
  }, [communitySt, router.query.comid]);

  return (
    <LayoutPages noIndex>
      <Navigation>
        <Grid sx={{ p: 2 }} container spacing={2}>
          1
        </Grid>
      </Navigation>
    </LayoutPages>
  );
});

export default Community;
