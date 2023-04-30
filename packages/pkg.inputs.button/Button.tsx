import 'pkg.config.muidts';

import { Typography, Button as MuiButton, darken, useTheme } from '@mui/material';
import React, { FC, MouseEvent } from 'react';

import { ButtonPropsType } from './types';

import {
  buttonVariantsColor,
  buttonSizes,
  getButtonPadding,
  buttonDisabled,
  getActionButtonStyle,
  typographyVariants,
  clickedPadding,
} from './styles';
import { ButtonSnackbar } from './ButtonSnackbar';
import { IconContainer } from './IconContainer';
import { Loading } from './Loading';

export const Button: FC<ButtonPropsType> = ({
  status = 'idle',
  size = 'medium',
  loadingPosition = 'center',
  variant = 'contained',
  color = 'primary',
  children,
  startIcon,
  endIcon,
  onClick,
  isSnackbar,
  snackbarText,
  isSnackbarIconStart,
  isSnackbarIconEnd,
  snackbarLoadingPosition,
  snackbarPosition,
  sx,
  ...props
}) => {
  const theme = useTheme();

  const actionButtonStyle = getActionButtonStyle(variant, darken(theme.palette[color].dark, 0.2));
  const buttonPadding = getButtonPadding(!!children, !!startIcon, !!endIcon);

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (status === 'completed') return;

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <MuiButton
      onClick={onButtonClick}
      disabled={status === 'pending' || status === 'completed'}
      size={size}
      disableRipple
      disableElevation
      sx={{
        textTransform: 'none',
        position: 'relative',
        minWidth: 0,
        width: 'fit-content',
        '&:hover': {
          ...actionButtonStyle,
        },
        '&:disabled': status !== 'completed' ? buttonDisabled[variant] : actionButtonStyle,
        '&:active': {
          ...actionButtonStyle,
          pt: clickedPadding[size].pt,
          pb: clickedPadding[size].pb,
        },
        ...buttonSizes[size],
        ...buttonVariantsColor[variant][color],
        ...buttonPadding[size],
        ...sx,
      }}
      {...props}
    >
      {startIcon && (
        <IconContainer
          icon={startIcon}
          size={size}
          order={0}
          status={status}
          isLoadingIcon={loadingPosition !== 'center'}
        />
      )}
      {endIcon && (
        <IconContainer
          icon={endIcon}
          size={size}
          order={2}
          status={status}
          isLoadingIcon={loadingPosition !== 'center'}
        />
      )}

      {children && (
        <Typography
          order={1}
          variant={typographyVariants[size]}
          sx={{
            color: 'inherit',
            opacity: loadingPosition === 'center' && status === 'pending' ? 0 : 1,
          }}
        >
          {children}
        </Typography>
      )}

      {status === 'pending' && loadingPosition === 'center' && (
        <Loading top="50%" left="50%" transform="translate(-50%,-50%)" size={size} />
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
          snackbarPosition={snackbarPosition}
        />
      )}
    </MuiButton>
  );
};
