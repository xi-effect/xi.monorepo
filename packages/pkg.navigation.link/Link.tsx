import { Link as MuiLink, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { linkSizes, iconSizes, textSizes } from './styles';
import { LinkSizes } from './types';

export type LinkProps = {
  /* action or link */
  action?: (() => any | Promise<any>) | string;
  children: string | React.ReactNode;
  size?: LinkSizes;
  isDisabled?: boolean;
  color?: string;
  Icon?: any;
  /* styles when link was visited */
  visitedStyles?: any;
  /* styles when link is hovered or focused */
  hoverStyles?: any;
  hideUnderline?: boolean;
  onClick?: () => void;
  sx?: any;
};

export const Link = ({
  action,
  children,
  size = 'm',
  isDisabled,
  color = 'petersburg.90',
  Icon,
  visitedStyles = '',
  hoverStyles = '',
  hideUnderline = false,
  onClick,
  sx,
}: LinkProps) => {
  const [waitingAction, setWaitingAction] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  /* add styles when link is hovered or focused */
  const onHover = () => {
    setIsHovered(true);
  };
  /* remove styles when link is hovered or focused */
  const onOutOfHover = () => {
    setIsHovered(false);
  };

  const CustomIcon =
    (!!Icon && waitingAction && (
      <CircularProgress sx={{ color }} size={iconSizes[size].fontSize} />
    )) ||
    (!!Icon && <Icon sx={{ ...iconSizes[size] }} />) ||
    '';

  const isLink = typeof action === 'string';

  const handleAction = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      onClick();
    }

    if (!isLink && action) {
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
        color: isDisabled ? 'petersburg.40' : color,
        textDecoration: 'none',
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
        },
        '&:hover': {
          ...hoverStyles,
        },
        ...sx,
      }}
      href={isLink ? action : '#'}
      tabIndex={isDisabled ? -1 : 0}
      target={isLink ? '_blank' : ''}
      onClick={(e) => handleAction(e)}
      onMouseEnter={onHover}
      onFocus={onHover}
      onMouseLeave={onOutOfHover}
      onBlur={onOutOfHover}
    >
      <Stack direction="row" alignItems="center" spacing={(size === 'l' && 0.5) || 0.25}>
        {CustomIcon}
        <Typography
          sx={{
            ...textSizes[size],
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              right: 0,
              bottom: 0,
              bgcolor: color,
              display: (hideUnderline && !isHovered) || isDisabled ? 'none' : 'inline-block',
              width: '100%',
              height: '1px',
              opacity: isHovered ? '1' : '0.4',
            },
          }}
        >
          {children}
        </Typography>
      </Stack>
    </MuiLink>
  );
};
