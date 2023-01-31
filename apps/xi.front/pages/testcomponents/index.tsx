import { Switcher } from 'pkg.components.switcher';
import { useState } from 'react';

const TestComponents = () => {
  const [isError, setIsError] = useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px' }}>
      <Switcher
        values={['Первый', 'Второй', 'Третий', 'Четвёртый']}
        onChangeHandler={(value: string) => {
          console.log(value);
        }}
      />
      <Switcher
        values={['I', 'II', 'III', 'IV']}
        defaultValue="I"
        onChangeHandler={(value: string) => {
          console.log(value);
        }}
      />
      <Switcher
        groupBackgroundColor="grayscale.40"
        values={['I', 'II', 'III', 'IV']}
        defaultValue="I"
        color="white"
        onChangeHandler={(value: number) => {
          console.log(value);
        }}
      />
      <Switcher
        groupBackgroundColor="grayscale.40"
        values={[1, 2, 3, 4]}
        color="white"
        onChangeHandler={(value: number) => {
          setIsError(false);
          console.log(value);
        }}
        isError={isError}
      />
    </div>
  );
};
export default TestComponents;
