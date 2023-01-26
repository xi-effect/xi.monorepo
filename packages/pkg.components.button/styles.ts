import { LoadingPosition, Status } from './types';

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
      '&:active': {
        backgroundColor: '#3546BD',
      },
    },
    confirm: {
      backgroundColor: '#00A82C',
      '&:hover': {
        backgroundColor: '#029127',
      },
      '&:active': {
        backgroundColor: '#029127',
      },
    },
    reject: {
      backgroundColor: '#00A82C',
      '&:hover': {
        backgroundColor: '#029127',
      },
      '&:active': {
        backgroundColor: '#029127',
      },
    },
  },
  outlined: {
    primary: {},
    confirm: {},
    reject: {},
  },
  text: {
    primary: {},
    confirm: {},
    reject: {},
  },
};

export const buttonDisabled = {
  default: {
    backgroundColor: '#E8E8E8',
    color: '#FFFFFF',
  },
  contained: {
    primary: {
      backgroundColor: '#3546BD',
      color: '#FFFFFF',
    },
    confirm: {
      backgroundColor: '#029127',
      color: '#FFFFFF',
    },
    reject: {
      backgroundColor: '#029127',
      color: '#FFFFFF',
    },
  },
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
  startIcon: boolean,
  endIcon: boolean,
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
