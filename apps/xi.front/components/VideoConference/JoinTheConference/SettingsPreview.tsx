import React, { Dispatch, SetStateAction } from 'react';
import { observer } from 'mobx-react';
import { Box, Typography } from '@mui/material';
import { useStore } from 'store/connect';
import DeviceMenu from 'kit/UserProfile/ContentItems/SoundAndVideo/DeviceMenu';
import { MediaElement } from 'store/media/mediaSt';
import JoinButton from '../Common/JoinButton';

type SettingsPreviewT = {
  elementRef: React.MutableRefObject<MediaElement | null>;
  setJoinConference: Dispatch<SetStateAction<boolean>>;
};

const SettingsPreview = observer((props) => {
  const { elementRef, setJoinConference }: SettingsPreviewT = props;

  const rootStore = useStore();

  const {
    mediaSt: {
      startStream,
      setUserSettings,
      userSettings: { videoinput, audioinput, audiooutput },
      mediaInfo: { devices },
    },
  } = rootStore;

  const changeVideoInput = async (id: string) => {
    const audio = audioinput === null ? { enableAudio: false } : { audioId: audioinput };

    await startStream({ videoId: id, ...audio });

    if (audiooutput) elementRef.current?.setSinkId(audiooutput);
  };
  const changeAudioInput = async (id: string) => {
    const video = videoinput === null ? { enableAudio: false } : { videoId: videoinput };

    await startStream({ audioId: id, ...video });

    if (audiooutput) elementRef.current?.setSinkId(audiooutput);
  };

  const changeAudioOutput = (id: string) => {
    elementRef.current?.setSinkId(id);

    setUserSettings('audiooutput', id);
  };

  return (
    <Box
      sx={{
        p: '24px',
        m: '16px',
        flex: '0 1 50%',
        borderRadius: '8px',
        backgroundColor: 'grayscale.0',
      }}
    >
      <Box
        sx={{
          p: '12px',
          mb: '32px',
          borderRadius: '8px',
          backgroundColor: 'grayscale.5',
        }}
      >
        <Typography lineHeight="24px" fontWeight={500} fontSize="20px" mb="8px">
          Конференция не началась
        </Typography>

        <Typography lineHeight="20px" fontSize="16px">
          Дождитесь организатора
        </Typography>
      </Box>

      <Box mb="32px">
        <Typography lineHeight="18px" fontWeight={500} fontSize="14px" mb="4px">
          Камера
        </Typography>

        <DeviceMenu
          device="videoinput"
          deviceControl={changeVideoInput}
          devices={devices.filter((d) => d.kind === 'videoinput')}
        />
      </Box>

      <Box mb="32px">
        <Typography lineHeight="18px" fontWeight={500} fontSize="14px" mb="4px">
          Звук
        </Typography>

        <Box mb="8px">
          <DeviceMenu
            device="audioinput"
            deviceControl={changeAudioInput}
            devices={devices.filter((d) => d.kind === 'audioinput')}
          />
        </Box>

        <DeviceMenu
          device="audiooutput"
          deviceControl={changeAudioOutput}
          devices={devices.filter((d) => d.kind === 'audiooutput')}
        />
      </Box>

      <JoinButton setJoinConference={setJoinConference} />
    </Box>
  );
});

export default SettingsPreview;
