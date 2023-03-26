import React from 'react';
import { observer } from 'mobx-react';

import { Typography, Dialog, Stack, IconButton, FormControlLabel } from '@mui/material';
import { useStore } from 'store/connect';
import { Close } from 'pkg.icons.close';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Input } from 'pkg.inputs.input';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import { Toggle } from 'pkg.inputs.toggle';
import { Button } from 'pkg.inputs.button';
import { Checkbox } from 'pkg.inputs.checkbox';

type DataChannelType = {
  label: string;
  nameControl: 'channel.ads' | 'channel.task' | 'channel.video' | 'channel.chat';
};

const types: DataChannelType[] = [
  {
    label: 'Объявления',
    nameControl: 'channel.ads',
  },
  {
    label: 'Задания',
    nameControl: 'channel.task',
  },
  {
    label: 'Видеоконференции',
    nameControl: 'channel.video',
  },
  {
    label: 'Чат со студентами',
    nameControl: 'channel.chat',
  },
];

type ChannelType = {
  ads: boolean;
  task: boolean;
  video: boolean;
  chat: boolean;
};

type FormValues = {
  name: string;
  teacher: string;
  channel: ChannelType;
  private: boolean;
};

const schema = yup
  .object({
    name: yup.string().min(0).max(100).required(),
    teacher: yup.string().min(0).max(100).required(),
    channel: yup.object({
      ads: yup.boolean(),
      task: yup.boolean(),
      videoconferencing: yup.boolean(),
      chatWithStudiends: yup.boolean(),
    }),
    private: yup.boolean(),
  })
  .required();

const DialogCategoryCreation = observer(() => {
  const rootStore = useStore();
  const { uiSt } = rootStore;

  const onClose = () => uiSt.setDialogs('categoryCreation', false);

  const { control, handleSubmit, trigger, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      teacher: '',
      private: true,
      channel: {
        ads: true,
        task: false,
        video: false,
        chat: true,
      },
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('data', data);
    trigger();
    uiSt.setDialogs('categoryCreation', false);
    reset();
  };

  return (
    <Dialog
      open={uiSt.dialogs.categoryCreation}
      onClose={() => uiSt.setDialogs('categoryCreation', false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          p: 4,
          m: 2,
          maxWidth: 'calc(100% - 16px)',
          width: '600px',
          borderRadius: '16px',
          border: '1px solid #E6E6E6',
          bgcolor: 'grayscale.0',
          boxShadow: 'none',
          position: 'relative',
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
        }}
      >
        <Typography variant="xl" sx={{ fontWeight: 600 }}>
          Создать категорию
        </Typography>
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
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          width: '100%',
        }}
      >
        <Typography variant="m" sx={{ mt: 3 }}>
          Название
        </Typography>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Введите название"
              autoComplete="on"
              {...field}
              sx={{
                mt: 1,
                backgroundColor: 'grayscale.0',
              }}
            />
          )}
        />
        <Typography
          variant="m"
          sx={{
            mt: 3,
          }}
        >
          Преподаватель
        </Typography>
        <Controller
          name="teacher"
          control={control}
          render={({ field }) => (
            <Input
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Можно оставить пустым"
              autoComplete="on"
              {...field}
              sx={{
                mt: 1,
                backgroundColor: 'grayscale.0',
              }}
            />
          )}
        />
        <Typography
          variant="m"
          sx={{
            mt: 3,
          }}
        >
          Каналы
        </Typography>
        <Typography
          variant="s"
          sx={{
            mt: 0.5,
          }}
        >
          Какие каналы будут созданы автоматически
        </Typography>
        {types.map((channel, index) => (
          <Stack
            key={index.toString()}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              mt: 1,
              height: '32px',
              width: '100%',
            }}
          >
            <FormControlLabel
              sx={{
                ml: 0.5,
              }}
              control={
                <Controller
                  name={channel.nameControl}
                  control={control}
                  defaultValue={false}
                  render={({ field: { onChange, value, ...restProps } }) => (
                    <Checkbox size="m" {...restProps} onClick={onChange} isChecked={value} />
                  )}
                />
              }
              label={
                <Typography variant="m" sx={{ ml: 1.5 }}>
                  {channel.label}
                </Typography>
              }
            />
          </Stack>
        ))}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: '100%',
            height: '112px',
            backgroundColor: 'grayscale.5',
            p: 2,
            borderRadius: '6px',
            mt: 3,
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              width: '100%',
            }}
          >
            <Typography
              variant="l"
              sx={{
                width: '100%',
                fontWeight: 600,
              }}
            >
              Приватная категория
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 400,
              }}
            >
              Контент в данной категории будет доступен только выбранным классам и ролям
            </Typography>
          </Stack>

          <Controller
            name="private"
            control={control}
            render={({ field: { onChange, value, ...restProps } }) => (
              <Toggle size="large" {...restProps} onChange={onChange} checked={value} />
            )}
          />
        </Stack>
      </Stack>
      <Button
        sx={{
          width: '100%',
          mt: 3,
        }}
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
      >
        Создать
      </Button>
    </Dialog>
  );
});

export default DialogCategoryCreation;
