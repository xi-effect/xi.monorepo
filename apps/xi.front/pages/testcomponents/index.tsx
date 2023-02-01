import React from 'react';
import { Stack } from '@mui/material';
import { TestComponentsData, TestComponent } from 'components/TestComponents';

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} direction="column" spacing={2}>
    {TestComponentsData.map((group: any[]) => (
      <Stack direction="row" spacing={2}>
        {group.map((data) => (
          <TestComponent {...data} />
        ))}
      </Stack>
    ))}
  </Stack>
);

export default TestComponents;
