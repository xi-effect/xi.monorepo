import { ReactNode } from 'react';
import { Stack, Button } from '@mui/material';
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
      sx={{ p: 2, width: '100vw', height: '100%', minHeight: '100vh' }}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Stack
        sx={{
          width: '300px',
          border: '1px solid',
          borderColor: '#afafaf',
          borderRadius: 1,
          boxShadow: 24,
          p: 1,
        }}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        {menuArray.map((item, index) => (
          <Button
            onClick={() => router.push(item.link)}
            variant="contained"
            sx={{ width: '100%' }}
            key={index}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
        {children}
      </Stack>
    </Stack>
  );
};
