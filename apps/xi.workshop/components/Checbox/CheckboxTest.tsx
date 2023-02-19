import { Checkbox, CheckboxProps } from 'pkg.inputs.checkbox';
import React, { useState } from 'react';

export const ChecboxTest = (data: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const changeCheckedState = () => {
    setIsChecked((state) => !state);
  };

  const testChecbox: CheckboxProps = {
    isChecked,
    ...data,
    handleChecboxChange: changeCheckedState,
  };

  return <Checkbox {...testChecbox} />;
};
