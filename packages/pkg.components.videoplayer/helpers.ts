import { MutableRefObject } from 'react';

export const formatTime = (duration: number) => {
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

export const getScale = (
  isFullscreen: boolean,
  mainContainerRef: MutableRefObject<HTMLDivElement | null>,
  playerScaleContainerRef: MutableRefObject<HTMLDivElement | null>,
) => {
  if (isFullscreen && mainContainerRef && playerScaleContainerRef) {
    if (mainContainerRef.current && playerScaleContainerRef.current) {
      const mainContainerHeight = mainContainerRef.current.offsetHeight;

      const playerHeight = playerScaleContainerRef.current.offsetHeight;

      const scale = mainContainerHeight / playerHeight;

      if (scale > 1) return `${scale}`;

      return 'none';
    }
  }

  return 'none';
};
