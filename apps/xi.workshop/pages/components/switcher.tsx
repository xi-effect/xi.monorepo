/* eslint-disable no-alert */
import { LayoutPages } from 'kit/LayoutPages';
import { Switcher } from 'pkg.inputs.switcher';
import React from 'react';

const TestComponents = () => {
  const [value1, setValue1] = React.useState<number>(1);
  const [value2, setValue2] = React.useState<string>('яблоко');

  return (
    <LayoutPages>
      <Switcher
        currentValue={value1}
        values={[1, 2, 3]}
        onChange={(value: number) => setValue1(value)}
      />
      <Switcher
        currentValue={value2}
        values={['яблоко', 'банан', 'смородина']}
        isError
        onChange={(value: string) => setValue2(value)}
      />
      <Switcher
        currentValue="банан"
        values={['яблоко', 'банан', 'смородина']}
        color="white"
        groupBackgroundColor="#445AFF"
        size="small"
        onChange={(value: string) => alert(`вы выбрали ${value}`)}
      />
    </LayoutPages>
  );
};

export default TestComponents;
