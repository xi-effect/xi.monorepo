import { Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link as LinkIcon } from 'pkg.icons.link';

import { LinkSizesS, IconSizesS, TextSizesS } from './styles';

type LinkSizes = 's' | 'm' | 'l';
export type LinkProps = {
  text: string;
  size: LinkSizes;
};

export const Link = ({ text, size }: LinkProps) => (
  <MuiLink sx={{ ...LinkSizesS[size] }}>
    <Stack direction="row" alignItems="center" spacing={(size === 'l' && 0.5) || 0.25}>
      <LinkIcon viewBox="0 0 16 16" sx={{ ...IconSizesS[size] }} />
      <Typography sx={{ ...TextSizesS[size] }}>{text}</Typography>
    </Stack>
  </MuiLink>
);
