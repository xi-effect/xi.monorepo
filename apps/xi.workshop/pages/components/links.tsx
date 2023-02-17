import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link, LinkProps } from 'pkg.navigation.link';
import { Link as LinkIcon } from 'pkg.icons.link';
import { Arrow } from 'pkg.icons.arrow';

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
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 'l',
        Icon: LinkIcon,
        isDisabled: true,
        hoverStyles: {
          color: 'grayscale.100',
        },
      },
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 'm',
        Icon: LinkIcon,
        isDisabled: true,
        hoverStyles: {
          color: 'grayscale.100',
        },
      },
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 's',
        Icon: LinkIcon,
        isDisabled: true,
        hoverStyles: {
          color: 'grayscale.100',
        },
      },
    ],
    comments: 'Disabled link:',
  },
  {
    id: 'group2',
    data: [
      {
        action: testShortAction,
        text: 'Ссылка',
        size: 'l',
        color: 'primary.main',
        Icon: LinkIcon,
        hoverStyles: {
          color: 'primary.dark',
        },
      },
      {
        action: testShortAction,
        text: 'Ссылка',
        size: 'm',
        color: 'primary.main',
        Icon: LinkIcon,
        hoverStyles: {
          color: 'primary.dark',
        },
      },
      {
        action: testShortAction,
        text: 'Ссылка',
        size: 's',
        color: 'primary.main',
        Icon: LinkIcon,
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
        action: testLongAction,
        text: 'Ссылка',
        size: 'l',
        color: 'error.dark',
        Icon: Arrow,
        hideUnderline: true,
      },
      {
        action: testLongAction,
        text: 'Ссылка',
        size: 'm',
        color: 'error.dark',
        Icon: Arrow,
        hideUnderline: true,
      },
      {
        action: testLongAction,
        text: 'Ссылка',
        size: 's',
        color: 'error.dark',
        Icon: Arrow,
        hideUnderline: true,
      },
    ],
    comments: 'Ссылка с длинным действием и кастомной иконкой:',
  },
  {
    id: 'group4',
    data: [
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 'l',
        color: 'success.main',
        hideUnderline: true,
        hoverStyles: {
          color: 'success.dark',
        },
      },
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 'm',
        color: 'success.main',
        hideUnderline: true,
        hoverStyles: {
          color: 'success.dark',
        },
      },
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 's',
        color: 'success.main',
        hideUnderline: true,
        hoverStyles: {
          color: 'success.dark',
        },
      },
    ],
    comments: 'Обычная ссылка:',
  },
];

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} spacing={4}>
    {TestLinksData.map((group: TestLinksDataT) => (
      <Stack spacing={1} key={group.id}>
        <Typography sx={{ textAlign: 'left' }}>{group.comments}</Typography>
        <Stack direction="row" spacing={2}>
          {group.data.map((data: LinkProps) => (
            <Link {...data} key={`${group.id}-${data.size}`} />
          ))}
        </Stack>
      </Stack>
    ))}
  </Stack>
);

export default TestComponents;
