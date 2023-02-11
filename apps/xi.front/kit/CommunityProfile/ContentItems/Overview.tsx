import { Stack, Typography } from '@mui/material';

import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import { AvatarEditor } from 'kit/AvatarEditor';

const Overview = observer(() => {
  const rootStore = useStore();
  const { userSt } = rootStore;

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        bgcolor: 'grayscale.0',
        width: '100%',
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
  );
});

export default Overview;
