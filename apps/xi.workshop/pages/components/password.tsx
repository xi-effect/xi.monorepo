import { Stack } from '@mui/material';
import { LayoutPages } from 'kit/LayoutPages';
import { Password, PasswordProps } from 'pkg.inputs.password';

const passwords: PasswordProps[] = [
  {
    fieldType: 'login',
    size: 's',
  },
  {
    fieldType: 'login',
    size: 'm',
  },
  {
    fieldType: 'login',
    size: 's',
    type: 'warning',
  },
  {
    fieldType: 'login',
    size: 'm',
    type: 'warning',
  },
  {
    fieldType: 'login',
    size: 's',
    type: 'error',
  },
  {
    fieldType: 'login',
    size: 'm',
    type: 'error',
  },
  {
    fieldType: 'login',
    size: 's',
    type: 'disabled',
  },
  {
    fieldType: 'login',
    size: 'm',
    type: 'disabled',
  },

  {
    fieldType: 'setup',
    size: 's',
  },
  {
    fieldType: 'setup',
    size: 'm',
  },
];

const TestComponent = () => (
  <LayoutPages>
    <Stack display="column" spacing={4}>
      {passwords.map((pass) => (
        <Password {...pass} />
      ))}
    </Stack>
  </LayoutPages>
);

export default TestComponent;
