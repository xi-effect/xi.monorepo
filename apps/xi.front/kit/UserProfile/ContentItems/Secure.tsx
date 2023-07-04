import { Stack, Typography, Button, useMediaQuery, Theme } from '@mui/material';
import Image from 'next/image';

import { useStore } from 'store/connect';

import { observer } from 'mobx-react';
import { PasswordChangeDialog } from 'kit/PasswordChangeDialog';
import { EmailChangeDialog } from 'kit/EmailChangeDialog';
import mail from 'public/icons/mail.png';
import { Button as PkgButton } from 'pkg.inputs.button';

const Secure = observer(() => {
  const rootStore = useStore();
  const { profileSt, uiSt } = rootStore;
  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(1400));
  const upTo800: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          bgcolor: 'moscow.0',
          width: '100%',
          borderRadius: '16px',
          position: 'relative',
        }}
      >
        <Stack
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          sx={{ padding: '16px' }}
        >
          <Stack spacing={0.5} sx={{ maxWidth: upTo800 ? 'auto' : '460px' }}>
            <Typography
              sx={{
                color: 'moscow.100',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
              }}
            >
              Почта не подтверждена
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'moscow.100',
                lineHeight: '16px',
              }}
            >
              Подтверждение адреса электронной почты требуется для защиты аккаунта и восстановления
              доступа
            </Typography>
          </Stack>
          <Stack spacing={0.5}>
            <Typography
              variant="caption"
              sx={{
                color: 'moscow.100',
                lineHeight: '16px',
              }}
            >
              Письмо не пришло?
            </Typography>
            <PkgButton
              variant="outlined"
              size="small"
              sx={{
                borderColor: 'moscow.100',
                padding: '5px 16px',
                lineHeight: '20px',
                color: 'moscow.100',
                '&:hover': {
                  bgColor: 'moscow.100',
                  textColor: 'moscow.0',
                },
              }}
            >
              Отправить повторно
            </PkgButton>
          </Stack>
        </Stack>
        <Stack
          justifyContent="flex-end"
          alignItems="flex-end"
          sx={{ display: upTo800 ? 'none' : '' }}
        >
          <Image src={mail} alt="mail" style={{ color: 'moscow.20', marginRight: '32px' }} />
        </Stack>
      </Stack>

      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          bgcolor: 'petersburg.0',
          width: '100%',
          borderRadius: '8px',
          padding: '24px',
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '32px',
          }}
        >
          Пароль
        </Typography>
        <Typography
          sx={{
            mt: '12px',
            color: 'petersburg.40',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            width: '360px',
          }}
        >
          {`Шифр, используемый для входа \n
          в аккаунт и подтверждения данных`}
        </Typography>
        <Button
          onClick={() => uiSt.setDialogs('passwordChange', true)}
          variant="contained"
          sx={{
            width: '160px',
            height: '56px',
            borderRadius: '8px',
            position: mobile700 ? '' : 'absolute',
            top: mobile700 ? '20px' : '24px',
            right: '24px',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '22px',
            textTransform: 'capitalize',
            ml: mobile700 ? '24px' : '',
            mb: mobile700 ? '24px' : '',
            boxShadow: 0,
            '&:hover': {
              boxShadow: 0,
            },
          }}
        >
          Изменить
        </Button>
      </Stack>

      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          bgcolor: 'petersburg.0',
          width: '100%',
          borderRadius: '8px',
          padding: '24px',
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '32px',
          }}
        >
          Почта
        </Typography>
        <Typography
          sx={{
            color: 'petersburg.100',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            position: mobile700 ? '' : 'absolute',
            top: '40px',
            right: '200px',
            mt: mobile700 ? '12px' : '',
          }}
        >
          {profileSt.profile.email}
        </Typography>
        <Typography
          sx={{
            mt: '12px',
            color: 'petersburg.40',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            width: '360px',
          }}
        >
          Электронный ящик
          <br />
          для восстановления доступа
        </Typography>
        <Button
          onClick={() => uiSt.setDialogs('emailChange', true)}
          variant="contained"
          sx={{
            width: '160px',
            height: '56px',
            borderRadius: '8px',
            position: mobile700 ? '' : 'absolute',
            top: '24px',
            right: '24px',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '22px',
            textTransform: 'capitalize',
            boxShadow: 0,
            ml: mobile700 ? '24px' : '',
            mb: mobile700 ? '24px' : '',
            '&:hover': {
              boxShadow: 0,
            },
          }}
        >
          Изменить
        </Button>
      </Stack>
      <PasswordChangeDialog />
      <EmailChangeDialog />
    </>
  );
});

export default Secure;
