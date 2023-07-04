'use client';

import { Stack, Box, IconButton } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';
import { Close } from 'pkg.icons';
import { Controls } from './Controls';

import {
  closeButtonStyle,
  iconStyle,
  mainContainerStyle,
  playerStyle,
  playerWrapperStyle,
} from './style';
import { getScale } from './helpers';

export type VideoPlayerProps = {
  url: string;
  loop?: boolean;
  onClose: () => void;
};

const initialPlayerState = {
  volume: 0.5,
  playing: false,
  playerTime: 0,
  currentPlayerTime: 0,
  seeking: false,
};

export const VideoPlayer: FC<VideoPlayerProps> = ({ url, loop, onClose }) => {
  const mainContainerRef = useRef<HTMLDivElement | null>(null);
  const playerFullScreenContainerRef = useRef<HTMLDivElement | null>(null);
  const playerScaleContainerRef = useRef<HTMLDivElement | null>(null);
  const reactPlayerRef = useRef<ReactPlayer | null>(null);

  const scale = getScale(screenfull.isFullscreen, mainContainerRef, playerScaleContainerRef);
  const maxWidthPlayer = screenfull.isFullscreen ? '100%' : '1250px';

  const movieDuration = reactPlayerRef.current ? reactPlayerRef.current.getDuration() : 0;

  const [{ volume, playing, currentPlayerTime, seeking }, setPlayerState] =
    useState(initialPlayerState);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const handleToggleScreenMode = () => {
    if (playerFullScreenContainerRef.current) {
      screenfull.toggle(playerFullScreenContainerRef.current);

      screenfull.onchange(() => {
        setIsFullScreen(screenfull.isFullscreen);
      });
    }
  };

  const handlePlay = () => {
    setPlayerState((prev) => ({ ...prev, playing: true }));
  };

  const handlePause = () => {
    setPlayerState((prev) => ({ ...prev, playing: false }));
  };

  const handleVolumeChange = (event: Event, value: number | number[]) => {
    setPlayerState((prev) => ({ ...prev, volume: value as number }));
  };

  const handlePlayerTimeChangeCommitted = () => {
    setPlayerState((prev) => ({ ...prev, seeking: false }));
  };

  const handlePlayerTimeChange = (event: Event, value: number | number[]) => {
    reactPlayerRef.current?.seekTo((value as number) - 0.01);
    setPlayerState((prev) => ({ ...prev, currentPlayerTime: value as number, seeking: true }));
  };

  const handlePlayerProgress = (player: OnProgressProps) => {
    if (!seeking) {
      setPlayerState((prev) => ({
        ...prev,
        currentPlayerTime: player.playedSeconds,
      }));
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({
        ...mainContainerStyle,
        [theme.breakpoints.down('md')]: { p: '24px' },
      })}
      ref={mainContainerRef}
    >
      <Stack
        sx={{ height: '100%', width: '100%' }}
        ref={playerFullScreenContainerRef}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton sx={closeButtonStyle} onClick={onClose}>
          <Close sx={iconStyle} />
        </IconButton>

        {hasWindow && (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              ...playerWrapperStyle,
              maxWidth: maxWidthPlayer,
            }}
          >
            <Box ref={playerScaleContainerRef} sx={{ width: '100%', scale }}>
              <ReactPlayer
                style={playerStyle}
                ref={reactPlayerRef}
                url={url}
                playing={playing}
                volume={volume}
                onProgress={handlePlayerProgress}
                onPlay={handlePlay}
                onPause={handlePause}
                loop={loop}
                width="100%"
                height="100%"
                controls={false}
              />
            </Box>
          </Stack>
        )}

        <Controls
          isFullScreen={isFullScreen}
          playing={playing}
          volume={volume}
          movieDuration={movieDuration}
          currentPlayerTime={currentPlayerTime}
          onPlay={handlePlay}
          onPause={handlePause}
          onToggleScreenMode={handleToggleScreenMode}
          onVolumeChange={handleVolumeChange}
          onPlayerTimeChange={handlePlayerTimeChange}
          onPlayerTimeChangeCommitted={handlePlayerTimeChangeCommitted}
        />
      </Stack>
    </Stack>
  );
};
