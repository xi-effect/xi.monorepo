import { Button, Box, Grid, Tooltip, Stack, Typography } from '@mui/material';

import { useStore } from 'store/connect';

import { observer } from 'mobx-react';
import { Avatar } from 'pkg.data.avatar';
import { Copy } from 'pkg.icons';

const UserProfile = () => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    sx={{
      position: 'relative',
      height: '38px',
      width: '154px',
      pl: 4,
    }}
  >
    <Box sx={{ position: 'absolute', height: '24px', width: '24px', left: 0 }}>
      <Avatar size={24} />
    </Box>
    <Typography variant="m">Иван Ковыляев</Typography>
    <Typography variant="xs" sx={{ color: 'petersburg.60' }}>
      ikovylyaev
    </Typography>
  </Stack>
);

const Invites = observer(() => {
  const rootStore = useStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userSt } = rootStore;

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: '100%',
        }}
      >
        <Typography
          variant="xl"
          sx={{
            fontWeight: 600,
          }}
        >
          Приглашения
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: '200px',
            height: '32px',
            borderRadius: '4px',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            textTransform: 'capitalize',
            boxShadow: 0,
            '&:hover': {
              boxShadow: 0,
            },
          }}
        >
          Создать приглашение
        </Button>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          mt: 2,
          p: '24px',
          bgcolor: 'petersburg.0',
          width: '100%',
          borderRadius: '8px',
        }}
        spacing={3}
      >
        {[0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
          <Grid
            key={index.toString()}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              width: '100%',
              borderBottom: '1px solid',
            }}
          >
            <Grid item sx={{ width: '100%', maxWidth: '176px', pb: 2 }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
                sx={{
                  mr: 2,
                }}
              >
                <Typography variant="xs">Создано:</Typography>
                <UserProfile />
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100%', maxWidth: '176px', pb: 2 }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
                sx={{
                  mr: 2,
                }}
              >
                <Typography variant="xs">Код:</Typography>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                  <Typography variant="m">HPS012346</Typography>
                  <Tooltip title="Скопировать">
                    <Button
                      sx={{
                        width: '20px',
                        minWidth: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        bgcolor: 'petersburg.10',
                        '&:hover': {
                          bgcolor: 'petersburg.10',
                        },
                        svg: {
                          fill: '#000000',
                        },
                      }}
                    >
                      <Copy sx={{ width: '12px', height: '12px' }} />
                    </Button>
                  </Tooltip>
                </Stack>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100%', maxWidth: '176px', pb: 2 }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
                sx={{
                  mr: 2,
                }}
              >
                <Typography variant="xs">Использований:</Typography>
                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                  <Typography variant="m">10</Typography>
                  <Typography sx={{ color: 'petersburg.40' }} variant="xs">
                    /32
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100%', maxWidth: '176px', pb: 2 }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
                sx={{
                  mr: 2,
                }}
              >
                <Typography variant="xs">Роли</Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{
                    p: '4px 8px',
                    bgcolor: 'petersburg.5',
                    color: 'petersburg.100',
                    position: 'relative',
                    borderRadius: '4px',
                  }}
                  spacing={1}
                >
                  <Box
                    sx={{
                      width: '12px',
                      height: '12px',
                      bgcolor: 'petersburg.100',
                      borderRadius: '6px',
                    }}
                  />
                  <Typography variant="xs">Администратор</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100%', maxWidth: '176px', pb: 2 }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
                sx={{
                  mr: 2,
                }}
              >
                <Typography variant="xs">Истекает через:</Typography>
                <Typography variant="xs">1 день</Typography>
              </Stack>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </Stack>
  );
});

export default Invites;
