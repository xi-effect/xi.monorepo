import { Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link as LinkIcon } from 'pkg.icons.link';

import { linkSizes, iconSizes, textSizes } from './styles';

type LinkSizes = 's' | 'm' | 'l';
export type LinkProps = {
  link: string;
  text: string;
  size: LinkSizes;
  isDisabled?: boolean;
  color?: string;
  /* Icon component | If true => default icon | false or undefined => without icon */
  Icon?: any | boolean;
  /* styles when link was visited */
  visitedStyles?: any;
  /* styles when link is focused */
  focusedStyles?: any;
  /* styles when link is hovered */
  hoverStyles?: any;
  hideUnderline?: boolean;
};

export const Link = ({
  link,
  text,
  size,
  isDisabled,
  color = 'grayscale.90',
  Icon = 'false',
  visitedStyles = '',
  focusedStyles = '',
  hoverStyles = '',
  hideUnderline = false,
}: LinkProps) => {
  const CustomIcon = (typeof Icon === 'boolean' &&
    ((Icon && <LinkIcon viewBox="0 0 16 16" sx={{ ...iconSizes[size] }} />) || '')) || (
    <Icon sx={{ ...iconSizes[size] }} />
  );

  return (
    <MuiLink
      sx={{
        ...linkSizes[size],
        pointerEvents: isDisabled ? 'none' : 'auto',
        color: isDisabled ? 'grayscale.40' : color,
        textDecoration: hideUnderline ? 'none' : 'underline',
        width: 'max-content',
        height: 'max-content',
        cursor: 'pointer',
        '&:visited': {
          ...visitedStyles,
        },
        '&:focus': {
          ...focusedStyles,
          outline: 'none',
          textDecoration: 'underline',
        },
        '&:hover': {
          ...hoverStyles,
          textDecoration: 'underline',
        },
      }}
      href={link}
      target="_blank"
    >
      <Stack direction="row" alignItems="center" spacing={(size === 'l' && 0.5) || 0.25}>
        {CustomIcon}
        <Typography sx={{ ...textSizes[size] }}>{text}</Typography>
      </Stack>
    </MuiLink>
  );
};
