import { ReactNode } from 'react';
import { Stack, ListItem, ListItemButton, List } from '@mui/material';
import { useRouter, NextRouter } from 'next/router';

export type NavigationT = {
  title?: string;
  noIndex?: boolean;
  children: ReactNode;
};

const menuArray = [
  {
    link: '/components/badge',
    label: 'Badge',
  },
  {
    link: '/components/checkbox',
    label: 'Checkbox',
  },
  {
    link: '/components/file',
    label: 'File',
  },
  {
    link: '/components/link',
    label: 'Link',
  },
];

export const Navigation = ({ children }: NavigationT) => {
  const router: NextRouter = useRouter();

  return (
    <Stack
      sx={{ p: 2, height: '100%', overflow: 'auto', position: 'relative' }}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Stack
        sx={{
          position: 'sticky',
          top: 0,
          width: '300px',
          borderRight: '1px solid',
          borderColor: '#afafaf',
          p: 1,
        }}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <List>
          {menuArray.map((item, index) => (
            <ListItem
              disablePadding
              onClick={() => router.push(item.link)}
              sx={{ width: '100%' }}
              key={index}
            >
              <ListItemButton sx={{ width: '200px' }}>{item.label}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
      <Stack
        sx={{ width: '100%' }}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {children}
      </Stack>
    </Stack>
  );
};
