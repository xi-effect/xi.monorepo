import 'pkg.config.muidts';

import { Typography, Button as MuiButton, darken, useTheme } from '@mui/material';
import React, { FC, MouseEvent } from 'react';

import { ButtonProps } from './types';

import {
  buttonVariantsColor,
  buttonSizes,
  getButtonPadding,
  buttonDisabledStyle,
  getActionButtonStyle,
  typographyVariants,
  clickedPadding,
  buttonBorderStyle,
} from './styles';
import { ButtonSnackbar } from './ButtonSnackbar';
import { IconContainer } from './IconContainer';
import { Loading } from './Loading';

export const Button: FC<ButtonProps> = ({
  status = 'idle',
  size = 'medium',
  loadingPosition = 'center',
  variant = 'contained',
  color = 'primary',
  children,
  startIcon,
  endIcon,
  isSnackbar,
  snackbarText,
  isSnackbarIconStart,
  isSnackbarIconEnd,
  snackbarLoadingPosition,
  snackbarPosition,
  ...props
}) => {
  const { sx, onClick, ...otherButtonProps } = props;

  const theme = useTheme();

  const actionButtonStyle = getActionButtonStyle(
    variant,
    color === 'grayscale' ? 'grayscale' : darken(theme.palette[color].dark, 0.2),
  );

  const buttonPadding = getButtonPadding(!!children, !!startIcon, !!endIcon);

  const buttonBorder = variant === 'outlined' ? buttonBorderStyle[size] : 'none';
  const buttonDisabled = status !== 'completed' ? buttonDisabledStyle[variant] : actionButtonStyle;

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
        border: buttonBorder,
        '&:hover': {
          ...actionButtonStyle,
        },
        '&:disabled': {
          ...buttonDisabled,
        },
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
      {...otherButtonProps}
    >
      {startIcon && (
        <IconContainer
          Icon={startIcon}
          size={size}
          order={0}
          status={status}
          isLoadingIcon={loadingPosition !== 'center'}
        />
      )}
      {endIcon && (
        <IconContainer
          Icon={endIcon}
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
