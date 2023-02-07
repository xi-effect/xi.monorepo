import React from 'react';
import { Stack } from '@mui/material';
import { Select, SelectProps } from 'pkg.inputs.select';

const testSelect: SelectProps = {
  items: ['Item1', 'Item2', 'Item3'],
};

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }}>
    <Select {...testSelect} />
  </Stack>
);

export default TestComponents;
