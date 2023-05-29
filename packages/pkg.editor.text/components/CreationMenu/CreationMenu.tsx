import React from 'react';
import Menu from '@mui/material/Menu';
import { creationMenuConfig } from './menuConfig';
import { menuStyles } from './styles';
import Item from './Item';

type NewItemMenuProps = {
  id: number;
  closeMenu: () => void;
  anchorEl: Element | null;
};

export const CreationMenu = React.memo((props: NewItemMenuProps) => {
  const { id, anchorEl, closeMenu } = props;

  return (
    <Menu
      open={!!anchorEl}
      onClose={closeMenu}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={menuStyles}
    >
      {creationMenuConfig.map((elem, i) => (
        <Item id={id} key={i} elem={elem} closeMenu={closeMenu} />
      ))}
    </Menu>
  );
});

CreationMenu.displayName = 'CreationMenu';
