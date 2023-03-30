import { Box, Grid, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import * as yup from 'yup';

import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import { Avatar } from 'pkg.data.avatar';
import { Input } from 'pkg.inputs.input';
import { Search } from 'pkg.icons.search';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Badge } from 'pkg.components.badge';
import { Add } from 'pkg.icons.add';

const UserProfile = ({ name, nickname }: { name: string; nickname: string }) => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    sx={{
      position: 'relative',
      height: '38px',
      pl: 4,
    }}
  >
    <Box sx={{ position: 'absolute', height: '24px', width: '24px', left: 0 }}>
      <Avatar size={24} />
    </Box>
    <Typography variant="m">{name}</Typography>
    <Typography variant="xs" sx={{ color: 'grayscale.60' }}>
      {nickname}
    </Typography>
  </Stack>
);

type FormValues = {
  search: string;
};

const mocks = [
  {
    user: {
      name: 'Иван Ковыляев',
      nickname: 'ikovylyaev',
    },
    roles: ['Преподаватель', '7Б'],
  },
  {
    user: {
      name: 'Джон Джонович',
      nickname: 'djon.don.don',
    },
    roles: ['Ученик', '7Б'],
  },
  {
    user: {
      name: 'Маскот Маскотович',
      nickname: 'maskoftot',
    },
    roles: ['Администратор', 'Школа 932'],
  },
];

const schema = yup
  .object({
    search: yup.string().required().min(0).max(100),
  })
  .required();

const Participants = observer(() => {
  const rootStore = useStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userSt } = rootStore;

  const { control } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

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
          Участники
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mt: 2,
          width: '100%',
        }}
      >
        <Controller
          name="search"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Поиск по участникам"
              autoComplete="on"
              {...field}
              sx={{
                backgroundColor: 'grayscale.0',
                borderRadius: '8px',
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
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
      >
        {mocks.map((item, index) => (
          <Grid
            key={index.toString()}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              width: '100%',
              height: '48px',
            }}
          >
            <UserProfile name={item.user.name} nickname={item.user.nickname} />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ ml: 4 }}
              spacing={2}
            >
              {item.roles.map((i, index) => (
                <Badge key={index} size="small" bgColor="#EBFDF3">{i}</Badge>
              ))}
            </Stack>
            <IconButton sx={{ width: '24px', height: '24px', ml: 2 }}>
              <Add sx={{ fontSize: 16 }} />
            </IconButton>
          </Grid>
        ))}
      </Stack>
    </Stack>
  );
});

export default Participants;
