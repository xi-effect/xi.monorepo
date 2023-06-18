import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { MediaElement } from 'store/media/mediaSt';
import VideoPreview from './VideoPreview';
import SettingsPreview from './SettingsPreview';
import JoinButton from '../Common/JoinButton';

type JoinTheConferenceT = {
  setJoinConference: Dispatch<SetStateAction<boolean>>;
};

const JoinTheConference: React.FC<JoinTheConferenceT> = ({ setJoinConference }) => {
  const [showSettings, setShowSettings] = useState<boolean>(true);

  const elementRef = useRef<MediaElement | null>(null);

  const dl = useMediaQuery('(min-width:1200px)');

  const md = useMediaQuery('(min-width:900px)');

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        p: md ? '32px' : '50px 16px',
      }}
    >
      {md && (
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '32px',
            m: '0 0 32px 0',
          }}
        >
          Присоедениться к конференции
        </Typography>
      )}

      {!md && (
        <Box
          sx={{
            p: '12px',
            mb: '16px',
            borderRadius: '8px',
            backgroundColor: 'petersburg.5',
          }}
        >
          <Typography
            sx={{
              mb: '8px',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '24px',
            }}
          >
            Конференция не началась
          </Typography>

          <Typography
            sx={{
              fontSize: '16px',
              lineHeight: '20px',
            }}
          >
            Дождись организатора, либо проверь свое расписание
          </Typography>
        </Box>
      )}

      <Stack
        sx={{
          m: '-16px',
          flex: dl ? '0 0 auto' : '1 1 auto',
          flexDirection: dl ? 'row' : 'column',
        }}
      >
        <VideoPreview elementRef={elementRef} setShowSettings={setShowSettings} />

        {md && showSettings && (
          <SettingsPreview setJoinConference={setJoinConference} elementRef={elementRef} />
        )}
      </Stack>

      {!md && (
        <Box sx={{ mt: '16px' }}>
          <JoinButton setJoinConference={setJoinConference} />
        </Box>
      )}
    </Stack>
  );
};

export default JoinTheConference;
