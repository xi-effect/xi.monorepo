import { Switcher } from 'pkg.inputs.switcher';
import { useState } from 'react';

const TestComponents = () => {
  const [isError, setIsError] = useState(true);

  const arr1 = ['Первый', 'Второй', 'Третий', 'Четвёртый'];
  const arr2 = ['I', 'II', 'III', 'IV'];

  const [value1, setValue1] = useState(arr1[0]);
  const [value2, setValue2] = useState(arr1[0]);
  const [value3, setValue3] = useState(arr1[0]);
  const [value4, setValue4] = useState('');

  const onChangeValue1 = (value: string) => {
    setValue1(value);
  };
  const onChangeValue2 = (value: string) => {
    setValue2(value);
  };
  const onChangeValue3 = (value: string) => {
    setValue3(value);
  };
  const onChangeValue4 = (value: string) => {
    setIsError(false);
    setValue4(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px' }}>
      <Switcher size="small" currentValue={value1} values={arr1} onChange={onChangeValue1} />
      <Switcher size="medium" currentValue={value2} values={arr1} onChange={onChangeValue2} />
      <Switcher
        disabledValue={arr1[2]}
        size="large"
        currentValue={value3}
        values={arr1}
        onChange={onChangeValue3}
      />
      <Switcher
        size="medium"
        currentValue={value4}
        groupBackgroundColor="grayscale.10"
        values={arr2}
        disabledValue={arr2[2]}
        color="white"
        onChange={onChangeValue4}
        isError={isError}
      />
    </div>
  );
};
export default TestComponents;
