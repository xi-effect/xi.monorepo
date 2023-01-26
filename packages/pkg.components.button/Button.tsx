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
  textColor = '#fff',
  text,
  startIcon,
  endIcon,
  iconColor,
  handleButtonClick,
  isSnackbar,
  snackbarText,
  isSnackbarIconStart,
  isSnackbarIconEnd,
  snackbarLoadingPosition,
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
      disabled={status === 'pending' || status === 'completed'}
      size={size}
      disableRipple
      disableElevation
      sx={{
        color: '#fff',
        textTransform: 'none',
        position: 'relative',
        minWidth: 0,
        '&:disabled':
          status !== 'completed' ? buttonDisabled[variant] : buttonActive[variant][color],
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
          sx={{
            color: status === 'pending' ? '#707070' : textColor,
            opacity: loadingPosition === 'center' && status === 'pending' ? 0 : 1,
          }}
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

      {status === 'completed' && (startIcon || endIcon) && (
        <Check
          sx={{
            position: 'absolute',
            ...iconPosition[startIcon ? 'start' : 'end'][size],
            ...iconSizes[size],
            color: iconColor,
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
          status={status}
          snackbarText={snackbarText}
          isSnackbarIconStart={isSnackbarIconStart}
          isSnackbarIconEnd={isSnackbarIconEnd}
          snackbarLoadingPosition={snackbarLoadingPosition}
        />
      )}
    </MuiButton>
  );
};

type ButtonProps = {
  // button status: pending = spinner appears, completed button disabled with active color
  // completed and startIcon or endIcon or only icon without text appears check
  status?: Status;
  size?: Size; // button size
  // button spinner position: icon above icon and center
  loadingPosition?: LoadingPosition;
  // button variant
  variant?: Variant;
  // button color
  color?: Color;
  // button text color
  textColor?: string;
  // button text
  text?: string;
  // start or end button icon if icon without text, icon position will be center
  startIcon?: FunctionComponent<any>;
  endIcon?: FunctionComponent<any>;
  // button icon color
  iconColor?: string;
  // button click handler
  handleButtonClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  // whether to display snackbar
  isSnackbar?: boolean;
  // snackbar text
  snackbarText?: string;
  // start or end snackbar icon if icon without text, icon position will be center
  isSnackbarIconStart?: boolean;
  isSnackbarIconEnd?: boolean;
  // snackbar spinner position: icon above icon and center
  snackbarLoadingPosition?: LoadingPosition;
  // you can also pass the default attributes of the button
} & ButtonHTMLAttributes<HTMLButtonElement>;
