import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Select, SelectProps } from 'pkg.inputs.select';
import { v4 } from 'uuid';
import { Folder } from 'pkg.icons.folder';

// const items = [
//   { id: v4(), value: 'Item1' },
//   { id: v4(), value: 'Item2' },
//   { id: v4(), value: 'Item3' },
//   { id: v4(), value: 'Item4', isDisabled: true },
//   { id: v4(), value: 'Item5', isDefault: true },
// ];

const groupItems = [
  {
    id: v4(),
    title: 'Widthout attr',
    items: [
      { id: v4(), value: 'Item1' },
      { id: v4(), value: 'Item2' },
      { id: v4(), value: 'Item3' },
    ],
  },
  {
    id: v4(),
    items: [
      { id: v4(), value: 'Item4', isDisabled: true },
      { id: v4(), value: 'Item5', isDefault: true },
    ],
  },
];

const TestComponents = () => {
  const [value, setValue] = useState('');

  const changeValue = (newVal: string) => {
    setValue(newVal);
  };

  const testSelect: SelectProps = {
    id: v4(),
    // items,
    groups: groupItems,
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
