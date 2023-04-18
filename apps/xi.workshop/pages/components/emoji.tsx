import { Grid as GridLayout } from '@mui/material';
import { LayoutPages } from 'kit/LayoutPages';
import { EmojiList } from 'pkg.emoji.picker';

const Emoji = () => (
  <LayoutPages>
    <GridLayout sx={{ p: 4, maxWidth: '624px' }} container spacing={4}>
      <EmojiList />
    </GridLayout>
  </LayoutPages>
);

export default Emoji;
