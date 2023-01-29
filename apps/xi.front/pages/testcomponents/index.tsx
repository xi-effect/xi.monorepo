import React from 'react';
import { Stack } from '@mui/material';
import { Link, LinkProps } from 'pkg.components.link';
import { Arrow } from 'pkg.icons.arrow';

const TestLink1: LinkProps = {
  link: 'https://images.google.com/',
  text: 'Ссылка',
  size: 'l',
  isDisabled: true,
};
const TestLink2: LinkProps = {
  link: 'https://images.google.com/',
  text: 'Ссылка',
  size: 'm',
  color: 'primary.main',
};
const TestLink3: LinkProps = {
  link: 'https://images.google.com/',
  text: 'Ссылка',
  size: 's',
  color: 'error.dark',
  CustomIcon: Arrow,
};

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }}>
    <Link {...TestLink1} />
    <Link {...TestLink2} />
    <Link {...TestLink3} />
  </Stack>
);

export default TestComponents;
