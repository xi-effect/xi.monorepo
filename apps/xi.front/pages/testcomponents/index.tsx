import React from 'react';
import { Link, Stack } from '@mui/material';
import { TestSelect } from 'components/TestComponents/Select';
import { selectTest } from 'components/TestComponents/Select/data';

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }}>
    <Stack spacing={2}>
      {selectTest.map((select) => (
        <TestSelect {...select} />
      ))}
    </Stack>
    <Link href="https://github.com/">https://github.com/</Link>
  </Stack>
);

export default TestComponents;
