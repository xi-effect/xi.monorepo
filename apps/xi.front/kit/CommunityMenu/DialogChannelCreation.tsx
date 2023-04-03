/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { observer } from 'mobx-react';

import { Dialog, IconButton, RadioGroup, Stack, Typography } from '@mui/material';

import { useStore } from 'store/connect';

import { Controller, useForm } from 'react-hook-form';

import * as yup from 'yup';

// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Input } from 'pkg.inputs.input';
import { Announce, Camera, Chat, Task, Close } from 'pkg.icons';
import { Radio } from 'pkg.inputs.radio';
import { Button } from 'pkg.inputs.button';
import RootStore from 'store/rootStore';

type ContentType = {
  label: string;
  description: string;
  icon: React.ReactNode;
  currentType: RadioType;
};

const content: ContentType[] = [
  {
    label: 'Объявления',
    description: 'Держите ваших студентов в курсе всех новостей вашего\u00A0сообщества',
    icon: <Announce sx={{ fontSize: 24 }} />,
    currentType: 'announcement',
  },
  {
    label: 'Задания',
    description:
      'Создавайте задания, тесты, получайте ответы от учеников, оценивайте и улучшайте знания',
    icon: <Task sx={{ fontSize: 24 }} />,
    currentType: 'task',
  },
  {
    label: 'Видеоконференции',
    description:
      'Проводите уроки онлайн, проводите активности, работайте со студентами из любой точки мира',
    icon: <Camera sx={{ fontSize: 24 }} />,
    currentType: 'video',
  },
  {
    label: 'Чат со студентами',
    description: 'Общайтесь, отвечайте на вопросы, объясняйте непонятные моменты',
    icon: <Chat sx={{ fontSize: 24 }} />,
    currentType: 'chat',
  },
];

type RadioType = 'announcement' | 'task' | 'video' | 'chat';
interface IFormInput {
  name: string;
  type: RadioType;
}

const schema = yup
  .object({
    name: yup.string().min(0).max(100).required(),
    type: yup.string().min(0).max(100).required(),
  })
  .required();

const DialogChannelCreation = observer(() => {
  const rootStore: RootStore = useStore();
  const { communityChannelsSt, uiSt } = rootStore;
  const onClose = () => uiSt.setDialogs('channelCreation', false);

  const { control, handleSubmit, trigger } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      type: 'announcement',
    },
  });

  const onSubmit = (data: IFormInput) => {
    trigger();
    communityChannelsSt.pushNewChannel({ ...data });
    uiSt.setDialogs('channelCreation', false);
  };

  return (
    <Dialog
      open={uiSt.dialogs.channelCreation}
      onClose={() => uiSt.setDialogs('channelCreation', false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={false}
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
          Создать канал
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
          Тип
        </Typography>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <RadioGroup
              sx={{
                overflowY: 'scroll',
                height: '388px',
                flexWrap: 'nowrap',
                mt: 2,
                gap: '16px',
                flexDirection: 'column',
              }}
              {...field}
            >
              {content.map((item, index) => (
                <Stack
                  key={index.toString()}
                  onClick={(e) => {
                    const event = e as React.MouseEvent<HTMLDivElement, MouseEvent>;

                    const newEvent = {
                      ...event,
                      target: {
                        value: item.currentType,
                      },
                    };

                    field.onChange(newEvent);
                  }}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{
                    cursor: 'pointer',
                    height: '100%',
                    bgcolor: 'grayscale.5',
                    borderRadius: '8px',
                    p: 2,
                  }}
                >
                  <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                      width: '24px',
                    }}
                  >
                    {item.icon}
                  </Stack>
                  <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Typography variant="l"> {item.label} </Typography>
                    <Typography variant="m" sx={{ fontWeight: 400 }}>
                      {' '}
                      {item.description}{' '}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      width: '24px',
                      height: '100%',
                    }}
                  >
                    <Radio value={item.currentType} />
                  </Stack>
                </Stack>
              ))}
            </RadioGroup>
          )}
        />
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
      </Stack>
    </Dialog>
  );
});

export default DialogChannelCreation;
