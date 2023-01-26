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
} from './styles';
import { LoadingPosition, Size, Status, Variant } from './types';

export const ButtonSnackbar: FC<ButtonSnackbarProps> = ({
  size,
  variant,
  isStartIcon,
  isEndIcon,
  spinnerPosition,
  status,
  snackbarText,
  isSnackbarIcon,
  loadingPosition,
}) => {
  const snackbarRef = useRef<HTMLDivElement>(null);
  const [snackbarWidth, setSnackbarWidth] = useState(0);
  const snackbarPadding = getButtonPadding(!!snackbarText, isStartIcon, isEndIcon);
  useLayoutEffect(() => {
    if (snackbarRef.current) {
      setSnackbarWidth(snackbarRef.current.clientWidth);
    }
  });
  return (
    <Stack
      ref={snackbarRef}
      direction="row"
      alignItems="center"
      sx={{
        position: 'absolute',
        top: 0,
        right: `-${snackbarWidth + 16}px`,
        ...buttonSizes[size],
        ...snackbarPadding[size],
        ...buttonDisabled[variant],
      }}
    >
      {isStartIcon && isSnackbarIcon && <span style={iconSizes[size]} />}

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

      {status !== 'pending' && isSnackbarIcon && (
        <Check
          sx={{
            position: 'absolute',
            ...iconPosition[isStartIcon ? 'start' : 'end'][size],
            ...iconSizes[size],
          }}
        />
      )}

      {snackbarText && (
        <Typography
          sx={{ opacity: loadingPosition === 'center' && status === 'pending' ? 0 : 1 }}
          variant={typographySizes[size].variant}
        >
          {snackbarText}
        </Typography>
      )}

      {isEndIcon && isSnackbarIcon && <span style={iconSizes[size]} />}
    </Stack>
  );
};

type ButtonSnackbarProps = {
  size: Size;
  variant: Variant;
  isStartIcon: boolean;
  isEndIcon: boolean;
  spinnerPosition: any;
  status: Status;
  snackbarText?: string;
  isSnackbarIcon?: boolean;
  loadingPosition?: LoadingPosition;
};
