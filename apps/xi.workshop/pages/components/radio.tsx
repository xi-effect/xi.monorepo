import RadioGroup from '@mui/material/RadioGroup';
import { LayoutPages } from 'kit/LayoutPages';
import { Radio } from 'pkg.inputs.radio';

const TestGroup = ({ values, size, color, isLabel, isDefaultValue }: any) => (
  <RadioGroup
    defaultValue={isDefaultValue && values[0]}
    sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}
  >
    {values.map((value: string) => (
      <Radio
        key={value}
        value={value}
        label={isLabel && value}
        size={size}
        color={color}
        onChange={() => {}}
        disabled={value === 'disabled'}
      />
    ))}
  </RadioGroup>
);

const valuesWithDisabled = ['female', 'male', 'other', 'disabled'];
const values = ['female', 'male', 'other'];

const TestComponent = () => (
  <LayoutPages>
    <TestGroup values={valuesWithDisabled} size="large" color="primary" isLabel isDefaultValue />
    <TestGroup values={values} size="medium" color="primary" isLabel />
    <TestGroup values={values} size="small" color="primary" isLabel />

    <TestGroup values={valuesWithDisabled} size="large" color="primary" />
    <TestGroup values={values} size="medium" color="error" isDefaultValue />
    <TestGroup values={values} size="small" color="warning" />
  </LayoutPages>
  );

export default TestComponent;
