import { Stack } from '@mui/material';
import { LayoutPages } from 'kit/LayoutPages';
import { ChatInput } from 'pkg.inputs.chat';

const ChatInputPage = () => (
  <LayoutPages>
    <Stack sx={{ width: '600px', pt: 40 }}>
      <ChatInput />
    </Stack>
  </LayoutPages>
);

export default ChatInputPage;
