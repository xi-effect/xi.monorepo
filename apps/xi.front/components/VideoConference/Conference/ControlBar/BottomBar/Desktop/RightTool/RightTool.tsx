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
    <Stack sx={{ width: '100%' }} direction="row" alignItems="center" justifyContent="flex-end">
      <Tooltip title="Выйти из конференции">
        <IconButton
          onClick={() => setConferenceControlBar('endConference', true)}
          sx={{
            height: '48px',
            width: '48px',
            color: 'petersburg.0',
            bgcolor: 'moscow.80',
            borderRadius: '24px',

            '&:hover': {
              bgcolor: 'moscow.40',
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
