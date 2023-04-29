import { Grid as GridLayout, Box } from '@mui/material';
import { LayoutPages } from 'kit/LayoutPages';
import { EmojiList, EmojiPicker } from 'pkg.emoji.picker';

const Emoji = () => (
  <LayoutPages>
    <GridLayout sx={{ p: 4, maxWidth: '1624px' }} container flexDirection="column" spacing={4}>
      <EmojiList />
      <Box
        sx={{
          p: 6,
          marginTop: '300px',
          height: '600px',
          width: '600px',
        }}
      >
        <EmojiPicker />
      </Box>
    </GridLayout>
  </LayoutPages>
);

export default Emoji;
