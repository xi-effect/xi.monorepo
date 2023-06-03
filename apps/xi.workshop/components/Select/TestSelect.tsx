import React, { useState } from 'react';
import { Select } from 'pkg.inputs.select';

export const TestSelect = (staticData: any) => {
  const [value, setValue] = useState('');

  const onChange = (newVal: string) => {
    setValue(newVal);
  };

  const testData = {
    ...staticData,
    value,
    onChange,
  };

  return <Select {...testData} />;
};
