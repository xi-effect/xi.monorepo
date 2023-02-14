import React from 'react';
import { observer } from 'mobx-react';

import {
  Typography,
  Button,
  Dialog,
  DialogContent,
  Stack,
  useMediaQuery,
  DialogActions,
  Theme,
  IconButton,
  Checkbox,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { useStore } from 'store/connect';
import { Close } from 'pkg.icons.close';
import { Input } from 'pkg.inputs.input';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';

type DataChannelType = {
  label: string;
  nameControl:
    | 'channel.ads'
    | 'channel.task'
    | 'channel.videoconferencing'
    | 'channel.chatWithStudiends';
};
const dataChannal: DataChannelType[] = [
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
    nameControl: 'channel.videoconferencing',
  },
  {
    label: 'Чат со студентами',
    nameControl: 'channel.chatWithStudiends',
  },
];
type ChannelType = {
  ads: boolean;
  task: boolean;
  videoconferencing: boolean;
  chatWithStudiends: boolean;
};
type FormValues = {
  name: string;
  teacher: string;
  channel: ChannelType;
  privite: boolean;
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
    privite: yup.boolean(),
  })
  .required();

const DialogCategoryCreation = observer(() => {
  const rootStore = useStore();
  const { uiSt } = rootStore;
  const fullScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const onClose = () => uiSt.setDialogs('categoryCreation', false);
  const { control, handleSubmit, trigger, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      teacher: '',
      privite: true,
      channel: {
        ads: true,
        task: false,
        videoconferencing: false,
        chatWithStudiends: true,
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
      fullScreen={fullScreen}
      open={uiSt.dialogs.categoryCreation}
      onClose={() => uiSt.setDialogs('categoryCreation', false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          p: 4,
          pb: 0,
        }}
      >
        <Typography
          sx={{
            mt: 4,
            ml: 2,
            m: '0 auto',
            fontSize: '24px',
            fontWeight: 600,
          }}
        >
          Создать категорию
        </Typography>
        <IconButton
          sx={{
            color: 'text.secondary',
            position: 'absolute',
            fontSize: 14,
            top: '15px',
            right: '14px',
          }}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      </Stack>
      <DialogContent>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            width: '100%',
            px: 2,
          }}
        >
          <Typography
            sx={{
              mb: 1,
              mr: 'auto',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
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
                  backgroundColor: 'grayscale.0',
                  mb: 3,
                }}
              />
            )}
          />
          <Typography
            sx={{
              mb: 1,
              mr: 'auto',
              fontSize: '16px',
              fontWeight: 500,
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
                  backgroundColor: 'grayscale.0',
                  mb: 3,
                }}
              />
            )}
          />
          <Typography
            sx={{
              mb: 1,
              mr: 'auto',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Каналы
          </Typography>
          {dataChannal.map((channel, index) => (
            <Stack
              key={index.toString()}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{
                width: '100%',
                px: 2,
              }}
            >
              <FormControlLabel
                control={
                  <Controller
                    name={channel.nameControl}
                    control={control}
                    defaultValue={false}
                    render={({ field: { onChange, value, ...restProps } }) => (
                      <Checkbox size="small" {...restProps} onChange={onChange} checked={value} />
                    )}
                  />
                }
                label={
                  <Box
                    sx={{
                      fontSize: '18px',
                    }}
                  >
                    {channel.label}
                  </Box>
                }
              />
            </Stack>
          ))}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: '100%',
              backgroundColor: '#F5F5F5',
              p: 2,
              mt: 3,
              mb: 2,
              borderRadius: 6,
            }}
          >
            <Typography
              sx={{
                mb: 1,
                mr: 'auto',
                width: '100%',
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              Приватная категория
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: '100%',
              }}
            >
              <Typography
                sx={{
                  // mb: 1,
                  mr: 'auto',
                  fontSize: '16px',
                  fontWeight: 400,
                }}
              >
                Контент в данной категории будет доступен только выбранным классам и ролям
              </Typography>
              <Controller
                name="privite"
                control={control}
                render={({ field: { onChange, value, ...restProps } }) => (
                  <Switch size="medium" {...restProps} onChange={onChange} checked={value} />
                )}
              />
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ width: '100%', mx: 4, mb: 4, textTransform: 'capitalize' }}
          onClick={handleSubmit(onSubmit)}
          variant="contained"
        >
          Создать
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default DialogCategoryCreation;
