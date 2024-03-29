import * as React from 'react';
import * as yup from 'yup';
import { useRouter, NextRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, Link, InputAdornment, Box } from '@mui/material';
import { Eyeoff, Eyeon } from 'pkg.icons';
import { Input } from 'pkg.inputs.input';

type FormValues = {
  email: string;
  password: string;
};

export type SignInT = {
  /**
   * The store type is the store itself.
   */
  authorizationSt: any;
};

const schema = yup
  .object({
    email: yup.string().email().max(100).required(),
    password: yup.string().required().min(6).max(100),
  })
  .required();

export const SignIn = ({ authorizationSt }: SignInT) => {
  const {
    clickSigninButton,
    signin: { errorEmail, errorPassword },
  } = authorizationSt;

  const router: NextRouter = useRouter();

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    trigger();
    clickSigninButton(data, trigger);
  };

  const getEmailError = () => {
    if (errors.email?.message) return 'Некорректный email';
    if (errorEmail) return 'Не удалось найти аккаунт';
    return null;
  };

  const getPasswordError = () => {
    if (errors.email || errorPassword) return 'Неправильный пароль';
    return null;
  };

  return (
    <Stack
      height="100%"
      direction="column"
      justifyContent="space-between"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="column" spacing={2}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              variant="outlined"
              error={!!errors.email?.message || !!errorEmail}
              type="email"
              fullWidth
              placeholder="Электронная почта"
              autoComplete="on"
              helperText={getEmailError()}
              {...field}
              sx={{
                backgroundColor: 'petersburg.0',
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              variant="outlined"
              error={!!errors.password?.message || !!errorPassword}
              fullWidth
              placeholder="Пароль"
              autoComplete="on"
              type={showPassword ? 'text' : 'password'}
              helperText={getPasswordError()}
              {...field}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ mr: '7px' }}>
                    <Box
                      width="24px"
                      height="24px"
                      borderRadius="8px"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {!showPassword ? <Eyeoff /> : <Eyeon />}
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Link
          underline="none"
          sx={{
            cursor: 'pointer',
            color: 'primary.dark',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: '18px',
            letterSpacing: 0,
          }}
          onClick={() => router.push('/resetpassword/email')}
        >
          Восстановить пароль
        </Link>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <Link
          underline="none"
          sx={{
            cursor: 'pointer',
            color: 'primary.dark',
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '20px',
            letterSpacing: 0,
          }}
          onClick={() => router.push('/signup')}
        >
          Регистрация
        </Link>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: '120px',
            height: '48px',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: 18,
            lineHeight: '22px',
            textTransform: 'capitalize',
          }}
        >
          Войти
        </Button>
      </Stack>
    </Stack>
  );
};
