import { Link as MuiLink, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { linkSizes, iconSizes, textSizes } from './styles';
import { LinkSizes } from './types';

export type LinkProps = {
  /* action or link */
  action: (() => any | Promise<any>) | string;
  text: string;
  size: LinkSizes;
  isDisabled?: boolean;
  color?: string;
  Icon?: any;
  /* styles when link was visited */
  visitedStyles?: any;
  /* styles when link is hovered or focused */
  hoverStyles?: any;
  hideUnderline?: boolean;
};

export const Link = ({
  action,
  text,
  size,
  isDisabled,
  color = 'grayscale.90',
  Icon,
  visitedStyles = '',
  hoverStyles = '',
  hideUnderline = false,
}: LinkProps) => {
  const [waitingAction, setWaitingAction] = useState(false);

  const CustomIcon =
    (!!Icon && waitingAction && (
      <CircularProgress sx={{ color }} size={iconSizes[size].fontSize} />
    )) ||
    (!!Icon && <Icon sx={{ ...iconSizes[size] }} />) ||
    '';

  const isLink = typeof action === 'string';

  const handleAction = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isLink) {
      event.preventDefault();
      setWaitingAction(true);
      await action();
      setWaitingAction(false);
    }
  };

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
        transition: '0.3s',
        '&:visited': {
          ...visitedStyles,
        },
        '&:focus': {
          ...hoverStyles,
          outline: 'none',
          textDecoration: 'underline',
        },
        '&:hover': {
          ...hoverStyles,
          textDecoration: 'underline',
        },
      }}
      href={isLink ? action : '#'}
      target={isLink ? '_blank' : ''}
      onClick={(e) => handleAction(e)}
    >
      <Stack direction="row" alignItems="center" spacing={(size === 'l' && 0.5) || 0.25}>
        {CustomIcon}
        <Typography sx={{ ...textSizes[size] }}>{text}</Typography>
      </Stack>
    </MuiLink>
  );
};
