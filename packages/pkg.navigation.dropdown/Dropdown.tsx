import { Button, Menu, MenuItem, ClickAwayListener } from '@mui/material';
import React, { useState } from 'react';
import { MenuProps } from './styles';

export const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpened = Boolean(anchorEl);

  const onOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpened) setAnchorEl(null);
    if (!isOpened) setAnchorEl(e.currentTarget);
  };
  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ClickAwayListener onClickAway={onCloseMenu}>
        <Button aria-controls="dropdown" onClick={onOpenMenu}>
          Open menu
        </Button>
      </ClickAwayListener>
      <Menu
        id="dropdown"
        open={isOpened}
        onClick={onCloseMenu}
        onChange={(e) => console.log(e.target)}
        anchorEl={anchorEl}
        PopoverClasses={{
          root: 'Dropdown-root',
        }}
        sx={{
          ...MenuProps,
        }}
      >
        <MenuItem>Item 1</MenuItem>
      </Menu>
    </>
  );
};
