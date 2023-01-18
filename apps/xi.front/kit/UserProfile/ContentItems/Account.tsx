import React from 'react';

import { Stack, Typography } from '@mui/material';

import { observer } from 'mobx-react';
import dayjs, { Dayjs } from 'dayjs';
import { useFormContext, Controller, SubmitHandler } from 'react-hook-form';
import TextFieldCustom from 'kit/TextFieldCustom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useStore } from 'store/connect';
import { AvatarEditor } from 'kit/AvatarEditor';
import { useSnackbar } from 'notistack';

const typographyStyles = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: 'grayscale.40',
};

type FormValues = {
  handle: string;
  username: string;
  name: string;
  surname: string;
  patronymic: string;
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

  console.log('errors', errors);

  const [value, setValue] = React.useState<Dayjs | null>(null);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('data', data);
    const newData = {};
    for (const key in data) {
      if (data[key] !== profile[key] && data[key] !== user.handle && data[key] !== user.username) {
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
          bgcolor: 'grayscale.0',
          width: '100%',
          height: '120px',
          borderRadius: '8px',
          padding: '24px 36px',
        }}
      >
        <AvatarEditor letter={userSt.user.username[0]} />
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
          bgcolor: 'grayscale.0',
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
                backgroundColor: 'grayscale.0',
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
                backgroundColor: 'grayscale.0',
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
                backgroundColor: 'grayscale.0',
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
                backgroundColor: 'grayscale.0',
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
                backgroundColor: 'grayscale.0',
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
        <DatePicker
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextFieldCustom {...params} />}
          maxDate={dayjs()}
        />
      </Stack>
    </>
  );
});

export default Account;
