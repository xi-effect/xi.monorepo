import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Checkbox, CheckboxProps } from 'pkg.components.checkbox';

const TestComponents = () => {
  const [isChecked, setIsChecked] = useState(true);
  const changeCheckedState = () => {
    setIsChecked((state) => !state);
  };

  const TestChecboxData: CheckboxProps = {
    size: 'l',
    icon: 'minus',
    type: 'warning',
    label: 'Label',
    isChecked,
    changeCheckedState,
  };

  return (
    <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }}>
      <Checkbox {...TestChecboxData} />
    </Stack>
  );
};

export default TestComponents;
