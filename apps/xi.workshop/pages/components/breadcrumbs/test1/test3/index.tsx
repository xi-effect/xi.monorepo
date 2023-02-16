import React from 'react';
import { Stack } from '@mui/material';
import { Breadcrumbs, BreadcrumbsProps } from 'pkg.navigation.breadcrumbs';

const currentPageHistory: BreadcrumbsProps = {
  breadcrumbs: [
    { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
    { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/test1' },
    { name: 'Level 2', link: 'http://localhost:3300/components/breadcrumbs/test1/test3' },
  ],
  size: 'l',
  hoverStyles: {
    color: 'grayscale.80',
  },
};

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} spacing={4}>
    <Breadcrumbs {...currentPageHistory} />
  </Stack>
);

export default TestComponents;
