import { LoadingPosition, SnackbarPosition, Status } from './types';

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
      backgroundColor: '#445AFF',
      '&:hover': {
        backgroundColor: '#3546BD',
      },
    },
    confirm: {
      backgroundColor: '#00A82C',
      '&:hover': {
        backgroundColor: '#029127',
      },
    },
    reject: {
      backgroundColor: '#DD0D0C',
      '&:hover': {
        backgroundColor: '#BE0D0C',
      },
    },
  },
  outlined: {
    primary: {
      border: '1px solid #445AFF',
      '&:hover': {
        border: '1px solid #3546BD',
      },
    },
    confirm: {
      border: '1px solid #00A82C',
      '&:hover': {
        border: '1px solid #029127',
      },
    },
    reject: {
      border: '1px solid #DD0D0C',
      '&:hover': {
        border: '1px solid #BE0D0C',
      },
    },
  },
  text: {
    primary: {},
    confirm: {},
    reject: {},
  },
};

export const buttonActive = {
  contained: {
    primary: {
      backgroundColor: '#3546BD',
    },
    confirm: {
      backgroundColor: '#029127',
    },
    reject: {
      backgroundColor: '#BE0D0C',
    },
  },
  outlined: {
    primary: {
      border: '1px solid #3546BD',
    },
    confirm: {
      border: '1px solid #029127',
    },
    reject: {
      border: '1px solid #BE0D0C',
    },
  },
  text: {
    primary: {},
    confirm: {},
    reject: {},
  },
};

export const buttonDisabled = {
  contained: {
    backgroundColor: '#E8E8E8',
  },
  outlined: {
    border: '1px solid #E8E8E8',
  },
  text: {},
};

export const typographySizes = {
  large: {
    variant: 'l' as 'l',
  },
  medium: {
    variant: 'm' as 'm',
  },
  small: {
    variant: 's' as 's',
  },
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

export const iconPosition = {
  start: {
    large: {
      left: '12px',
    },
    medium: {
      left: '12px',
    },
    small: {
      left: '8px',
    },
  },
  end: {
    large: {
      right: '12px',
    },
    medium: {
      right: '12px',
    },
    small: {
      right: '8px',
    },
  },
};

export const getButtonPadding = (isText: boolean, startIcon: boolean, endIcon: boolean) => {
  const isTextIconButton = isText && (startIcon || endIcon);
  const isIconButton = !isText && (startIcon || endIcon);

  const style = {
    large: {
      padding: '0 32px',
    },
    medium: {
      padding: '0 24px',
    },
    small: {
      padding: '0 16px',
    },
  };

  if (isTextIconButton) {
    if (startIcon) {
      style.large.padding = '0 24px 0 12px';
      style.medium.padding = '0 16px 0 12px';
      style.small.padding = '0 12px 0 8px';
      return style;
    }
    if (endIcon) {
      style.large.padding = '0 12px 0 24px';
      style.medium.padding = '0 12px 0 16px';
      style.small.padding = '0 8px 0 12px';
      return style;
    }
  }

  if (isIconButton) {
    style.large.padding = '0 12px';
    style.medium.padding = '0 12px';
    style.small.padding = '0 8px';
    return style;
  }

  return style;
};

export const getSpinnerPosition = (
  isText: boolean,
  startIcon?: boolean,
  endIcon?: boolean,
  loadingPosition: LoadingPosition = 'center',
) => {
  const defaultPosition = {
    large: {
      left: '50%',
      transform: 'translateX(-50%)',
    },
    medium: {
      left: '50%',
      transform: 'translateX(-50%)',
    },
    small: {
      left: '50%',
      transform: 'translateX(-50%)',
    },
  };

  if (!isText || loadingPosition === 'center') {
    return defaultPosition;
  }

  if (startIcon) {
    return {
      large: {
        left: '12px',
      },
      medium: {
        left: '12px',
      },
      small: {
        left: '8px',
      },
    };
  }

  if (endIcon) {
    return {
      large: {
        right: '12px',
      },
      medium: {
        right: '12px',
      },
      small: {
        right: '8px',
      },
    };
  }

  return defaultPosition;
};

export const getIconOpacity = (status: Status) => {
  if (status === 'pending' || status === 'completed') return 0;
  return 1;
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
