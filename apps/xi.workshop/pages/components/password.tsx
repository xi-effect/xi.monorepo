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
    fieldType: 'sign_up',
    size: 's',
  },
  {
    fieldType: 'sign_up',
    size: 'm',
  },

  {
    fieldType: 'sign_in',
    size: 's',
  },
  {
    fieldType: 'sign_in',
    size: 'm',
  },
  {
    fieldType: 'sign_in',
    size: 's',
    type: 'warning',
  },
  {
    fieldType: 'sign_in',
    size: 'm',
    type: 'warning',
  },
  {
    fieldType: 'sign_in',
    size: 's',
    type: 'error',
    errorWindow: true,
    errorWindowContent: Error,
  },
  {
    fieldType: 'sign_in',
    size: 'm',
    type: 'error',
    errorWindow: true,
    errorWindowContent: Error,
  },
  {
    fieldType: 'sign_in',
    size: 's',
    type: 'disabled',
  },
  {
    fieldType: 'sign_in',
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
