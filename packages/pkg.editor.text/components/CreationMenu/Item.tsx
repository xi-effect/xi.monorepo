/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MenuItem, Stack, Typography } from '@mui/material';
import { Type } from '../../config';

import { CreationMenuConfigT, editorExample } from './menuConfig';

type EditorsT = { id: string; type: Type };

type MenuElementT = {
  index: number;
  closeMenu: () => void;
  elem: CreationMenuConfigT;
  onClick?: (type: Type) => void;
  setEditors: React.Dispatch<React.SetStateAction<EditorsT[]>>;
};

const Item: React.FC<MenuElementT> = (props) => {
  const {
    index,
    onClick,
    closeMenu,
    setEditors,
    elem: { label, icon, type },
  } = props;
  const [hover, setHover] = useState(false);

  console.log('icon', icon, hover);

  const addBaseNode = () => {
    if (onClick) onClick(type);

    closeMenu();
    setEditors((editors) => {
      const newEditors = [...editors];
      newEditors.splice(index + 1, 0, editorExample(type));
      return newEditors;
    });
  };

  return (
    <MenuItem
      onClick={addBaseNode}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* Иконка туту */}
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#333',
          }}
        >
          {label}
        </Typography>
      </Stack>
    </MenuItem>
  );
};

export default Item;
