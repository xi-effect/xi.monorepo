import React from 'react';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Scroll } from 'pkg.components.scroll';
import { Announce, Calendar, Updates } from 'pkg.icons';
import { useRouter } from 'next/router';

const iconsDict = {
  posts: <Announce />,
  schedule: <Calendar />,
  updates: <Updates />,
};

type MenuItemT = {
  id: number;
  type: string;
  name: string;
};

const menuItems: MenuItemT[] = [
  {
    id: 0,
    type: 'posts',
    name: 'Объявления',
  },
  {
    id: 1,
    type: 'schedule',
    name: 'Календарь',
  },
  {
    id: 2,
    type: 'updates',
    name: 'Обновления',
  },
];

const Channel: React.FC<{ menuItem: MenuItemT }> = ({ menuItem }) => {
  const router = useRouter();

  const handleChannelClick = () => {
    console.log(`click ${menuItem.name} id: ${menuItem.id}`);
    router.push(`/home/${menuItem.type}`);
  };

  const isSameChannel = false;

  return (
    <MenuItem
      onClick={handleChannelClick}
      sx={{
        width: 'calc(100% - 16px)',
        borderRadius: 1,
        height: 36,
        ml: 1,
        mr: 1,
        pl: '6px',
        pr: '6px',
        bgcolor: isSameChannel ? 'brand.0' : null,

        '.MuiListItemText-root': {
          color: isSameChannel ? 'brand.80' : null,
        },

        svg: {
          fill: isSameChannel ? '#445AFF' : '#000',
        },

        '&:hover': {
          bgcolor: 'brand.0',

          '.MuiListItemText-root': {
            color: 'brand.80',
          },

          svg: {
            fill: '#445AFF',
          },
        },
      }}
    >
      <ListItemIcon
        sx={{
          width: '24px',
          height: '24px',
          minWidth: '24px !important',
        }}
      >
        {iconsDict[menuItem.type]}
      </ListItemIcon>
      <ListItemText
        disableTypography
        sx={{
          pl: '6px',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '18px',
        }}
      >
        {menuItem.name}
      </ListItemText>
    </MenuItem>
  );
};

const MenuHome = () => (
  <MenuList
    sx={{
      width: '100%',
      height: '100%',
      pl: 0,
      pr: 0,
      zIndex: 1,
      overflow: 'hidden',
    }}
  >
    <Scroll>
      {menuItems.map((menuItem, index) => (
        <Channel menuItem={menuItem} key={index.toString()} />
      ))}
    </Scroll>
  </MenuList>
);

export default MenuHome;
