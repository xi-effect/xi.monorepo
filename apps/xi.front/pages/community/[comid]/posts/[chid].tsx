import { Stack, useTheme } from '@mui/material';
import { observer } from 'mobx-react';
import { LayoutPages } from "pkg.layout.pages";
import { Navigation } from 'kit/Navigation';
import { Header, Items } from 'components/Community/Posts';

const Posts = observer(() => {
  const { breakpoints } = useTheme();

  return (
  <LayoutPages noIndex>
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
        <Header />
        <Items />
      </Stack>
    </Navigation>
  </LayoutPages>
)});

export default Posts;
