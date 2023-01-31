export const buttonSizes = {
  large: {
    height: '34px',
    p: '0 16px',
  },
  medium: {
    height: '26px',
    p: '0 12px',
  },
  small: {
    height: '20px',
    p: '0 12px',
  },
};

export const buttonBorderRadius = {
  large: '6px',
  medium: '6px',
  small: '4px',
};

export const buttonStyle = {
  default: {
    color: '#404040',
    textTransform: 'none',
    bgcolor: 'transparent',
    '&:hover': {
      bgcolor: 'transparent',
    },
  },
  primary: {
    '&.Mui-selected': {
      color: 'grayscale.0',
      bgcolor: 'primary.dark',
      '&:hover': {
        bgcolor: 'primary.dark',
      },
    },
    '&:disabled': { border: 'none', color: 'grayscale.0', bgcolor: 'primary.dark', opacity: '.5' },
  },
  white: {
    '&.Mui-selected': {
      color: '#282828',
      bgcolor: 'grayscale.0',
      '&:hover': {
        bgcolor: 'grayscale.0',
      },
    },
    '&:disabled': { border: 'none', color: '#404040', bgcolor: '#E8E8E8', opacity: '.5' },
  },
};

export const typographyVariants = {
  large: 'm' as 'm',
  medium: 's' as 's',
  small: 'xs' as 'xs',
};

export const groupSizes = {
  large: { borderRadius: '8px' },
  medium: { borderRadius: '8px' },
  small: { borderRadius: '6px' },
};
