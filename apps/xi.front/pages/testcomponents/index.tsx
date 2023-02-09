import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Select, SelectProps } from 'pkg.inputs.select';
import { v4 } from 'uuid';
import { Folder } from 'pkg.icons.folder';

const items = ['Item1', 'Item2', 'Item3'];

const TestComponents = () => {
  const [value, setValue] = useState('');

  const changeValue = (newVal: string) => {
    setValue(newVal);
  };

  const testSelect: SelectProps = {
    id: v4(),
    items,
    cancelItem: 'Item',
    size: 's',
    type: 'warning',
    Icon: Folder,
    label: 'Список Список Список Список Список Список',
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
