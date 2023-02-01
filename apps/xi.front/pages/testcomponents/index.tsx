import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link, LinkProps } from 'pkg.components.link';
import { TestLinksData, TestLinksDataT } from './data';

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} spacing={4}>
    {TestLinksData.map((group: TestLinksDataT) => (
      <Stack spacing={1}>
        <Typography sx={{ textAlign: 'left' }}>{group.comments}</Typography>
        <Stack direction="row" spacing={2}>
          {group.data.map((data: LinkProps) => (
            <Link {...data} />
          ))}
        </Stack>
      </Stack>
    ))}
  </Stack>
);

export default TestComponents;
