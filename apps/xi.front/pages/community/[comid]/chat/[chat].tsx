import { Navigation } from 'kit/Navigation';
import { observer } from 'mobx-react';
import { LayoutPages } from 'pkg.layout.pages';
import { Chat as ChatPkg } from 'pkg.pages.chat';
import { Stack, useTheme } from '@mui/material';

const Chat = observer(() => {
  const { breakpoints } = useTheme();

  return (
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
            [breakpoints.down('md')]: {
              p: 0,
            },
            overflow: 'auto',
          }}
        >
          <ChatPkg id="chat_1" />
        </Stack>
      </Navigation>
    </LayoutPages>
  );
});

export default Chat;
