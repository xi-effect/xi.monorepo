import { Stack, Typography } from '@mui/material';
import { LayoutPages } from 'kit/LayoutPages';
import { Password, PasswordProps } from 'pkg.inputs.password';

const Error = (
  <Stack>
    <Typography variant="xs">Неверный пароль.</Typography>
    <Typography variant="xs">Попробуйте ввести ещё раз или создайте новый</Typography>
  </Stack>
);

const passwords: PasswordProps[] = [
  {
    fieldType: 'setup',
    size: 's',
  },
  {
    fieldType: 'setup',
    size: 'm',
  },

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
    errorWindow: true,
    errorWindowContent: Error,
  },
  {
    fieldType: 'login',
    size: 'm',
    type: 'error',
    errorWindow: true,
    errorWindowContent: Error,
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
