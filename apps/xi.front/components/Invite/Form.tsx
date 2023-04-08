/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useRouter, NextRouter } from 'next/router';

import { Stack, Typography, Paper, Skeleton } from '@mui/material';

import { observer } from 'mobx-react';
import { useStore } from 'store/connect';

import { getLastCodeFromURL } from 'pkg.utils';
import { Avatar } from 'pkg.data.avatar';
import { Badge } from 'pkg.components.badge';
import { Button } from 'pkg.inputs.button';

type CommunityInfo = {
  name: string;
  id?: number;
};

type ContentProps = {
  join?: boolean;
  auth?: boolean;
  undef?: boolean;
  comm: CommunityInfo;
};

// const errors = [
//   'У приглашения достигнут лимит использований',
//   'Срок действия приглашения исчерпан',
//   'Владелец сообщества удалил приглашение',
//   'Код приглашения недействителен',
// ];

const Skelet = () => <Skeleton />;

const Content = observer(({ comm, auth, join, undef }: ContentProps) => {
  const rootStore = useStore();
  console.log('undef', undef);

  const { name } = comm;

  const router: NextRouter = useRouter();

  const acceptInvite = () => {
    const code = getLastCodeFromURL();
    rootStore.fetchData(`${rootStore.url}/communities/join/${code}/`, 'POST').then(({ id }) => {
      router.push(`/community/${id}`);
    });
  };

  if (!auth) {
    return (
      <>
        <Typography sx={{ mt: 1, color: 'text.secondary' }} variant="h6">
          Приглашение недействительно
        </Typography>
        <Typography textAlign="center" sx={{ color: 'text.secondary' }} variant="subtitle1">
          войдите или зарегистрируйтесь, чтобы принять приглашение
        </Typography>
      </>
    );
  }

  if (join) {
    return (
      <>
        <Paper
          elevation={8}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: -8,
            zIndex: 500,
            bgcolor: 'grayscale.0',
            borderRadius: '64px',
            width: '128px',
            height: '128px',
          }}
        >
          <Avatar size={100} />
        </Paper>
        <Typography variant="m" sx={{ mt: 2 }}>
          Вы уже состоите в этом сообществе
        </Typography>
        <Typography variant="xl" sx={{ mt: 1 }}>
          {name}
        </Typography>
        <Badge
          stackProps={{
            sx: {
              mt: 2,
            },
          }}
          bgColor="grayscale.5"
        >
          1024 участника
        </Badge>
        <Button
          onClick={() => router.push(`/community/${comm.id}`)}
          sx={{ mt: 4, width: '100%' }}
          variant="contained"
        >
          Перейти к сообществу
        </Button>
      </>
    );
  }

  return (
    <>
      <Paper
        elevation={8}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: -8,
          zIndex: 500,
          bgcolor: 'grayscale.0',
          borderRadius: '64px',
          width: '128px',
          height: '128px',
        }}
      >
        <Avatar size={100} />
      </Paper>
      <Typography variant="m" sx={{ mt: 2 }}>
        Вы были приглашены в
      </Typography>
      <Typography variant="xl" sx={{ mt: 1 }}>
        {name}
      </Typography>
      <Badge
        stackProps={{
          sx: {
            mt: 2,
          },
        }}
        bgColor="grayscale.5"
      >
        1024 участника
      </Badge>
      <Button onClick={acceptInvite} sx={{ mt: 4, width: '100%' }} variant="contained">
        Принять приглашение
      </Button>
    </>
  );
});

const Form = observer(() => {
  const rootStore = useStore();

  const [join, setJoin] = React.useState<boolean | null>(null);
  const [auth, setAuth] = React.useState<boolean | null>(null);
  const [comm, setComm] = React.useState<CommunityInfo | null>({ name: 'МИПК И.Федорова' });

  const [undef, setUndef] = React.useState<boolean>(false);

  React.useEffect(() => {
    const code = getLastCodeFromURL();
    rootStore.fetchData(`${rootStore.url}/communities/join/${code}/`, 'GET').then((data) => {
      if (data) {
        const { joined, authorized, community } = data;
        setAuth(authorized);
        setJoin(joined);
        setComm(community);
      } else {
        setUndef(true);
      }
    });
  }, []);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        position: 'relative',
        width: 'calc(100% - 32px)',
        maxWidth: 512,
        zIndex: 0,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          zIndex: 500,
          bgcolor: 'grayscale.0',
          borderRadius: 2,
          width: '400px',
          height: '298px',
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', pl: 4, pr: 4 }}
        >
          {comm && auth && join ? (
            <Content comm={comm} auth={auth} join={join} undef={undef} />
          ) : (
            <Skelet />
          )}
        </Stack>
      </Paper>
    </Stack>
  );
});

export default Form;
