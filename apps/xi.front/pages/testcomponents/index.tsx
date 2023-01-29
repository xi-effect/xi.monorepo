import React from 'react';
import { Stack } from '@mui/material';
import { Link, LinkProps } from 'pkg.components.link';

const TestLink: LinkProps = {
  text: 'test Link',
};

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }}>
    <Link {...TestLink} />
  </Stack>
);

export default TestComponents;
