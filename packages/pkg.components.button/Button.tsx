import 'pkg.config.muidts';
import { Check } from 'pkg.icons.check';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Button as MuiButton, Stack } from '@mui/material';

import { FC, FunctionComponent, useState } from 'react';

import {
  buttonColorStyle,
  buttonStyle,
  getButtonPadding,
  getEndIconOpacity,
  getSpinnerPosition,
  getStartIconOpacity,
  iconStyle,
  spinnerStyle,
  typographyStyle,
} from './styles';

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
  handleClick,
}) => {
  const StartIconComponent = startIcon as FunctionComponent<any>;
  const EndIconComponent = endIcon as FunctionComponent<any>;

  const buttonPadding = getButtonPadding(!!text, !!startIcon, !!endIcon);
  const spinnerPosition = getSpinnerPosition(!!text, !!startIcon, !!endIcon, loadingPosition);
  const [state, setState] = useState(status);

  const onButtonClick = () => {
    handleClick();
    setState('pending');
    setTimeout(() => {
      setState('completed');
    }, 1500);
  };

  return (
    <MuiButton
      onClick={onButtonClick}
      disabled={state === 'pending'}
      size={size}
      startIcon={
        startIcon && (
          <StartIconComponent
            sx={{
              mr: '-8px',
              ml: '4px',
              ...iconStyle[size],
              opacity: getStartIconOpacity(loadingPosition, state),
            }}
          />
        )
      }
      endIcon={
        endIcon && (
          <EndIconComponent
            sx={{
              ml: '-8px',
              mr: '4px',
              ...iconStyle[size],
              opacity: getEndIconOpacity(loadingPosition, state),
            }}
          />
        )
      }
      variant={variant}
      disableRipple
      disableElevation
      sx={{
        color: textColor,
        textTransform: 'none',
        position: 'relative',
        minWidth: 0,
        ...buttonStyle[size],
        ...buttonPadding[size],
        ...buttonColorStyle[variant][color],
      }}
    >
      {text && (
        <Typography
          sx={{ opacity: loadingPosition === 'center' && state === 'pending' ? 0 : 1 }}
          variant={typographyStyle[size].variant}
        >
          {text}
        </Typography>
      )}

      {state === 'pending' && (
        <Stack
          alignItems="center"
          sx={{
            position: 'absolute',
            ...spinnerPosition[size],
          }}
        >
          <CircularProgress size={spinnerStyle[size].size} color="inherit" />
        </Stack>
      )}
      {state === 'completed' && (
        <Stack
          alignItems="center"
          sx={{
            position: 'absolute',
            ...spinnerPosition[size],
          }}
        >
          <Check sx={iconStyle[size]} />
        </Stack>
      )}
    </MuiButton>
  );
};

type ButtonProps = {
  status?: 'idle' | 'pending' | 'completed';
  size?: 'small' | 'medium' | 'large';
  loadingPosition?: 'start' | 'center' | 'end';
  textColor?: string;
  text?: string;
  handleClick: () => void;
  startIcon?: FunctionComponent<any>;
  endIcon?: FunctionComponent<any>;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'confirm' | 'reject';
};
