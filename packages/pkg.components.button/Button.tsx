import 'pkg.config.muidts';
import { Check } from 'pkg.icons.check';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Button as MuiButton, Stack } from '@mui/material';
import { FC, FunctionComponent, useState } from 'react';
import { Color, LoadingPosition, Size, Status, Variant } from './types';

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
  isSnackbar,
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
    <Stack direction="row">
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
          '&:disabled': {
            backgroundColor: '#E8E8E8',
          },
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
      {isSnackbar && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          sx={{
            backgroundColor: '#E8E8E8',
            ...buttonStyle[size],
            ...buttonPadding[size],
          }}
        >
          {state === 'pending' && (
            <CircularProgress size={spinnerStyle[size].size} color="inherit" />
          )}
          {state !== 'pending' && (
            <Stack
              alignItems="center"
              sx={{
                ...spinnerPosition[size],
              }}
            >
              <Check sx={iconStyle[size]} />
            </Stack>
          )}
          <Typography
            sx={{ opacity: loadingPosition === 'center' && state === 'pending' ? 0 : 1 }}
            variant={typographyStyle[size].variant}
          >
            1
          </Typography>
        </Stack>
      )}
    </Stack>
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
  handleClick: () => void;
  isSnackbar?: boolean;
};
