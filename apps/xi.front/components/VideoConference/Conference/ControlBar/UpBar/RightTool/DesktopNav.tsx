import React from 'react';
import { Typography } from '@mui/material';
import { Grid, Maximize, External, Settings } from 'pkg.icons';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import ConferenceButton from 'components/VideoConference/Common/ConferenceButton';
import { StateViewT } from 'components/VideoConference/Conference/Conference';

const DesktopNav: React.FC<StateViewT> = observer(({ stateView }) => {
  const rootStore = useStore();

  const [view, setView] = stateView;

  const {
    mediaSt: {
      setConferenceControlBar,
      conferenceControlBar: { fullScreen, separateWindow },
    },
  } = rootStore;

  return (
    <>
      <ConferenceButton
        title="Переключить вид"
        sx={{ ml: '2px', width: '96px' }}
        onClick={() => setView(view === 'tile' ? 'speaker' : 'tile')}
      >
        <Grid />
        <Typography
          sx={{
            ml: '8px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          Вид
        </Typography>
      </ConferenceButton>

      <ConferenceButton
        title="Переключить экран"
        onClick={() => setConferenceControlBar('fullScreen', !fullScreen)}
      >
        <Maximize />
      </ConferenceButton>

      <ConferenceButton
        title="Отдельное окно"
        onClick={() => setConferenceControlBar('separateWindow', !separateWindow)}
      >
        <External />
      </ConferenceButton>

      <ConferenceButton title="Настройки" onClick={() => setConferenceControlBar('settings', true)}>
        <Settings />
      </ConferenceButton>
    </>
  );
});

export default DesktopNav;
