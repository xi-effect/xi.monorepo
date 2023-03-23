import 'pkg.config.muidts';
import { Button, ButtonProps } from 'pkg.inputs.button';
import { Close } from 'pkg.icons.close';
import { FC, MouseEvent, ReactNode } from 'react';
import {
  useTheme,
  alpha,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  DialogProps,
  PaperProps,
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
  IconButton,
} from '@mui/material';
import { actionsStyle, contentStyle, dialogStyle, iconStyle, titleStyle } from './style';

export type ModalProps = {
  open: boolean;
  size?: 'large' | 'small';
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  confirmButtonTitle?: string;
  cancelButtonTitle?: string;
  hideLines?: boolean;
  onCancelButton?: (e?: MouseEvent<HTMLButtonElement>) => void;
  onConfirmButton?: (e?: MouseEvent<HTMLButtonElement>) => void;
  onCloseIcon?: (e?: MouseEvent<HTMLButtonElement>) => void;
  onClose?: (e?: any, reason?: 'backdropClick' | 'escapeKeyDown') => void;
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
  dialogProps?: Partial<DialogProps>;
  paperProps?: PaperProps;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  dialogActionsProps?: DialogActionsProps;
};

export const Modal: FC<ModalProps> = ({
  open,
  size = 'large',
  title,
  subtitle,
  children,
  confirmButtonTitle,
  cancelButtonTitle,
  hideLines,
  onConfirmButton,
  onCancelButton,
  onCloseIcon,
  onClose,
  cancelButtonProps,
  confirmButtonProps,
  dialogProps,
  paperProps,
  dialogTitleProps,
  dialogContentProps,
  dialogActionsProps,
}) => {
  const theme = useTheme<any>();

  const { sx: dialogSx, ...otherDialogProps } = { ...dialogProps };
  const { sx: paperSx, ...otherPaperProps } = { ...paperProps };
  const { sx: dialogContentSx, ...otherDialogContentProps } = { ...dialogContentProps };
  const {
    sx: dialogTitleSx,
    children: dialogTitleChildren,
    ...otherDialogTitleProps
  } = { ...dialogTitleProps };
  const {
    sx: dialogActionsSx,
    children: dialogsActionChildren,
    ...otherDialogActionsProps
  } = { ...dialogActionsProps };

  return (
    <Dialog
      onClose={onClose}
      fullWidth
      maxWidth={false}
      scroll="body"
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: alpha(theme.palette.grayscale[100], 0.4),
        },
        ...dialogSx,
      }}
      {...otherDialogProps}
      open={open}
      PaperProps={{
        sx: {
          ...dialogStyle.default,
          ...dialogStyle[size],
          ...paperSx,
        },
        ...otherPaperProps,
      }}
    >
      {onCloseIcon && (
        <IconButton disableRipple onClick={onCloseIcon} sx={iconStyle}>
          <Close />
        </IconButton>
      )}

      {(title || dialogTitleChildren) && (
        <DialogTitle
          component="div"
          sx={{
            ...titleStyle.default,
            borderColor: hideLines ? 'transparent' : 'grayscale.10',
            ...titleStyle[size],
            ...dialogTitleSx,
          }}
          {...otherDialogTitleProps}
        >
          {dialogTitleChildren}

          <Typography variant="xl" component="h3" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="m" sx={{ fontWeight: 400 }}>
              {subtitle}
            </Typography>
          )}
        </DialogTitle>
      )}

      {children && (
        <DialogContent
          sx={{
            '&.MuiDialogContent-root': {
              pt: size === 'large' ? '24px' : '0',
            },
            ...contentStyle.default,
            ...contentStyle[size],
            ...dialogContentSx,
          }}
          {...otherDialogContentProps}
        >
          {children}
        </DialogContent>
      )}

      {(onCancelButton || onConfirmButton || dialogsActionChildren) && (
        <DialogActions
          sx={{
            ...actionsStyle.default,
            borderColor: hideLines || !children ? 'transparent' : 'grayscale.10',
            ...actionsStyle[size],
            ...dialogActionsSx,
          }}
          {...otherDialogActionsProps}
        >
          {dialogsActionChildren}

          {onCancelButton && (
            <Button
              onClick={onCancelButton}
              variant="outlined"
              color="grayscale"
              {...cancelButtonProps}
            >
              {cancelButtonTitle}
            </Button>
          )}

          {onConfirmButton && (
            <Button onClick={onConfirmButton} color="primary" {...confirmButtonProps}>
              {confirmButtonTitle}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};
