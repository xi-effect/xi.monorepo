import { Switcher } from 'pkg.inputs.switcher';
import { useState } from 'react';

const TestComponents = () => {
  const [isError, setIsError] = useState(true);

  const arr1 = ['Первый', 'Второй', 'Третий', 'Четвёртый'];
  const arr2 = ['I', 'II', 'III', 'IV'];

  const [value1, setValue1] = useState(arr1[0]);
  const [value2, setValue2] = useState('');

  const onChangeValue1 = (value: string) => {
    setValue1(value);
  };
  const onChangeValue2 = (value: string) => {
    setIsError(false);
    setValue2(value);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px' }}>
      <Switcher
        size="medium"
        currentValue={value1}
        values={arr1}
        onChangeHandler={onChangeValue1}
        disabledValue="Четвёртый"
      />

      <Switcher
        size="medium"
        currentValue={value2}
        groupBackgroundColor="grayscale.10"
        values={arr2}
        color="white"
        onChangeHandler={onChangeValue2}
        isError={isError}
        disabledValue="IV"
      />
    </div>
  );
};
export default TestComponents;
