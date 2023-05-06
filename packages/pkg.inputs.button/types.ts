import { ButtonProps as MuiButtonProps } from '@mui/material';

export type Status = 'idle' | 'pending' | 'completed';
export type Size = 'small' | 'medium' | 'large';
export type Variant = 'contained' | 'outlined' | 'text';
export type Color = 'primary' | 'success' | 'error' | 'grayscale';
export type LoadingPosition = 'icon' | 'center';
export type SnackbarPosition = 'left' | 'right' | 'top' | 'bottom';

export type ButtonProps = {
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
  // start or end button icon if icon without text, icon position will be center
  startIcon?: any;
  endIcon?: any;
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
  // styles
  sx?: any;
  // you can also pass default mui button attributes
} & Omit<MuiButtonProps, 'startIcon' | 'endIcon' | 'color'>;
