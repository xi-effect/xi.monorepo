import React from 'react';

import { Stack, Typography, Theme, useMediaQuery, Button } from '@mui/material';

import { observer } from 'mobx-react';
import dayjs, { Dayjs } from 'dayjs';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextFieldCustom from 'kit/TextFieldCustom';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
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
  username: string;
  name: string;
  surname: string;
  patronymic: string;
};

const schema = yup
  .object({
    username: yup.string().max(100),
    name: yup.string().max(100),
    surname: yup.string().max(100),
    patronymic: yup.string().max(100),
  })
  .required();

const Account = observer(() => {
  const rootStore = useStore();
  const { userSt, profileSt } = rootStore;
  const { profile } = profileSt;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const formRef = React.useRef(null);

  const mobile1000: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(1000));

  const {
    control,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const openSaveConfirm = () => {
    enqueueSnackbar('saveConfirm', {
      variant: 'saveConfirm',
      persist: true,
      formRef: formRef,
    });
  };

  const closeSaveConfirm = () => {
    closeSnackbar();
  };

  watch((data, { name, type }) => {
    // console.log(data, name, type);
    if (
      data['name'] !== profile.name ||
      data['surname'] !== profile.surname ||
      data['patronymic'] !== profile.patronymic
    ) {
      openSaveConfirm();
    }

    if (
      data['name'] === profile.name &&
      data['surname'] === profile.surname &&
      data['patronymic'] === profile.patronymic
    ) {
      closeSaveConfirm();
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('data', data);
  };

  const [value, setValue] = React.useState<Dayjs | null>(null);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
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
          Никнейм
        </Typography>
        <Controller
          name="username"
          control={control}
          defaultValue={profile.name}
          render={({ field }) => (
            <TextFieldCustom
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Никнейм"
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
        {!mobile1000 && (
          <DesktopDatePicker
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextFieldCustom {...params} />}
            maxDate={dayjs()}
          />
        )}
        {mobile1000 && (
          <MobileDatePicker
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextFieldCustom {...params} />}
            maxDate={dayjs()}
          />
        )}
        <Button ref={formRef} sx={{ visibility: 'hidden' }} type="submit">
          Сохранить
        </Button>
      </Stack>
    </>
  );
});

export default Account;
