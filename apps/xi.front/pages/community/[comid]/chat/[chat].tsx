import { Navigation } from 'kit/Navigation';
import { observer } from 'mobx-react';
import { LayoutPages } from 'pkg.layout.pages';
import { Chat as ChatPkg } from 'pkg.pages.chat';
import { Stack } from '@mui/material';

const Chat = observer(() => (
  <LayoutPages noIndex>
    <Navigation>
      <Stack
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-start"
        sx={{
          height: '100vh',
          width: '100%',
          p: '8px 16px',
          // [breakpoints.up('xs')]: {
          //   p: 3,
          //   pr: 0,
          // },
          // [breakpoints.up('md')]: {
          //   p: 3,
          //   pr: 2.5,
          // },
          // [breakpoints.up('lg')]: {
          //   p: 4,
          //   pr: 3.5,
          // },
          overflow: 'auto',
        }}
      >
        <ChatPkg id="chat_1" />
      </Stack>
    </Navigation>
  </LayoutPages>
));

export default Chat;
