import { Navigation } from 'kit/Navigation';
import { observer } from 'mobx-react';
import { LayoutPages } from 'pkg.layout.pages';
import { Chat as ChatPkg } from 'pkg.pages.chat';

const Chat = observer(() => (
  <LayoutPages noIndex>
    <Navigation>
      <ChatPkg />
    </Navigation>
  </LayoutPages>
));

export default Chat;
