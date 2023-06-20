import { Box, Stack, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { observer } from 'mobx-react';
import { useFormContext, Controller, SubmitHandler } from 'react-hook-form';
import { useStore } from 'store/connect';
import { useSnackbar } from 'notistack';
import { Select } from 'pkg.inputs.select';
import { Palette } from 'pkg.icons';

const paletteSelectItems = [
  { id: 'system', value: 'system', label: 'Как в системе' },
  { id: 'light', value: 'light', label: 'Светлая' },
  { id: 'dark', value: 'dark', label: 'Тёмная' },
];

type FormValues = {
  theme: string;
};

const Appearance = observer(() => {
  const rootStore = useStore();
  const { profileSt } = rootStore;
  const { profile } = profileSt;

  const { control, handleSubmit, reset, setError } = useFormContext();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    Cookies.set('xi.user-theme', data.theme);
    const newData: any = {};

    for (const key in data) {
      if (data[key] !== profile[key]) {
        newData[key] = data[key];
      }
    }

    profileSt.postProfile(newData, enqueueSnackbar, closeSnackbar, reset, setError);
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          bgcolor: 'bg.block',
          width: '100%',
          borderRadius: '8px',
          padding: 0.5,
        }}
        spacing={1}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            p: 1.5,
            width: '100%',
            height: '52px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
            }}
            variant="l"
          >
            Внешний вид
          </Typography>
        </Stack>
        <Stack
          component="form"
          id="hook-form"
          onSubmit={handleSubmit(onSubmit)}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            p: 1.5,
            width: '100%',
            height: '72px',
          }}
        >
          <Palette sx={{ fontSize: 32 }} />
          <Typography
            sx={{
              ml: 2,
              fontWeight: 600,
            }}
            variant="m"
          >
            Тема оформления
          </Typography>
          <Box sx={{ ml: 'auto' }}>
            <Controller
              name="theme"
              control={control}
              defaultValue={profile.theme}
              render={({ field: { onChange, value } }) => (
                <Select
                  value={value}
                  changeValue={onChange}
                  size="m"
                  id="system"
                  items={paletteSelectItems}
                />
              )}
            />
          </Box>
        </Stack>
      </Stack>
      <div />
    </>
  );
});

export default Appearance;
