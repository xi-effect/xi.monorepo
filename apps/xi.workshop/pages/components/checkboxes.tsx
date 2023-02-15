import { Stack } from '@mui/material';
import { ChecboxTest, ChecboxTestData } from 'components/Checbox';

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} spacing={4}>
    {ChecboxTestData.map((group, index) => (
      <Stack direction="row" spacing={2} key={`group_${index}`}>
        {group.map((data, index) => (
          <ChecboxTest {...data} key={`checkbox_${index}`} />
        ))}
      </Stack>
    ))}
  </Stack>
);

export default TestComponents;
