import { IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Maximize, Minimize, Pause, Play } from 'pkg.icons';
import { VolumeControl } from './VolumeControl';
import { Range } from './Range';
import { controlsContainerStyle, iconButtonStyle, iconStyle, textStyle } from './style';
import { formatTime } from './helpers';

type ControlsProps = {
  isFullScreen: boolean;
  playing: boolean;
  volume: number;
  movieDuration: number;
  currentPlayerTime: number;
  onPlay: () => void;
  onPause: () => void;
  onToggleScreenMode: () => void;
  onVolumeChange: (event: Event, value: number | number[]) => void;
  onPlayerTimeChange: (event: Event, value: number | number[]) => void;
  onPlayerTimeChangeCommitted: () => void;
};

export const Controls: FC<ControlsProps> = ({
  isFullScreen,
  playing,
  volume,
  movieDuration,
  currentPlayerTime,
  onPlay,
  onPause,
  onToggleScreenMode,
  onVolumeChange,
  onPlayerTimeChange,
  onPlayerTimeChangeCommitted,
}) => {
  const formattedCurrentPlayerTime = formatTime(currentPlayerTime);
  const formattedMovieDuration = formatTime(movieDuration);

  return (
    <Stack sx={controlsContainerStyle}>
      <Stack direction="row" sx={{ gap: '16px' }}>
        {!playing && (
          <IconButton sx={iconButtonStyle} onClick={onPlay}>
            <Play sx={iconStyle} />
          </IconButton>
        )}

        {playing && (
          <IconButton sx={iconButtonStyle} onClick={onPause}>
            <Pause sx={iconStyle} />
          </IconButton>
        )}

        <VolumeControl volume={volume} onChange={onVolumeChange} />

        <IconButton sx={iconButtonStyle} onClick={onToggleScreenMode}>
          {isFullScreen && <Minimize sx={iconStyle} />}
          {!isFullScreen && <Maximize sx={iconStyle} />}
        </IconButton>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ gap: '16px' }}>
        <Typography sx={textStyle}>{formattedCurrentPlayerTime}</Typography>

        <Range
          min={0}
          max={movieDuration}
          value={currentPlayerTime}
          step={0.01}
          onChange={onPlayerTimeChange}
          onChangeCommitted={onPlayerTimeChangeCommitted}
        />

        <Typography sx={textStyle}>{formattedMovieDuration}</Typography>
      </Stack>
    </Stack>
  );
};
