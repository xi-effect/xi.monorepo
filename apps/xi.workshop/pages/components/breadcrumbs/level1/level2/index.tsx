import React from 'react';
import { Stack } from '@mui/material';
import { Breadcrumbs, BreadcrumbsProps } from 'pkg.navigation.breadcrumbs';

const currentPageHistory: BreadcrumbsProps[] = [
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
    ],
    size: 'l',
    hoverStyles: {
      color: 'grayscale.80',
    },
  },
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
    ],
    size: 'm',
    hoverStyles: {
      color: 'grayscale.80',
    },
  },
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
    ],
    size: 's',
    hoverStyles: {
      color: 'grayscale.80',
    },
  },

  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
    ],
    size: 'l',
    hoverStyles: {
      color: 'primary.main',
    },
    color: 'primary.light',
    lastItemColor: 'primary.dark',
  },
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
    ],
    size: 'm',
    hoverStyles: {
      color: 'primary.main',
    },
    color: 'primary.light',
    lastItemColor: 'primary.dark',
  },
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
    ],
    size: 's',
    hoverStyles: {
      color: 'primary.main',
    },
    color: 'primary.light',
    lastItemColor: 'primary.dark',
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
