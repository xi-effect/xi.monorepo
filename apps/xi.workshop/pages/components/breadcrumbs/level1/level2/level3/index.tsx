import React from 'react';
import { Stack } from '@mui/material';
import { Breadcrumbs, BreadcrumbsProps } from 'pkg.navigation.breadcrumbs';

const currentPageHistory: BreadcrumbsProps[] = [
  {
    breadcrumbs: [
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
      { name: 'Level 2', link: 'http://localhost:3300/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: 'http://localhost:3300/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 'l',
    hoverStyles: {
      color: 'grayscale.80',
    },
  },
  {
    breadcrumbs: [
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
      { name: 'Level 2', link: 'http://localhost:3300/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: 'http://localhost:3300/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 'm',
    hoverStyles: {
      color: 'grayscale.80',
    },
  },
  {
    breadcrumbs: [
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
      { name: 'Level 2', link: 'http://localhost:3300/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: 'http://localhost:3300/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 's',
    hoverStyles: {
      color: 'grayscale.80',
    },
  },

  {
    breadcrumbs: [
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
      { name: 'Level 2', link: 'http://localhost:3300/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: 'http://localhost:3300/components/breadcrumbs/level1/level2/level3',
      },
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
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
      { name: 'Level 2', link: 'http://localhost:3300/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: 'http://localhost:3300/components/breadcrumbs/level1/level2/level3',
      },
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
      { name: 'Home', link: 'http://localhost:3300/components/breadcrumbs' },
      { name: 'Level 1', link: 'http://localhost:3300/components/breadcrumbs/level1' },
      { name: 'Level 2', link: 'http://localhost:3300/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: 'http://localhost:3300/components/breadcrumbs/level1/level2/level3',
      },
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
