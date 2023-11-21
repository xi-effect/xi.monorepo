import { IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Maximize, Minimize, Pause, Play } from 'pkg.icons';
import { VolumeControl } from './VolumeControl';
import { Range } from './Range';
import {
  controlsContainerStyle,
  controlsRowStyle,
  iconButtonStyle,
  iconStyle,
  textStyle,
} from './style';
import { formatTime } from './helpers';
import 'pkg.config.muidts';

type ControlsProps = {
  isFullScreen: boolean;
  playing: boolean;
  volume: number;
  videoDuration: number;
  currentVideoTime: number;
  onTogglePlay: () => void;
  onToggleScreenMode: () => void;
  onVolumeChange: (event: Event, value: number | number[]) => void;
  onPlayerTimeChange: (event: Event, value: number | number[]) => void;
  onPlayerTimeChangeCommitted: () => void;
};

export const Controls: FC<ControlsProps> = ({
  /** video open in full screen */
  isFullScreen,
  /** video is playing */
  playing,
  /** sound volume, min 0 - max 1 */
  volume,
  /** video duration in seconds */
  videoDuration,
  /** current video time in seconds */
  currentVideoTime,
  /** changes play or pause video. this changes playing */
  onTogglePlay,
  /** changes full screen mode or not. this changes  isFullScreen */
  onToggleScreenMode,
  /** changes the volume, min 0 - max 1 */
  onVolumeChange,
  /** changes the current time of the video. this change currentVideoTime */
  onPlayerTimeChange,
  /** handle  video time change is over */
  onPlayerTimeChangeCommitted,
}) => {
  const formattedCurrentVideoTime = formatTime(currentVideoTime);
  const formattedVideoDuration = formatTime(videoDuration);

  return (
    <Stack
      sx={(theme) => ({
        ...controlsContainerStyle,
        [theme.breakpoints.down('md')]: {
          maxWidth: '327px',
        },
      })}
    >
      <Stack direction="row" alignItems="center" sx={controlsRowStyle}>
        <IconButton sx={iconButtonStyle} onClick={onTogglePlay}>
          {playing ? <Pause sx={iconStyle} /> : <Play sx={iconStyle} />}
        </IconButton>

        <VolumeControl volume={volume} onChange={onVolumeChange} />

        <IconButton sx={iconButtonStyle} onClick={onToggleScreenMode}>
          {isFullScreen ? <Minimize sx={iconStyle} /> : <Maximize sx={iconStyle} />}
        </IconButton>
      </Stack>

      <Stack direction="row" alignItems="center" sx={controlsRowStyle}>
        <Typography variant="s" sx={textStyle}>
          {formattedCurrentVideoTime}
        </Typography>

        <Range
          min={0}
          max={videoDuration}
          value={currentVideoTime}
          step={0.01}
          onChange={onPlayerTimeChange}
          onChangeCommitted={onPlayerTimeChangeCommitted}
        />

        <Typography variant="s" sx={textStyle}>
          {formattedVideoDuration}
        </Typography>
      </Stack>
    </Stack>
  );
};
