import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link, LinkProps } from 'pkg.navigation.link';
import { Link as LinkIcon, Arrow } from 'pkg.icons';
import { LayoutPages } from 'kit/LayoutPages';

const testLongAction = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('test long action');
      resolve('test long action');
    }, 5000);
  });

const testShortAction = () => {
  console.log('test short action');
};

export type TestLinksDataT = { data: LinkProps[]; comments: string; id: string };
const TestLinksData: TestLinksDataT[] = [
  {
    id: 'group1',
    data: [
      {
        href: 'https://github.com/',
        children: 'Ссылка',
        size: 'l',
        icon: LinkIcon,
        disabled: true,
        hoverStyles: {
          color: 'petersburg.100',
        },
      },
      {
        href: 'https://github.com/',
        children: 'Ссылка',
        size: 'm',
        icon: LinkIcon,
        underline: false,
        hoverStyles: {
          color: 'petersburg.100',
        },
      },
      {
        href: 'https://github.com/',
        children: 'Ссылка',
        size: 's',
        icon: LinkIcon,
        underline: false,
        hoverStyles: {
          color: 'petersburg.100',
        },
      },
    ],
    comments: 'Disabled link:',
  },
  {
    id: 'group2',
    data: [
      {
        onClick: testShortAction,
        children: 'Ссылка',
        size: 'l',
        color: 'primary.main',
        icon: LinkIcon,
        hoverStyles: {
          color: 'primary.dark',
        },
      },
      {
        onClick: testShortAction,
        children: 'Ссылка',
        size: 'm',
        color: 'primary.main',
        icon: LinkIcon,
        hoverStyles: {
          color: 'primary.dark',
        },
      },
      {
        onClick: testShortAction,
        children: 'Ссылка',
        size: 's',
        color: 'primary.main',
        icon: LinkIcon,
        hoverStyles: {
          color: 'primary.dark',
        },
      },
    ],
    comments: 'Ссылка с коротким действием:',
  },
  {
    id: 'group3',
    data: [
      {
        onClick: testLongAction,
        children: 'Ссылка',
        size: 'l',
        color: 'error.dark',
        icon: Arrow,
        underline: false,
      },
      {
        onClick: testLongAction,
        children: 'Ссылка',
        size: 'm',
        color: 'error.dark',
        icon: Arrow,
        underline: false,
      },
      {
        onClick: testLongAction,
        children: 'Ссылка',
        size: 's',
        color: 'error.dark',
        icon: Arrow,
        underline: false,
      },
    ],
    comments: 'Ссылка с длинным действием и кастомной иконкой:',
  },
  {
    id: 'group4',
    data: [
      {
        href: 'https://github.com/',
        children: 'Ссылка',
        size: 'l',
        color: 'success.main',
        underline: false,
        hoverStyles: {
          color: 'success.dark',
        },
      },
      {
        href: 'https://github.com/',
        children: 'Ссылка',
        size: 'm',
        color: 'success.main',
        underline: false,
        hoverStyles: {
          color: 'success.dark',
        },
      },
      {
        href: 'https://github.com/',
        children: 'Ссылка',
        size: 's',
        color: 'success.main',
        underline: false,
        hoverStyles: {
          color: 'success.dark',
        },
      },
    ],
    comments: 'Обычная ссылка:',
  },
];

const TestComponents = () => (
  <LayoutPages>
    {TestLinksData.map((group: TestLinksDataT) => (
      <Stack spacing={1} key={group.id}>
        <Typography sx={{ textAlign: 'left' }}>{group.comments}</Typography>
        <Stack direction="row" spacing={2}>
          {group.data.map((data: LinkProps) => (
            <Link {...data} key={`${group.id}-${data.size}`}>
              {data.children}
            </Link>
          ))}
        </Stack>
      </Stack>
    ))}
  </LayoutPages>
);

export default TestComponents;
