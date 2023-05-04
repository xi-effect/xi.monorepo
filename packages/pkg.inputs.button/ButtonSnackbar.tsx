import { Typography, Stack } from '@mui/material';
import React, { FC } from 'react';

import {
  buttonSizes,
  typographyVariants,
  buttonDisabledStyle,
  getButtonPadding,
  getSnackbarCurrentPosition,
  buttonBorderStyle,
} from './styles';
import { LoadingPosition, Size, SnackbarPosition, Status, Variant } from './types';
import { IconContainer } from './IconContainer';
import { Loading } from './Loading';

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
  const snackbarRef = React.useRef<HTMLDivElement | null>(null);
  const [snackbarSize, setSnackbarSize] = React.useState(0);
  const snackbarCurrentPosition = getSnackbarCurrentPosition(snackbarSize, snackbarPosition);

  const buttonBorder = variant === 'outlined' ? buttonBorderStyle[size] : 'none';

  const snackbarPadding = getButtonPadding(
    !!snackbarText,
    !!isSnackbarIconStart,
    !!isSnackbarIconEnd,
  );

  React.useLayoutEffect(() => {
    if (!snackbarRef?.current) return;
    if (snackbarPosition === 'left' || snackbarPosition === 'right') {
      setSnackbarSize(snackbarRef.current.clientWidth);
    }
    if (snackbarPosition === 'top' || snackbarPosition === 'bottom') {
      setSnackbarSize(snackbarRef.current.clientHeight);
    }
  }, [snackbarPosition, size, snackbarText]);

  return (
    <Stack
      ref={snackbarRef}
      direction="row"
      alignItems="center"
      sx={{
        position: 'absolute',
        border: buttonBorder,
        ...snackbarCurrentPosition,
        ...buttonSizes[size],
        ...snackbarPadding[size],
        ...buttonDisabledStyle[variant],
      }}
    >
      {status === 'pending' && snackbarLoadingPosition === 'center' && (
        <Loading top="50%" left="50%" transform="translate(-50%,-50%)" size={size} />
      )}
      {isSnackbarIconStart && (
        <IconContainer
          size={size}
          order={0}
          status={status}
          isLoadingIcon={snackbarLoadingPosition !== 'center'}
        />
      )}
      {isSnackbarIconEnd && (
        <IconContainer
          size={size}
          order={2}
          status={status}
          isLoadingIcon={snackbarLoadingPosition !== 'center'}
        />
      )}

      {snackbarText && (
        <Typography
          color="inherit"
          sx={{ opacity: snackbarLoadingPosition === 'center' && status === 'pending' ? 0 : 1 }}
          variant={typographyVariants[size]}
        >
          {snackbarText}
        </Typography>
      )}
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
