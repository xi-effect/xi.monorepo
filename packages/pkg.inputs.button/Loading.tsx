import { FC } from 'react';
import { CircularProgress, Stack, SxProps } from '@mui/material';
import { iconSizes, spinnerSizes } from './styles';
import { Size } from './types';

export const Loading: FC<LoadingProps> = ({ size, ...props }) => (
  <Stack
    sx={{
      position: 'absolute',
      ...iconSizes[size],
      ...props,
    }}
  >
    <CircularProgress size={spinnerSizes[size]} color="inherit" />
  </Stack>
);

type LoadingProps = { size: Size } & SxProps;
