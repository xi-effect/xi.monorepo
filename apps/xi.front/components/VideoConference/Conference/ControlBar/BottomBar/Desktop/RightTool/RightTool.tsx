import { IconButton, Stack, Tooltip } from '@mui/material';
import { Endcall } from 'pkg.icons';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';

const RightTool = observer(() => {
  const rootStore = useStore();

  const {
    mediaSt: { setConferenceControlBar },
  } = rootStore;

  return (
    <Stack direction="row" alignItems="center" justifyContent="flex-end" width="100%">
      <Tooltip title="Выйти из конференции">
        <IconButton
          onClick={() => setConferenceControlBar('endConference', true)}
          sx={{
            height: '48px',
            width: '48px',
            color: 'grayscale.0',
            bgcolor: 'error.dark',
            borderRadius: '24px',

            '&:hover': {
              bgcolor: 'error.light',
            },
          }}
        >
          <Endcall />
        </IconButton>
      </Tooltip>
    </Stack>
  );
});

export default RightTool;
