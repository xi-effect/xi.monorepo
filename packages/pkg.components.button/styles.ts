export const buttonStyle = {
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

export const buttonColorStyle = {
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

export const typographyStyle = {
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
export const iconStyle = {
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

export const spinnerStyle = {
  large: {
    size: 32,
  },
  medium: {
    size: 24,
  },
  small: {
    size: 16,
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
  loadingPosition: 'start' | 'center' | 'end',
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

  if (!isText) {
    return defaultPosition;
  }
  if (startIcon && loadingPosition === 'start') {
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
  if (endIcon && loadingPosition === 'end') {
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

export const getStartIconOpacity = (iconPosition: string, status: string) => {
  if (iconPosition === 'start' && (status === 'pending' || status === 'completed')) return 0;
  return 1;
};
export const getEndIconOpacity = (iconPosition: string, status: string) => {
  if ((iconPosition === 'end' && status === 'pending') || status === 'completed') return 0;
  return 1;
};
