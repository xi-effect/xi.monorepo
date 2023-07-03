import { Button, Menu, ClickAwayListener } from '@mui/material';
import React, { useState, FC, useRef } from 'react';
import { v4 } from 'uuid';
import { dropdownSizes, menuStyles } from './styles';
import { DropdownPropsT } from './types';

type AnchorTimerT = Record<'opened' | 'closed', ReturnType<typeof setTimeout> | null>;

export const Dropdown: FC<DropdownPropsT> = ({
  Element,
  size = 'l',
  menuProps,
  menuSx,
  buttonSx,
  children,
  hover,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement | EventTarget>(null);
  const isOpened = Boolean(anchorEl);
  const anchorTimer = useRef<AnchorTimerT>({ opened: null, closed: null });

  const onOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpened) setAnchorEl(null);
    if (!isOpened) setAnchorEl(e.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  const onCloseMenu = () => {
    anchorTimer.current.closed = setTimeout(closeMenu, 500);
    if (anchorTimer.current.opened !== null) {
      clearTimeout(anchorTimer.current.opened);
    }
  };
  const onOpenedMenu: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    anchorTimer.current.opened = setTimeout(() => {
      setAnchorEl(e.target);
    }, 500);
  };

  const dropdownId = v4();

  return (
    <>
      <ClickAwayListener onClickAway={closeMenu}>
        <Button
          aria-controls={dropdownId}
          onClick={hover ? undefined : onOpenMenu}
          onMouseEnter={hover && onOpenedMenu}
          onMouseLeave={hover && onCloseMenu}
          variant="text"
          disableRipple
          sx={{
            ...dropdownSizes[size],
            color: 'petersburg.80',
            textTransform: 'none',
            transition: '0.3s',
            disaply: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: '5px',
            border: '1px solid',
            borderColor: 'petersburg.0',
            '&:hover': { color: 'petersburg.100', bgcolor: 'unset' },
            '&:focus-visible': {
              bgcolor: 'unset',
              border: '1px solid',
              borderColor: 'petersburg.100',
            },
            ...buttonSx,
          }}
          {...props}
        >
          <Element isOpened={isOpened} size={size} />
        </Button>
      </ClickAwayListener>
      <Menu
        id={dropdownId}
        open={isOpened}
        onClick={hover ? undefined : closeMenu}
        onMouseEnter={() => {
          if (anchorTimer.current.closed !== null) {
            clearTimeout(anchorTimer.current.closed);
          }
        }}
        onMouseLeave={hover && closeMenu}
        anchorEl={anchorEl}
        PopoverClasses={{
          root: 'Dropdown-root',
        }}
        sx={{
          ...menuStyles,
          ...menuSx,
        }}
        {...menuProps}
      >
        {children}
      </Menu>
    </>
  );
};
