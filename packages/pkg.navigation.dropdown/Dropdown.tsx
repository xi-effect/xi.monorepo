import { Button, Menu, ClickAwayListener } from '@mui/material';
import React, { useState, FC } from 'react';
import { v4 } from 'uuid';
import { dropdownSizes, menuStyles } from './styles';
import { DropdownPropsT } from './types';

export const Dropdown: FC<DropdownPropsT> = ({
  Element,
  size = 'l',
  menuProps,
  menuSx,
  buttonSx,
  children,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpened = Boolean(anchorEl);

  const onOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpened) setAnchorEl(null);
    if (!isOpened) setAnchorEl(e.currentTarget);
  };
  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  const dropdownId = v4();

  return (
    <>
      <ClickAwayListener onClickAway={onCloseMenu}>
        <Button
          aria-controls={dropdownId}
          onClick={onOpenMenu}
          variant="text"
          disableRipple
          sx={{
            ...dropdownSizes[size],
            color: 'grayscale.80',
            textTransform: 'none',
            transition: '0.3s',
            disaply: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: '5px',
            border: '1px solid',
            borderColor: 'grayscale.0',
            '&:hover': { color: 'grayscale.100', bgcolor: 'unset' },
            '&:focus-visible': {
              bgcolor: 'unset',
              border: '1px solid',
              borderColor: 'grayscale.100',
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
        onClick={onCloseMenu}
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
