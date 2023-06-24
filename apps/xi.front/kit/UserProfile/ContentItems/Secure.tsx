import { Box, IconButton, Stack, Theme, Typography, useMediaQuery } from '@mui/material';

import { useStore } from 'store/connect';

import { EmailChangeDialog } from 'kit/EmailChangeDialog';
import { PasswordChangeDialog } from 'kit/PasswordChangeDialog';
import { observer } from 'mobx-react';
import { Arrow, Trash } from 'pkg.icons';

const Secure = observer(() => {
  const rootStore = useStore();
  const { profileSt, uiSt } = rootStore;
  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(1400));

  return (
    <>
      {/* profile data */}
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          bgcolor: 'petersburg.0',
          width: '100%',
          borderRadius: '8px',
          padding: '4px',
          position: 'relative',
          gap: '8px',
        }}
      >
        {/* header */}
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            width: '100%',
            padding: '12px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
            }}
          >
            Данные аккаунта
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
            }}
          >
            Видны только вам
          </Typography>
        </Stack>
        {/* password button */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          onClick={() => uiSt.setDialogs('passwordChange', true)}
          sx={{
            cursor: 'pointer',
            width: '100%',
            borderRadius: '8px',
            padding: '12px',
            backgroundColor: 'transparent',
            transition: 'background 0.2s ease-in',
            '&:hover': { backgroundColor: 'petersburg.5' },
          }}
        >
          <Stack direction="row" alignItems="center" gap="16px">
            <IconButton
              sx={{
                width: '32px',
                height: '32px',
                color: '#445AFF',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Arrow />
            </IconButton>
            <Box>
              <Typography
                marginBottom="4px"
                sx={{
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '22px',
                }}
              >
                Пароль
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                Обновлен год назад
              </Typography>
            </Box>
          </Stack>
          <IconButton
            sx={{
              width: '24px',
              height: '24px',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Arrow />
          </IconButton>
        </Stack>
        {/* mail button */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          onClick={() => uiSt.setDialogs('emailChange', true)}
          sx={{
            cursor: 'pointer',
            width: '100%',
            borderRadius: '8px',
            padding: '12px',
            backgroundColor: 'transparent',
            transition: 'background 0.2s ease-in',
            '&:hover': { backgroundColor: 'petersburg.5' },
          }}
        >
          <Stack direction="row" alignItems="center" gap="16px">
            <IconButton
              sx={{
                width: '32px',
                height: '32px',
                color: '#445AFF',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Arrow />
            </IconButton>
            <Box>
              <Typography
                marginBottom="4px"
                sx={{
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '22px',
                }}
              >
                Почта
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                {profileSt.profile.email}
              </Typography>
            </Box>
          </Stack>
          <IconButton
            sx={{
              width: '24px',
              height: '24px',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Arrow />
          </IconButton>
        </Stack>
      </Stack>
      {/* profile actions */}
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          bgcolor: 'petersburg.0',
          width: '100%',
          borderRadius: '8px',
          padding: '4px',
          position: 'relative',
          gap: '8px',
        }}
      >
        {/* header */}
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            width: '100%',
            padding: '12px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
            }}
          >
            Действия с аккаунтом
          </Typography>
        </Stack>
        {/* delete button */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            cursor: 'pointer',
            width: '100%',
            borderRadius: '8px',
            padding: '12px',
            backgroundColor: 'transparent',
            transition: 'background 0.2s ease-in',
            '&:hover': { backgroundColor: 'petersburg.5' },
          }}
        >
          <Stack direction="row" alignItems="center" gap="16px">
            <IconButton
              sx={{
                width: '32px',
                height: '32px',
                color: '#445AFF',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Trash />
            </IconButton>
            <Box>
              <Typography
                marginBottom="4px"
                sx={{
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '22px',
                }}
              >
                Удаление аккаунта
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                Вы можете полностью удалить аккаунт Xi.ID и данные в нём.
              </Typography>
            </Box>
          </Stack>
          <IconButton
            sx={{
              width: '24px',
              height: '24px',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Arrow />
          </IconButton>
        </Stack>
      </Stack>

      {/* <Stack
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
      </Stack> */}

      {/* <Stack
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
      </Stack> */}
      <PasswordChangeDialog />
      <EmailChangeDialog />
    </>
  );
});

export default Secure;
