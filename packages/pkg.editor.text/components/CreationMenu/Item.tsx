/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ListItemIcon, MenuItem, Typography } from '@mui/material';
import {
  Text,
  H1,
  H2,
  H3,
  Ol,
  Ul,
  Cite,
  Objects,
  Minus,
  Picture,
  Play,
  File,
  Code,
} from 'pkg.icons';
import { Transforms } from 'slate';
import { useSlate } from 'slate-react';
import { Type } from '../../config';

import { CreationMenuConfigT } from './menuConfig';

type MenuElementT = {
  id: number;
  closeMenu: () => void;
  elem: CreationMenuConfigT;
  onClick?: (type: Type) => void;
};

const Item: React.FC<MenuElementT> = (props) => {
  const {
    id,
    onClick,
    closeMenu,
    elem: { label, icon, type },
  } = props;
  const [hover, setHover] = useState(false);

  const editor = useSlate();

  const icons: { [key: string]: React.ReactNode } = {
    text: <Text sx={{ fontSize: 16 }} />,
    h1: <H1 sx={{ fontSize: 16 }} />,
    h2: <H2 sx={{ fontSize: 16 }} />,
    h3: <H3 sx={{ fontSize: 16 }} />,
    ol: <Ol sx={{ fontSize: 16 }} />,
    ul: <Ul sx={{ fontSize: 16 }} />,
    quote: <Cite sx={{ fontSize: 16 }} />,
    advice: <Objects sx={{ fontSize: 16 }} />,
    divider: <Minus sx={{ fontSize: 16 }} />,
    image: <Picture sx={{ fontSize: 16 }} />,
    video: <Play sx={{ fontSize: 16 }} />,
    file: <File sx={{ fontSize: 16 }} />,
    code: <Code sx={{ fontSize: 16 }} />,
  };

  // @ts-ignore
  const index = editor.children.findIndex((item) => item.id === id);
  console.log('icon', icon, hover, index);

  const addBaseNode = () => {
    if (onClick) onClick(type);

    closeMenu();
    Transforms.insertNodes(
      editor,
      // @ts-ignore
      { type, children: [{ text: '' }] },
      { at: [index + 1] },
    );
  };

  return (
    <MenuItem
      onClick={addBaseNode}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ p: 0.5, height: '28px' }}
    >
      <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '24px' } }}>
        {icons[icon]}
      </ListItemIcon>
      <Typography sx={{ color: 'petersburg.80', fontWeight: 400 }} variant="s">
        {label}
      </Typography>
    </MenuItem>
  );
};

export default Item;
