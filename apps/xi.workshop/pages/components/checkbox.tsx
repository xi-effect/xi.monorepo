import { Stack } from '@mui/material';
import { ChecboxTest, ChecboxTestData } from 'components/Checkbox';
import { LayoutPages } from 'kit/LayoutPages';

const TestComponents = () => (
  <LayoutPages>
    {ChecboxTestData.map((group, index) => (
      <Stack direction="row" spacing={2} key={`group_${index}`}>
        {group.map((data, index) => (
          <ChecboxTest {...data} key={`checkbox_${index}`} />
        ))}
      </Stack>
    ))}
  </LayoutPages>
);

export default TestComponents;
