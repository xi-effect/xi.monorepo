import 'pkg.config.muidts';

import { Typography, Button as MuiButton, darken, useTheme, ButtonProps } from '@mui/material';
import { FC, FunctionComponent, MouseEvent } from 'react';

import { Color, LoadingPosition, Size, SnackbarPosition, Status, Variant } from './types';

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
  text,
  startIcon,
  endIcon,
  handleButtonClick,
  isSnackbar,
  snackbarText,
  isSnackbarIconStart,
  isSnackbarIconEnd,
  snackbarLoadingPosition,
  snackbarPosition,
  ...props
}) => {
  const theme = useTheme();

  const actionButtonStyle = getActionButtonStyle(variant, darken(theme.palette[color].dark, 0.2));
  const buttonPadding = getButtonPadding(!!text, !!startIcon, !!endIcon);

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

      {text && (
        <Typography
          order={1}
          variant={typographyVariants[size]}
          sx={{
            color: 'inherit',
            opacity: loadingPosition === 'center' && status === 'pending' ? 0 : 1,
          }}
        >
          {text}
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

type ButtonPropsType = {
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
  // button text
  text?: string;
  // start or end button icon if icon without text, icon position will be center
  startIcon?: FunctionComponent<any>;
  endIcon?: FunctionComponent<any>;
  // button icon color
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
  // snackbar position: default right
  snackbarPosition?: SnackbarPosition;
  // you can also pass default mui button attributes
} & Omit<ButtonProps, 'startIcon' | 'endIcon'>;
