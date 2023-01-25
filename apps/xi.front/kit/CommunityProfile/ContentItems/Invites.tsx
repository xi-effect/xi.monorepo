import { Button, Grid, Stack, Typography } from '@mui/material';

import { useStore } from 'store/connect';

import { observer } from 'mobx-react';

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
          bgcolor: 'grayscale.0',
          width: '100%',
          borderRadius: '8px',
        }}
        spacing={4}
      >
        {[0, 0, 0, 0, 0, 0, 0, 0].map(() => (
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              bgcolor: 'pink',
              width: '100%',
            }}
          >
            <Grid item sx={{ width: '100%', maxWidth: '176px' }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                sx={{
                  mr: 2,
                  bgcolor: 'greenyellow',
                }}
              >
                <Typography variant="xs">Создано:</Typography>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100%', maxWidth: '176px' }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                sx={{
                  mr: 2,
                  bgcolor: 'greenyellow',
                }}
              >
                <Typography variant="xs">Код:</Typography>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100%', maxWidth: '176px' }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                sx={{
                  mr: 2,
                  bgcolor: 'greenyellow',
                }}
              >
                <Typography variant="xs">Использований:</Typography>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100%', maxWidth: '176px' }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                sx={{
                  mr: 2,
                  bgcolor: 'greenyellow',
                }}
              >
                <Typography variant="xs">Роли</Typography>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100%', maxWidth: '176px' }}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                sx={{
                  mr: 2,
                  bgcolor: 'greenyellow',
                }}
              >
                <Typography variant="xs">Истекает через:</Typography>
              </Stack>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </Stack>
  );
});

export default Invites;
