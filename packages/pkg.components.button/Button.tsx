import 'pkg.config.muidts';
import { Check } from 'pkg.icons.check';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Button as MuiButton, Stack } from '@mui/material';
import { FC, FunctionComponent, MouseEvent, ButtonHTMLAttributes } from 'react';

import { Color, LoadingPosition, Size, Status, Variant } from './types';

import {
  buttonVariantsColor,
  buttonSizes,
  getButtonPadding,
  getIconOpacity,
  getSpinnerPosition,
  iconSizes,
  spinnerSizes,
  typographySizes,
  iconPosition,
  buttonDisabled,
  buttonActive,
} from './styles';
import { ButtonSnackbar } from './ButtonSnackbar';

export const Button: FC<ButtonProps> = ({
  status = 'idle',
  size = 'medium',
  loadingPosition = 'center',
  variant = 'contained',
  color = 'primary',
  textColor,
  text,
  startIcon,
  endIcon,
  isSnackbar,
  snackbarText,
  isSnackbarIcon,
  iconColor,
  handleButtonClick,
  ...props
}) => {
  const StartIconComponent = startIcon as FunctionComponent<any>;
  const EndIconComponent = endIcon as FunctionComponent<any>;

  const buttonPadding = getButtonPadding(!!text, !!startIcon, !!endIcon);
  const spinnerPosition = getSpinnerPosition(!!text, !!startIcon, !!endIcon, loadingPosition);
  const iconOpacity = getIconOpacity(status);

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (status === 'completed') return;
    handleButtonClick(e);
  };

  return (
    <MuiButton
      onClick={onButtonClick}
      disabled={status === 'pending'}
      size={size}
      disableRipple
      disableElevation
      sx={{
        color: textColor,
        textTransform: 'none',
        position: 'relative',
        minWidth: 0,

        '&:disabled': buttonDisabled[variant],
        '&:active': {
          pt: status !== 'completed' ? '1px' : 0,
          ...buttonActive[variant][color],
        },
        ...buttonSizes[size],
        ...buttonPadding[size],
        ...buttonVariantsColor[variant][color],
      }}
      {...props}
    >
      {startIcon && (
        <StartIconComponent
          sx={{
            ...iconSizes[size],
            opacity: iconOpacity,
            color: iconColor,
          }}
        />
      )}

      {text && (
        <Typography
          sx={{ opacity: loadingPosition === 'center' && status === 'pending' ? 0 : 1 }}
          variant={typographySizes[size].variant}
        >
          {text}
        </Typography>
      )}

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

      {status === 'completed' && (
        <Check
          sx={{
            position: 'absolute',
            ...iconPosition[startIcon ? 'start' : 'end'][size],
            ...iconSizes[size],
          }}
        />
      )}

      {endIcon && (
        <EndIconComponent
          sx={{
            ...iconSizes[size],
            opacity: iconOpacity,
            color: iconColor,
          }}
        />
      )}

      {isSnackbar && status !== 'idle' && (
        <ButtonSnackbar
          size={size}
          variant={variant}
          isStartIcon={!!startIcon}
          isEndIcon={!!endIcon}
          spinnerPosition={spinnerPosition}
          status={status}
          snackbarText={snackbarText}
          isSnackbarIcon={isSnackbarIcon}
          loadingPosition={loadingPosition}
        />
      )}
    </MuiButton>
  );
};

type ButtonProps = {
  status?: Status;
  size?: Size;
  loadingPosition?: LoadingPosition;
  variant?: Variant;
  color?: Color;
  textColor?: string;
  text?: string;
  startIcon?: FunctionComponent<any>;
  endIcon?: FunctionComponent<any>;
  isSnackbar?: boolean;
  snackbarText?: string;
  isSnackbarIcon?: boolean;
  iconColor?: string;
  handleButtonClick: (e?: MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
