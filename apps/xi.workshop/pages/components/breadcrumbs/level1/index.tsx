import React from 'react';
import { Stack } from '@mui/material';
import { Breadcrumbs, BreadcrumbsProps } from 'pkg.navigation.breadcrumbs';

const currentPageHistory: BreadcrumbsProps[] = [
  {
    breadcrumbs: [
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
    ],
    size: 'l',
  },
  {
    breadcrumbs: [
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
    ],
    size: 'm',
  },
  {
    breadcrumbs: [
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
    ],
    size: 's',
  },
];

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} spacing={4}>
    {currentPageHistory.map((hist) => (
      <Breadcrumbs {...hist} />
    ))}
  </Stack>
);

export default TestComponents;
