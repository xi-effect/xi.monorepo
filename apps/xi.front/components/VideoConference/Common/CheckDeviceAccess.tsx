import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import { CircularProgress, Stack } from '@mui/material';
import Conference from '../Conference/Conference';

const CheckDeviceAccess = observer(() => {
  const rootStore = useStore();

  const {
    mediaSt: {
      mediaInfo: { stream },
    },
  } = rootStore;

  return stream ? (
    <Conference />
  ) : (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={80} />
    </Stack>
  );
});

export default CheckDeviceAccess;
