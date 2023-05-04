import { SnackbarPosition, Variant } from './types';

export const buttonSizes = {
  large: {
    height: '56px',
    borderRadius: '12px',
    gap: '16px',
  },
  medium: {
    height: '48px',
    borderRadius: '8px',
    gap: '8px',
  },
  small: {
    height: '32px',
    borderRadius: '6px',
    gap: '6px',
  },
};

export const buttonVariantsColor = {
  contained: {
    primary: {
      bgcolor: 'primary.dark',
      color: 'petersburg.0',
    },
    success: {
      bgcolor: 'success.dark',
      color: 'petersburg.0',
    },
    error: {
      bgcolor: 'error.dark',
      color: 'petersburg.0',
    },
    grayscale: {
      bgcolor: 'grayscale.40',
      color: 'grayscale.100',
    },
  },
  outlined: {
    primary: {
      borderColor: 'primary.dark',
      color: 'primary.dark',
    },
    success: {
      borderColor: 'success.dark',
      color: 'success.dark',
    },
    error: {
      borderColor: 'error.dark',
      color: 'error.dark',
    },
    grayscale: {
      color: 'grayscale.100',
      borderColor: 'grayscale.40',
    },
  },
  text: {
    primary: { color: 'primary.dark' },
    success: { color: 'success.dark' },
    error: { color: 'error.dark' },
    grayscale: { color: 'grayscale.100' },
  },
};

export const buttonDisabledStyle = {
  contained: {
    backgroundColor: 'petersburg.10',
    color: 'petersburg.40',
  },
  outlined: {
    border: '1px solid',
    borderColor: 'petersburg.10',
    color: 'petersburg.40',
  },
  text: {
    color: 'petersburg.40',
  },
};

export const buttonBorderStyle = {
  large: '2px solid',
  medium: '2px solid',
  small: '1px solid',
};

export const clickedPadding = {
  large: { pt: '14px', pb: '12px' },
  medium: { pt: '13px', pb: '11px' },
  small: { pt: '9px', pb: '7px' },
};

export const typographyVariants = {
  large: 'l' as 'l',
  medium: 'm' as 'm',
  small: 's' as 's',
};

export const iconSizes = {
  large: {
    width: '32px',
    height: '32px',
  },
  medium: {
    width: '24px',
    height: '24px',
  },
  small: {
    width: '16px',
    height: '16px',
  },
};

export const spinnerSizes = {
  large: 32,
  medium: 24,
  small: 16,
};

export const getButtonPadding = (isText: boolean, startIcon: boolean, endIcon: boolean) => {
  const isTextIconButton = isText && (startIcon || endIcon);
  const isIconButton = !isText && (startIcon || endIcon);

  const style = {
    large: {
      padding: '13px 32px',
    },
    medium: {
      padding: '12px 24px',
    },
    small: {
      padding: '8px 16px',
    },
  };

  if (isTextIconButton) {
    if (startIcon) {
      style.large.padding = '13px 24px 13px 12px';
      style.medium.padding = '12px 16px 12px 12px';
      style.small.padding = '8px 12px 8px 8px';
      return style;
    }
    if (endIcon) {
      style.large.padding = '13px 12px 13px 24px';
      style.medium.padding = '12px 12px 12px 16px';
      style.small.padding = '8px 8px 8px 12px';
      return style;
    }
  }

  if (isIconButton) {
    style.large.padding = '13px 12px';
    style.medium.padding = '12px 12px';
    style.small.padding = '8px 8px';
    return style;
  }

  return style;
};

export const getSnackbarCurrentPosition = (snackbarSize: number, position: SnackbarPosition) => {
  switch (position) {
    case 'top':
      return { top: `-${snackbarSize + 8}px`, right: '50%', transform: 'translateX(50%)' };
    case 'bottom':
      return { bottom: `-${snackbarSize + 8}px`, right: '50%', transform: 'translateX(50%)' };
    case 'left':
      return { left: `-${snackbarSize + 16}px`, top: 0 };
    default: {
      return { right: `-${snackbarSize + 16}px` };
    }
  }
};

export const getActionButtonStyle = (variant: Variant, color: string) => {
  if (color === 'grayscale') {
    return { bgcolor: 'grayscale.5', color: 'grayscale.100' };
  }

  switch (variant) {
    case 'contained':
      return { bgcolor: color, color: 'petersburg.0' };
    case 'outlined':
      return { bgcolor: 'grayscale.5', borderColor: color, color };
    default:
      return {
        bgcolor: 'grayscale.5',
        color,
      };
  }
};
