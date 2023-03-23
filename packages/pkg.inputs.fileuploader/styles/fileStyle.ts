export const containerStyle = {
  medium: {
    minHeight: '40px',
    p: '12px',
    borderRadius: '8px',
  },
  small: {
    height: '32px',
    p: '8px',
    borderRadius: '6px',
  },
};

export const textVariants = {
  medium: 'm' as 'm',
  small: 's' as 's',
};

export const actionColorStyle = {
  medium: {
    text: 'grayscale.90',
    icon: 'grayscale.40',
  },
  hover: {
    text: 'grayscale.100',
    icon: 'grayscale.80',
  },
  error: {
    text: 'error.dark',
    icon: 'grayscale.40',
    hover: {
      text: 'error.dark',
      icon: 'grayscale.80',
    },
  },
};

export const iconSizesStyle = {
  medium: {
    width: '24px',
    height: '24px',
  },
  small: {
    width: '16px',
    height: '16px',
  },
};

export const getActionContainerStyle = (isHover: boolean, isFocus: boolean) => {
  if (isHover || isFocus) return { backgroundColor: 'grayscale.5' };
  return {};
};

export const getActionColorStyle = (isHover: boolean, isFocus: boolean, isError: boolean) => {
  if (isError && (isHover || isFocus)) return actionColorStyle.error.hover;

  if (isHover || isFocus) return actionColorStyle.hover;

  if (isError) return actionColorStyle.error;

  return actionColorStyle.medium;
};
