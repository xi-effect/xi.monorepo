/* eslint-disable react/jsx-key */
import { Stack, useMediaQuery, Theme } from '@mui/material';
import Overview from './ContentItems/Overview';
import Roles from './ContentItems/Roles';
import Participants from './ContentItems/Participants';
import History from './ContentItems/History';
import Categories from './ContentItems/Categories';
import Invites from './ContentItems/Invites';
import Classes from './ContentItems/Classes';

type ContentProps = {
  activeContent: number;
};

const Content = ({ activeContent }: ContentProps) => {
  const mobile1400: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(1400));
  const mobile800: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));
  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(700));

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={mobile700 ? 3 : 4}
      sx={{
        margin: mobile700 ? '' : `0px ${!mobile1400 ? '46px' : '0px'} 16px 32px`,
        ml: mobile700 ? '0' : `${mobile800 ? '16px' : ''}`,
        width: '100%',
        maxWidth: '928px',
        minWidth: 0,
        mb: '120px',
      }}
    >
      {
        [
          <Overview />,
          <Roles />,
          <History />,
          <Participants />,
          <Classes />,
          <Categories />,
          <Invites />,
        ][activeContent]
      }
    </Stack>
  );
};

export default Content;
