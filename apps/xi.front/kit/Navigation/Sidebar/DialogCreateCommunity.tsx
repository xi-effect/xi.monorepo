import React from 'react';
import { observer } from 'mobx-react';
import { Dialog, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStore } from 'store/connect';

import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import TextFieldCustom from 'kit/TextFieldCustom';
import { Button } from 'pkg.inputs.button';
import { Link } from 'pkg.navigation.link';

const schema = yup
  .object({
    value: yup.string().min(1).max(100).required(),
  })
  .required();

const DialogCreateCommunity = observer(() => {
  const rootStore = useStore();
  const { uiSt, userSt } = rootStore;
  const { dialogs, setDialogs } = uiSt;

  const [isAccept, setIsAccept] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const addCtoMenu = ({ code, message, data }) => {
    if (code === 200 && message) {
      const comm = userSt.user.communities;
      userSt.setUser('communities', [
        {
          name: data?.name || 'exe',
          id: data.id,
        },
        ...comm,
      ]);
      router.push(`/community/${data.id}`);
      uiSt.setDialogs('communityCreation', false);
    }
  };

  const onSubmit = (data) => {
    rootStore.socket?.emit('new-community', { name: data.value }, addCtoMenu);
  };

  const handleClose = () => {
    setDialogs('communityCreation', false);
    setTimeout(() => {
      setIsAccept(false);
    }, 1000);
  };

  return (
    <Dialog
      open={dialogs.communityCreation ?? false}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '600px',
          borderRadius: '16px',
          border: '1px solid',
          borderColor: 'grayscale.10',
          bgcolor: 'grayscale.0',
          boxShadow: 'none',
          position: 'relative',
          m: 1,
          p: 0,
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
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: '100%',
        }}
      >
        <Stack
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            pt: 4,
            pl: 4,
            pr: 4,
            pb: isAccept ? 4 : 0,
            width: '100%',
          }}
        >
          <Typography variant="xl" sx={{ fontWeight: 600 }}>
            {isAccept ? 'Присоединиться к сообществу' : 'Создать сообщество'}
          </Typography>
          <Typography
            textAlign="center"
            variant="m"
            sx={{
              mt: 2,
              height: '40px',
              fontWeight: 400,
              maxWidth: isAccept ? '100%' : '356px',
            }}
          >
            {isAccept
              ? 'Введите приглашение чтобы присоединиться к существующему\nсообществу'
              : 'Назовите сообщество. Изменить название\nможно в любой момент'}
          </Typography>
          <Typography
            textAlign="left"
            variant="m"
            sx={{
              mt: 3,
              fontWeight: 600,
              width: '100%',
            }}
          >
            {isAccept ? 'Ссылка приглашение' : 'Название'}
          </Typography>
          <Controller
            name="value"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextFieldCustom
                variant="outlined"
                error={!!errors?.name?.type}
                type="text"
                fullWidth
                placeholder={
                  isAccept ? 'https://xieffect.ru/invite/HPS012345' : 'Название сообщества'
                }
                helperText={
                  errors?.name?.type === 'max' &&
                  'Максимальная длина названия сообщества - 100 символов'
                }
                sx={{
                  mt: 1,
                }}
                {...field}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              width: '100%',
              height: '48px',
              boxShadow: 'none',
            }}
          >
            {isAccept ? 'Присоединиться к сообществу' : 'Создать'}
          </Button>
          {isAccept && (
            <Link sx={{ mt: 3, height: '32px' }} onClick={() => setIsAccept(false)}>
              Отмена
            </Link>
          )}
        </Stack>
        {!isAccept && (
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              mt: 4,
              pr: 4,
              pl: 4,
              pb: 4,
              height: '156px',
              width: '100%',
              bgcolor: 'grayscale.5',
            }}
          >
            <Typography
              textAlign="center"
              variant="l"
              sx={{
                mt: 3,
                fontWeight: 600,
                width: '100%',
              }}
            >
              У вас есть приглашение?
            </Typography>
            <Button
              onClick={() => setIsAccept(true)}
              variant="outlined"
              fullWidth
              sx={{
                mt: 2,
                width: '100%',
                height: '48px',
                boxShadow: 'none',
              }}
            >
              Присоединиться к сообществу
            </Button>
          </Stack>
        )}
      </Stack>
    </Dialog>
  );
});

export default DialogCreateCommunity;
