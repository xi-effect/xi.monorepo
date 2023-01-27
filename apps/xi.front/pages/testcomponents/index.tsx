import React from 'react';
import { Stack } from '@mui/material';
import { Checkbox } from 'pkg.components.checkbox';

const TestComponents = () => {
  const test = 'Test';
  // const [isChecked, setIsChecked] = useState(false);
  // const changeCheckedState = () => {
  //   setIsChecked((state) => !state);
  // };

  // const TestChecboxData: CheckboxProps = {
  //   size: 'l',
  //   icon: 'check',
  //   // type: 'disabled',
  //   label: 'Label',
  //   isChecked,
  //   changeCheckedState,
  // };

  return (
    <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }}>
      <Checkbox />
      {test}
    </Stack>
  );
};

export default TestComponents;
