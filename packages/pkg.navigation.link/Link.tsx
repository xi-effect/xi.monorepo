import { Link as MuiLink, Stack, Typography } from '@mui/material';
import React, { useState, FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { linkSizes, iconSizes, textSizes } from './styles';
import { LinkProps, LinkTypesT } from './types';

export const Link: FC<LinkProps> = ({
  children,
  href,
  onClick,
  color = 'petersburg.90',
  size = 'm',
  disabled = false,
  icon,
  visitedStyles,
  hoverStyles,
  underline = true,
  sx,
  ...props
}: LinkProps) => {
  const [waitingAction, setWaitingAction] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const type: LinkTypesT = (onClick && 'action') || 'link';

  /* add styles when link is hovered or focused */
  const onHover = () => {
    setIsHovered(true);
  };
  /* remove styles when link is hovered or focused */
  const onOutOfHover = () => {
    setIsHovered(false);
  };

  const Icon = icon;
  const CustomIcon =
    (!!Icon && waitingAction && (
      <CircularProgress sx={{ color }} size={iconSizes[size].fontSize} />
    )) ||
    (!!Icon && <Icon sx={{ ...iconSizes[size] }} />) ||
    '';

  const handleAction = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (type === 'action' && onClick) {
      event.preventDefault();
      setWaitingAction(true);
      await onClick(event);
      setWaitingAction(false);
    }
  };

  return (
    <MuiLink
      sx={{
        ...linkSizes[size],
        pointerEvents: disabled ? 'none' : 'auto',
        color: disabled ? 'petersburg.40' : color,
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
        ...props,
      }}
      href={href}
      tabIndex={disabled ? -1 : 0}
      target={type === 'link' && href !== '#' ? '_blank' : ''}
      onClick={handleAction}
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
              display: (!underline && !isHovered) || disabled ? 'none' : 'inline-block',
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
