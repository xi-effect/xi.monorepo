import { Check } from 'pkg.icons.check';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Stack } from '@mui/material';
import { FC, useLayoutEffect, useRef, useState } from 'react';

import {
  buttonSizes,
  iconSizes,
  spinnerSizes,
  typographySizes,
  iconPosition,
  buttonDisabled,
  getButtonPadding,
  getSpinnerPosition,
  getSnackbarCurrentPosition,
} from './styles';
import { LoadingPosition, Size, SnackbarPosition, Status, Variant } from './types';

export const ButtonSnackbar: FC<ButtonSnackbarProps> = ({
  size,
  variant,
  status,
  snackbarText,
  isSnackbarIconStart,
  isSnackbarIconEnd,
  snackbarLoadingPosition = 'center',
  snackbarPosition = 'right',
}) => {
  const snackbarRef = useRef<HTMLDivElement>(null);
  const [snackbarSize, setSnackbarSize] = useState(0);
  const snackbarCurrentPosition = getSnackbarCurrentPosition(snackbarSize, snackbarPosition);
  const spinnerPosition = getSpinnerPosition(
    !!snackbarText,
    isSnackbarIconStart,
    isSnackbarIconEnd,
    snackbarLoadingPosition,
  );
  const snackbarPadding = getButtonPadding(
    !!snackbarText,
    !!isSnackbarIconStart,
    !!isSnackbarIconEnd,
  );

  useLayoutEffect(() => {
    if (!snackbarRef.current) return;
    if (snackbarPosition === 'left' || snackbarPosition === 'right') {
      setSnackbarSize(snackbarRef.current.clientWidth);
    }
    if (snackbarPosition === 'top' || snackbarPosition === 'bottom') {
      setSnackbarSize(snackbarRef.current.clientHeight);
    }
  }, [snackbarPosition]);

  return (
    <Stack
      ref={snackbarRef}
      direction="row"
      alignItems="center"
      sx={{
        position: 'absolute',
        ...snackbarCurrentPosition,
        ...buttonSizes[size],
        ...snackbarPadding[size],
        ...buttonDisabled[variant],
        color: '#707070',
      }}
    >
      {isSnackbarIconStart && <span style={iconSizes[size]} />}

      {status === 'pending' && (
        <Stack
          sx={{
            position: 'absolute',
            ...spinnerPosition[size],
          }}
        >
          <CircularProgress size={spinnerSizes[size]} color="inherit" />
        </Stack>
      )}

      {status !== 'pending' && (isSnackbarIconStart || isSnackbarIconEnd) && (
        <Check
          sx={{
            position: 'absolute',
            ...iconPosition[isSnackbarIconStart ? 'start' : 'end'][size],
            ...iconSizes[size],
          }}
        />
      )}

      {snackbarText && (
        <Typography
          sx={{ opacity: snackbarLoadingPosition === 'center' && status === 'pending' ? 0 : 1 }}
          variant={typographySizes[size].variant}
        >
          {snackbarText}
        </Typography>
      )}

      {isSnackbarIconEnd && <span style={iconSizes[size]} />}
    </Stack>
  );
};

type ButtonSnackbarProps = {
  size: Size;
  variant: Variant;
  status: Status;
  snackbarText?: string;
  isSnackbarIconStart?: boolean;
  isSnackbarIconEnd?: boolean;
  snackbarLoadingPosition?: LoadingPosition;
  snackbarPosition?: SnackbarPosition;
};
