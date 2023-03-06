import { Button, Menu, MenuItem, ClickAwayListener, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Arrow } from 'pkg.icons.arrow';
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
        <Button
          aria-controls="dropdown"
          onClick={onOpenMenu}
          variant="text"
          disableRipple
          sx={{
            color: 'grayscale.80',
            textTransform: 'none',
            transition: '0.3s',
            disaply: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '8px',
            p: '5px',
            border: '1px solid',
            borderColor: 'grayscale.0',
            '&:hover': { color: 'grayscale.100', bgcolor: 'unset' },
            ':focus': {
              bgcolor: 'unset',
              border: '1px solid',
              borderColor: 'grayscale.100',
            },
          }}
        >
          <Typography>Filled</Typography>
          <Arrow
            sx={{
              transform: `rotate(${isOpened ? '-' : ''}90deg)`,
              color: 'inherit',
              width: '12px',
            }}
          />
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
