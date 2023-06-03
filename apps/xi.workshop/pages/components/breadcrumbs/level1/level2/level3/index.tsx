import React from 'react';
import { Stack } from '@mui/material';
import { Breadcrumbs, BreadcrumbsProps } from 'pkg.navigation.breadcrumbs';

const currentPageHistory: BreadcrumbsProps[] = [
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: '/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 'l',
    hoverStyles: {
      color: 'petersburg.80',
    },
  },
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: '/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 'm',
    hoverStyles: {
      color: 'petersburg.80',
    },
  },
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: '/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 's',
    hoverStyles: {
      color: 'petersburg.80',
    },
  },

  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: '/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 'l',
    hoverStyles: {
      color: 'brand.60',
    },
    color: 'brand.20',
    lastItemColor: 'brand.80',
  },
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: '/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 'm',
    hoverStyles: {
      color: 'brand.60',
    },
    color: 'brand.20',
    lastItemColor: 'brand.80',
  },
  {
    breadcrumbs: [
      { name: 'Home', link: '/components/breadcrumbs' },
      { name: 'Level 1', link: '/components/breadcrumbs/level1' },
      { name: 'Level 2', link: '/components/breadcrumbs/level1/level2' },
      {
        name: 'Level 3',
        link: '/components/breadcrumbs/level1/level2/level3',
      },
    ],
    size: 's',
    hoverStyles: {
      color: 'brand.60',
    },
    color: 'brand.20',
    lastItemColor: 'brand.80',
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
