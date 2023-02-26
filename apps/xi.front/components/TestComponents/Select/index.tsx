import React, { useState } from 'react';
import { Select } from 'pkg.inputs.select';

export const TestSelect = (staticData: any) => {
  const [value, setValue] = useState('');

  const changeValue = (newVal: string) => {
    setValue(newVal);
  };

  const testData = {
    ...staticData,
    value,
    changeValue,
  };

  return <Select {...testData} />;
};
