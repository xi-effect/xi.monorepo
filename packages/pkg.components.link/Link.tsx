import { Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link as LinkIcon } from 'pkg.icons.link';

import { LinkSizesS, IconSizesS, TextSizesS } from './styles';

type LinkSizes = 's' | 'm' | 'l';
export type LinkProps = {
  text: string;
  size: LinkSizes;
  isDisabled?: boolean;
};

export const Link = ({ text, size, isDisabled }: LinkProps) => (
  <MuiLink
    sx={{
      ...LinkSizesS[size],
      pointerEvents: isDisabled ? 'none' : 'auto',
      color: isDisabled ? 'grayscale.40' : '',
      textDecoration: 'underline',
    }}
  >
    <Stack direction="row" alignItems="center" spacing={(size === 'l' && 0.5) || 0.25}>
      <LinkIcon viewBox="0 0 16 16" sx={{ ...IconSizesS[size] }} />
      <Typography sx={{ ...TextSizesS[size] }}>{text}</Typography>
    </Stack>
  </MuiLink>
);
