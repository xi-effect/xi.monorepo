import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Select, SelectProps } from 'pkg.inputs.select';
import { v4 } from 'uuid';

const TestComponents = () => {
  const [value, setValue] = useState('');

  const changeValue = (newVal: string) => {
    setValue(newVal);
  };

  const testSelect: SelectProps = {
    id: v4(),
    items: ['Item1', 'Item2', 'Item3'],
    size: 'm',
    // type: 'disabled',
    value,
    changeValue,
  };

  return (
    <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }}>
      <Select {...testSelect} />
    </Stack>
  );
};

export default TestComponents;
