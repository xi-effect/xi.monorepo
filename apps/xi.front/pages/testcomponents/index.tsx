import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Checkbox, CheckboxProps } from 'pkg.inputs.checkbox';

const TestComponents = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  const changeCheckedState1 = () => {
    setIsChecked1((state) => !state);
  };
  const changeCheckedState2 = () => {
    setIsChecked2((state) => !state);
  };
  const changeCheckedState3 = () => {
    setIsChecked3((state) => !state);
  };
  const changeCheckedState4 = () => {
    setIsChecked4((state) => !state);
  };

  const TestChecbox1: CheckboxProps = {
    size: 'l',
    icon: 'minus',
    // type: 'warning',
    // label: 'Label',
    isChecked: isChecked1,
    handleChecboxChange: changeCheckedState1,
  };
  const TestChecbox2: CheckboxProps = {
    size: 'l',
    // icon: 'minus',
    type: 'warning',
    // label: 'Label',
    isChecked: isChecked2,
    handleChecboxChange: changeCheckedState2,
  };
  const TestChecbox3: CheckboxProps = {
    size: 'l',
    // icon: 'minus',
    type: 'error',
    // label: 'Label',
    isChecked: isChecked3,
    handleChecboxChange: changeCheckedState3,
  };
  const TestChecbox4: CheckboxProps = {
    size: 'l',
    // icon: 'minus',
    type: 'disabled',
    // label: 'Label',
    isChecked: isChecked4,
    handleChecboxChange: changeCheckedState4,
  };

  return (
    <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} direction="row" spacing={1}>
      <Checkbox {...TestChecbox1} />
      <Checkbox {...TestChecbox2} />
      <Checkbox {...TestChecbox3} />
      <Checkbox {...TestChecbox4} />
    </Stack>
  );
};

export default TestComponents;
