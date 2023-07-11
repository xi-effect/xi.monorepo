import React, { ChangeEvent } from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { observer } from 'mobx-react';
import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import { Close } from 'pkg.icons';
import { useStore } from 'store/connect';
import { Input } from 'pkg.inputs.input';
import { Select } from 'pkg.inputs.select';
import TextFieldCustom from 'kit/TextFieldCustom';

type FormValues = {
  limit: number;
  date: Date | null;
  time: string;
  roles: string[];
};

const schema = yup
  .object({
    limit: yup.number(),
    date: yup.date(),
    time: yup.string(),
    roles: yup.array(),
  })
  .required();

const DialogInvite = observer(() => {
  const rootStore = useStore();
  const { uiSt } = rootStore;

  const onSubmit = (data: any) => {
    trigger();
    console.log('data', data);
  };

  const { control, handleSubmit, trigger } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onClose = () => uiSt.setDialogs('communityInvite', false);

  return (
    <Dialog
      open={uiSt.dialogs.communityInvite}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      PaperProps={{
        sx: {
          m: 2,
          maxWidth: 'calc(100% - 16px)',
          width: '600px',
          borderRadius: '16px',
          border: '1px solid #E6E6E6',
          bgcolor: 'petersburg.0',
          boxShadow: 'none',
          position: 'relative',
        },
      }}
    >
      <IconButton
        sx={{
          color: 'text.secondary',
          position: 'absolute',
          top: '12px',
          right: '12px',
        }}
        onClick={onClose}
      >
        <Close />
      </IconButton>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          p: 4,
          height: '100%',
          width: '100%',
        }}
      >
        <Typography textAlign="center" variant="xl" sx={{ fontWeight: 600, width: '100%' }}>
          Создать приглашение
        </Typography>
        <Typography textAlign="left" variant="m" sx={{ mt: 3, mb: 1, width: '100%' }}>
          Максимальное количество использований
        </Typography>
        <Controller
          name="limit"
          control={control}
          render={({ field }) => (
            <Input
              variant="outlined"
              type="number"
              fullWidth
              placeholder="Лимит"
              autoComplete="on"
              {...field}
              sx={{
                backgroundColor: 'petersburg.0',
              }}
            />
          )}
        />
        <Typography variant="m" textAlign="left" sx={{ mt: 3, width: '100%' }}>
          Ограничение по времени
        </Typography>
        <Typography
          variant="m"
          textAlign="left"
          sx={{ mt: 0.5, mb: 1, fontWeight: 400, color: 'petersburg.60', width: '100%' }}
        >
          Для приглашения без ограничения оставить пустым
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          sx={{ width: '100%' }}
        >
          <Controller
            name="date"
            defaultValue={null}
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                inputFormat="DD-MM-YYYY"
                value={value}
                onChange={(event) => {
                  onChange(event);
                }}
                renderInput={(params) => (
                  <TextFieldCustom
                    {...params}
                    sx={{ width: '100%' }}
                    placeholder="Ограничение по времени"
                  />
                )}
              />
            )}
          />
          <Controller
            name="time"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TimePicker
                value={value}
                onChange={(event: string | ChangeEvent<Element>) => {
                  onChange(event);
                }}
                renderInput={(params) => (
                  <TextFieldCustom
                    {...params}
                    sx={{ width: '180px' }}
                    placeholder="Ограничение по времени"
                  />
                )}
              />
            )}
          />
        </Stack>
        <Typography variant="m" textAlign="left" sx={{ mt: 3, mb: 1, width: '100%' }}>
          Роль
        </Typography>
        <Controller
          name="roles"
          control={control}
          render={({ field }) => (
            <Select
              id="level-label"
              {...field}
              sx={{ width: '100%' }}
              items={[
                { id: '0', value: '0' },
                { id: '1', value: '1' },
              ]}
            />
          )}
        />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{
            width: '100%',
            mt: 3,
          }}
        >
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{
              width: '132px',
              height: '48px',
              boxShadow: 'none',
              borderRadius: 1,
              color: 'petersburg.80',
              '&:hover': {
                boxShadow: 'none',
                color: 'petersburg.80',
              },
            }}
          >
            Отмена
          </Button>
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              width: '140px',
              height: '48px',
              boxShadow: 'none',
              borderRadius: 1,
              color: 'petersburg.0',
              fontSize: '18px',
              textTransform: 'capitalize',
              '&:hover': {
                boxShadow: 'none',
                color: 'petersburg.0',
              },
            }}
          >
            Создать
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
});

export default DialogInvite;
