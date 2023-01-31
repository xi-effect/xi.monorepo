import React from 'react';
import { Stack } from '@mui/material';
import { Link, LinkProps } from 'pkg.components.link';
import { Link as LinkIcon } from 'pkg.icons.link';

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

const TestLink1: LinkProps = {
  action: 'https://github.com/',
  text: 'Ссылка',
  size: 'l',
  Icon: LinkIcon,
  // isDisabled: true,
};
const TestLink2: LinkProps = {
  action: testShortAction,
  text: 'Ссылка',
  size: 'm',
  color: 'primary.main',
  Icon: LinkIcon,
  visitedStyles: {
    color: 'primary.dark',
  },
  hoverStyles: {
    color: 'primary.dark',
  },
};
const TestLink3: LinkProps = {
  action: testLongAction,
  text: 'Ссылка',
  size: 's',
  color: 'error.dark',
  hideUnderline: true,
};

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }}>
    <Link {...TestLink1} />
    <Link {...TestLink2} />
    <Link {...TestLink3} />
  </Stack>
);

export default TestComponents;
