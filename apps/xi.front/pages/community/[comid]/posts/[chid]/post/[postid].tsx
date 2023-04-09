import { Stack } from '@mui/material';
import { observer } from 'mobx-react';
import { LayoutPages } from 'pkg.layout.pages';
import { Navigation } from 'kit/Navigation';
import { Header, SubHeader, Content, Breadcrumbs } from 'components/Community/Post';

const Post = observer(() => (
  <LayoutPages noIndex>
    <Navigation>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0}
        sx={{
          height: '100vh',
          width: '100%',
          p: 4,
          overflow: 'auto',
        }}
      >
        <Breadcrumbs />
        <Header />
        <SubHeader />
        <Content />
      </Stack>
    </Navigation>
  </LayoutPages>
));

export default Post;
