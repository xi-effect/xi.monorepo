import React from 'react';

import { Stack, Typography } from '@mui/material';

import { observer } from 'mobx-react';
import { useFormContext, Controller, SubmitHandler } from 'react-hook-form';
import TextFieldCustom from 'kit/TextFieldCustom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useStore } from 'store/connect';
import { AvatarEditor } from 'kit/AvatarEditor';
import { useSnackbar } from 'notistack';
import { isSameDates } from 'pkg.utils';

const typographyStyles = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: 'petersburg.40',
};

type FormValues = {
  handle: string;
  username: string;
  name: string;
  surname: string;
  patronymic: string;
  birthday: Date | null;
};

const Account = observer(() => {
  const rootStore = useStore();
  const { userSt, profileSt } = rootStore;
  const { profile } = profileSt;
  const { user } = userSt;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useFormContext();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const newData: any = {};

    for (const key in data) {
      if (data[key] !== profile[key] && data[key] !== user[key]) {
        if (
          key === 'birthday' &&
          data.birthday !== null &&
          profile.birthday !== null &&
          isSameDates(data.birthday, profile.birthday)
        ) {
          return;
        }

        newData[key] = data[key];
      }
    }

    profileSt.postProfile(newData, enqueueSnackbar, closeSnackbar, reset, setError);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          bgcolor: 'petersburg.0',
          width: '100%',
          borderRadius: '8px',
          padding: '24px 36px',
        }}
      >
        <AvatarEditor letter={userSt.user.username[0]} filename={userSt?.user?.avatar?.filename} />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '32px',
            ml: 2,
          }}
        >
          {userSt.user.username}
        </Typography>
      </Stack>

      <Stack
        component="form"
        id="hook-form"
        onSubmit={handleSubmit(onSubmit)}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          bgcolor: 'petersburg.0',
          width: '100%',
          borderRadius: '8px',
          padding: '24px',
        }}
      >
        <Typography
          sx={{
            ...typographyStyles,
          }}
        >
          Псевдоним
        </Typography>
        <Controller
          name="username"
          control={control}
          defaultValue={user.username}
          render={({ field }) => (
            <TextFieldCustom
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Псевдоним"
              error={!!errors?.username}
              {...field}
              sx={{
                mt: '4px',
                backgroundColor: 'petersburg.0',
              }}
            />
          )}
        />
        <Typography
          sx={{
            mt: '24px',
            ...typographyStyles,
          }}
        >
          Имя пользователя
        </Typography>
        <Controller
          name="handle"
          control={control}
          defaultValue={user.handle}
          render={({ field }) => (
            <TextFieldCustom
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Имя пользователя"
              {...field}
              sx={{
                mt: '4px',
                backgroundColor: 'petersburg.0',
              }}
            />
          )}
        />
        <Typography
          sx={{
            mt: '24px',
            ...typographyStyles,
          }}
        >
          Имя
        </Typography>
        <Controller
          name="name"
          control={control}
          defaultValue={profile.name}
          render={({ field }) => (
            <TextFieldCustom
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Имя"
              {...field}
              sx={{
                mt: '4px',
                backgroundColor: 'petersburg.0',
              }}
            />
          )}
        />
        <Typography
          sx={{
            mt: '24px',
            ...typographyStyles,
          }}
        >
          Фамилия
        </Typography>
        <Controller
          name="surname"
          control={control}
          defaultValue={profile.surname}
          render={({ field }) => (
            <TextFieldCustom
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Фамилия"
              {...field}
              sx={{
                mt: '4px',
                backgroundColor: 'petersburg.0',
              }}
            />
          )}
        />
        <Typography
          sx={{
            mt: '24px',
            ...typographyStyles,
          }}
        >
          Отчество
        </Typography>
        <Controller
          name="patronymic"
          control={control}
          defaultValue={profile.patronymic}
          render={({ field }) => (
            <TextFieldCustom
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Отчество"
              {...field}
              sx={{
                mt: '4px',
                backgroundColor: 'petersburg.0',
              }}
            />
          )}
        />
        <Typography
          sx={{
            mt: '24px',
            ...typographyStyles,
          }}
        >
          Дата рождения
        </Typography>
        <Controller
          name="birthday"
          control={control}
          defaultValue={profile.birthday}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <DatePicker
              inputFormat="DD-MM-YYYY"
              value={value}
              maxDate={new Date()}
              onChange={(event) => {
                onChange(event);
              }}
              renderInput={(params) => (
                <TextFieldCustom
                  {...params}
                  error={!!error}
                  helperText={error?.message}
                  placeholder="День Рождения"
                />
              )}
            />
          )}
        />
      </Stack>
    </>
  );
});

export default Account;
