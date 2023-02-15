import React from 'react';
import { Stack } from '@mui/material';
import { Breadcrumbs } from 'pkg.navigation.breadcrumbs';

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} spacing={4}>
    <Breadcrumbs />
  </Stack>
);

export default TestComponents;
