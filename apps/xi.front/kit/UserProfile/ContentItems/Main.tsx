import { Button, Stack, Theme, Typography, useMediaQuery } from '@mui/material';

import { Copy } from 'pkg.icons';
import { useSnackbar } from 'notistack';

import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import { AvatarEditor } from 'kit/AvatarEditor';

const msgDuration = 1700;

const Main = observer(() => {
  const rootStore = useStore();
  const { profileSt, userSt } = rootStore;
  const inviteId: string | null = profileSt.profile.code;

  const getInviteLink = () => {
    if (!inviteId) return 'Не удалось создать приглашение.';
    return `https://app.xieffect.ru/signup?invite=${inviteId}`;
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const onCopy: () => void = async () => {
    await navigator.clipboard.writeText(getInviteLink());

    enqueueSnackbar('Скопировано в ваш буфер обмена!', { variant: 'success' });
    setTimeout(() => closeSnackbar(), msgDuration);
  };

  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(700));

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          bgcolor: 'petersburg.0',
          width: '100%',
          height: '204px',
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
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          bgcolor: 'petersburg.0',
          width: '100%',
          borderRadius: '8px',
          padding: '25px 24px',
          mt: mobile700 ? '24px' : '32px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: mobile700 ? '20px' : '24px',
            lineHeight: mobile700 ? '24px' : '32px',
          }}
        >
          Ссылка-приглашение
        </Typography>
        <Typography
          margin="0"
          mt="12px"
          sx={{
            color: 'petersburg.40',
            fontWeight: 400,
            fontSize: mobile700 ? '16px' : '20px',
            lineHeight: mobile700 ? '20px' : '24px',
            m: mobile700 ? '12px 0 20px 0' : '24px 0 24px 0',
          }}
        >
          Пригласите знакомых на платформу
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: '100%',
            height: mobile700 ? '52px' : '64px',
            padding: `6px 6px 6px ${mobile700 ? '12px' : '20px'}`,
            borderRadius: '8px',
            bgcolor: 'petersburg.5',
          }}
        >
          <Typography
            sx={{
              fontSize: mobile700 ? '15px' : '24px',
              color: inviteId ? 'petersburg.100' : 'red',
              lineHeight: '44px',
              width: '100%',
              mr: '20px',
              display: 'block',
              whiteSpace: 'nowrap',
              overflowX: 'auto',
              '&::-webkit-scrollbar': {
                height: '3px',
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: 0,
              },
            }}
          >
            {getInviteLink()}
          </Typography>
          <Button
            onClick={onCopy}
            sx={{
              width: mobile700 ? '40px' : '52px',
              minWidth: mobile700 ? '40px' : '52px',
              height: '100%',
              bgcolor: 'primary.dark',
              borderRadius: '4px',
              '&:hover': {
                bgcolor: 'primary.main',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: mobile700 ? '20px' : '26px',
              svg: {
                fill: '#fff',
              },
            }}
          >
            <Copy fontSize="inherit" viewBox="0 0 26 26" />
          </Button>
        </Stack>
      </Stack>
    </>
  );
});

export default Main;
