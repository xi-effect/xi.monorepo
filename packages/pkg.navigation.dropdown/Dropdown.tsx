import { Button, Menu, ClickAwayListener, Typography } from '@mui/material';
import React, { useState, FC } from 'react';
import { Arrow } from 'pkg.icons.arrow';
import { v4 } from 'uuid';
import { dropdownSizes, dropdownIconSizes, MenuProps } from './styles';
import { DropdownPropsT } from './types';

export const Dropdown: FC<DropdownPropsT> = ({ name, size = 'l', children, ...props }) => {
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
            justifyContent: 'flex-start',
            p: '5px',
            border: '1px solid',
            borderColor: 'grayscale.0',
            '&:hover': { color: 'grayscale.100', bgcolor: 'unset' },
            '&:focus-visible': {
              bgcolor: 'unset',
              border: '1px solid',
              borderColor: 'grayscale.100',
            },
          }}
          {...props}
        >
          <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}>{name}</Typography>
          <Arrow
            sx={{
              ...dropdownIconSizes[size],
              transform: `rotate(${isOpened ? '-' : ''}90deg)`,
              color: 'inherit',
            }}
          />
        </Button>
      </ClickAwayListener>
      <Menu
        id={dropdownId}
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
        {children}
      </Menu>
    </>
  );
};
