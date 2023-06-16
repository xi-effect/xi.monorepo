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
      bgcolor: 'brand.80',
      color: 'petersburg.0',
    },
    success: {
      bgcolor: 'ekaterinburg.80',
      color: 'petersburg.0',
    },
    error: {
      bgcolor: 'moscow.80',
      color: 'petersburg.0',
    },
    grayscale: {
      bgcolor: 'petersburg.40',
      color: 'petersburg.100',
    },
  },
  outlined: {
    primary: {
      borderColor: 'brand.80',
      color: 'brand.80',
    },
    success: {
      borderColor: 'ekaterinburg.80',
      color: 'ekaterinburg.80',
    },
    error: {
      borderColor: 'moscow.80',
      color: 'moscow.80',
    },
    grayscale: {
      color: 'petersburg.100',
      borderColor: 'petersburg.40',
    },
  },
  text: {
    primary: { color: 'brand.80' },
    success: { color: 'ekaterinburg.80' },
    error: { color: 'moscow.80' },
    grayscale: { color: 'petersburg.100' },
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
    return { bgcolor: 'petersburg.5', color: 'petersburg.100' };
  }

  switch (variant) {
    case 'contained':
      return { bgcolor: color, color: 'petersburg.0' };
    case 'outlined':
      return { bgcolor: 'petersburg.5', borderColor: color, color };
    default:
      return {
        bgcolor: 'petersburg.5',
        color,
      };
  }
};
