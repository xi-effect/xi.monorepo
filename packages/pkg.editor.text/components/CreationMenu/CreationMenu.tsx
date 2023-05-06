import React from 'react';
import Menu from '@mui/material/Menu';
import { creationMenuConfig } from './menuConfig';
import { menuStyles } from './styles';
import Item from './Item';
import { Type } from '../../config';

type EditorsT = { id: string; type: Type };

type NewItemMenuProps = {
  index: number;
  closeMenu: () => void;
  anchorEl: Element | null;
  setEditors: React.Dispatch<React.SetStateAction<EditorsT[]>>;
};

export const CreationMenu = React.memo((props: NewItemMenuProps) => {
  const { index, anchorEl, closeMenu, setEditors } = props;

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
        <Item key={i} index={index} elem={elem} closeMenu={closeMenu} setEditors={setEditors} />
      ))}
    </Menu>
  );
});

CreationMenu.displayName = 'CreationMenu';
