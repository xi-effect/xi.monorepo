import 'pkg.config.muidts';
import { Check } from 'pkg.icons.check';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Button as MuiButton, Stack } from '@mui/material';
import { FC, FunctionComponent, MouseEvent, useEffect, useRef, useState } from 'react';

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
  const snackbarRef = useRef<HTMLDivElement>(null);

  const [snackbarWidth, setSnackbarWidth] = useState(0);

  const buttonPadding = getButtonPadding(!!text, !!startIcon, !!endIcon);
  const spinnerPosition = getSpinnerPosition(!!text, !!startIcon, !!endIcon, loadingPosition);

  const [state, setState] = useState(status);

  useEffect(() => {
    if (snackbarRef.current) {
      setSnackbarWidth(snackbarRef.current.clientWidth);
    }
  }, [size]);

  const onMouseUp = (e: MouseEvent<HTMLButtonElement>) => {
    handleClick(e);
    setState('pending');
    setTimeout(() => {
      setState('completed');
      setTimeout(() => {
        setState('idle');
      }, 1500);
    }, 1500);
  };

  return (
    <MuiButton
      onMouseUp={onMouseUp}
      disabled={state === 'pending' || state === 'completed'}
      size={size}
      disableRipple
      disableElevation
      sx={{
        color: textColor,
        textTransform: 'none',
        position: 'relative',
        minWidth: 0,

        '&:disabled':
          state === 'completed' ? buttonDisabled[variant][color] : buttonDisabled.default,
        '&:active': {
          pt: '1px',
          ...buttonActive[variant][color],
        },
        ...buttonSizes[size],
        ...buttonPadding[size],
        ...buttonVariantsColor[variant][color],
      }}
    >
      {startIcon && (
        <StartIconComponent
          sx={{
            ...iconSizes[size],
            opacity: getIconOpacity(state),
          }}
        />
      )}

      {text && (
        <Typography
          sx={{ opacity: loadingPosition === 'center' && state === 'pending' ? 0 : 1 }}
          variant={typographySizes[size].variant}
        >
          {text}
        </Typography>
      )}

      {state === 'pending' && (
        <Stack
          sx={{
            position: 'absolute',
            ...spinnerPosition[size],
          }}
        >
          <CircularProgress size={spinnerSizes[size]} color="inherit" />
        </Stack>
      )}

      {state === 'completed' && (
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
            opacity: getIconOpacity(state),
          }}
        />
      )}

      {isSnackbar && (
        <Stack
          ref={snackbarRef}
          direction="row"
          alignItems="center"
          sx={{
            position: 'absolute',
            top: 0,
            right: `-${snackbarWidth + 16}px`,
            backgroundColor: '#E8E8E8',
            ...buttonSizes[size],
            ...buttonPadding[size],
          }}
        >
          <span style={iconSizes[size]} />
          {state === 'pending' && (
            <Stack
              sx={{
                position: 'absolute',
                ...spinnerPosition[size],
              }}
            >
              <CircularProgress size={spinnerSizes[size]} color="inherit" />
            </Stack>
          )}
          {state !== 'pending' && (
            <Check
              sx={{
                position: 'absolute',
                ...iconPosition[startIcon ? 'start' : 'end'][size],
                ...iconSizes[size],
              }}
            />
          )}
          <Typography
            sx={{ opacity: loadingPosition === 'center' && state === 'pending' ? 0 : 1 }}
            variant={typographySizes[size].variant}
          >
            1
          </Typography>
        </Stack>
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
  handleClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  isSnackbar?: boolean;
};
