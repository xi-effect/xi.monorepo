import { Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link as LinkIcon } from 'pkg.icons.link';

import { LinkSizesS, IconSizesS, TextSizesS } from './styles';

type LinkSizes = 's' | 'm' | 'l';
export type LinkProps = {
  link: string;
  text: string;
  size: LinkSizes;
  isDisabled?: boolean;
  color?: string;
  /* Icon component | If true => default icon | false or undefined => without icon */
  Icon?: any | boolean;
};

export const Link = ({
  link,
  text,
  size,
  isDisabled,
  color = 'grayscale.90',
  Icon = 'false',
}: LinkProps) => {
  const CustomIcon = (typeof Icon === 'boolean' &&
    ((Icon && <LinkIcon viewBox="0 0 16 16" sx={{ ...IconSizesS[size] }} />) || '')) || (
    <Icon sx={{ ...IconSizesS[size] }} />
  );

  return (
    <MuiLink
      sx={{
        ...LinkSizesS[size],
        pointerEvents: isDisabled ? 'none' : 'auto',
        color: isDisabled ? 'grayscale.40' : color,
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
      href={link}
    >
      <Stack direction="row" alignItems="center" spacing={(size === 'l' && 0.5) || 0.25}>
        {CustomIcon}
        <Typography sx={{ ...TextSizesS[size] }}>{text}</Typography>
      </Stack>
    </MuiLink>
  );
};
