import { IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { IconPlay, MaximizeIcon, MinimizeIcon, PauseIcon } from './TempIcons';
import { VolumeControl } from './VolumeControl';
import { Range } from './Range';

type ControlsProps = {
  isFullScreen: boolean;
  playing: boolean;
  muted: boolean;
  volume: number;
  movieDuration: number;
  currentPlayerTime: number;
  onPlay: () => void;
  onPause: () => void;
  onMute: () => void;
  onUnmute: () => void;
  onToggleScreenMode: () => void;
  onVolumeChange: (event: Event, value: number | number[]) => void;
  onPlayerTimeChange: (event: Event, value: number | number[]) => void;
  onPlayerTimeChangeCommitted: () => void;
};

export const Controls: FC<ControlsProps> = ({
  isFullScreen,
  playing,
  muted,
  volume,
  movieDuration,
  currentPlayerTime,
  onPlay,
  onPause,
  onMute,
  onUnmute,
  onToggleScreenMode,
  onVolumeChange,
  onPlayerTimeChange,
  onPlayerTimeChangeCommitted,
}) => {
  const formattedCurrentPlayerTime = formatTime(currentPlayerTime);
  const formattedMovieDuration = formatTime(movieDuration);

  return (
    <Stack
      sx={{
        bgcolor: 'rgba(16, 16, 16, 0.40)',
        p: '16px',
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1000,
        gap: '8px',
        borderRadius: '8px',
        maxWidth: '638px',
        width: '100%',
      }}
    >
      <Stack direction="row" sx={{ gap: '16px' }}>
        {!playing && (
          <IconButton sx={{ width: '24px', height: '24px', p: 0 }} onClick={onPlay}>
            <IconPlay />
          </IconButton>
        )}

        {playing && (
          <IconButton sx={{ width: '24px', height: '24px', p: 0 }} onClick={onPause}>
            <PauseIcon />
          </IconButton>
        )}

        <VolumeControl
          muted={muted}
          volume={volume}
          onChange={onVolumeChange}
          onMute={onMute}
          onUnmute={onUnmute}
        />

        <IconButton sx={{ width: '24px', height: '24px', p: 0 }} onClick={onToggleScreenMode}>
          {isFullScreen && <MinimizeIcon />}
          {!isFullScreen && <MaximizeIcon />}
        </IconButton>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ gap: '16px' }}>
        <Typography style={{ color: 'white' }}>{formattedCurrentPlayerTime}</Typography>

        <Range
          min={0}
          max={movieDuration}
          value={currentPlayerTime}
          step={0.01}
          onChange={onPlayerTimeChange}
          onChangeCommitted={onPlayerTimeChangeCommitted}
        />

        <Typography style={{ color: 'white' }}>{formattedMovieDuration}</Typography>
      </Stack>
    </Stack>
  );
};

const formatTime = (duration: number) => {
  if (duration === 0) {
    return '00:00';
  }

  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration - minutes * 60);

  const format = (time: number) => (time < 10 ? `0${time}` : `${time}`);

  const formattedSeconds = format(seconds);
  const formattedMinutes = format(minutes);

  return `${formattedMinutes}:${formattedSeconds}`;
};
