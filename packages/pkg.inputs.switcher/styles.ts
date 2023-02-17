export const buttonSizes = {
  large: {
    height: '34px',
    p: '5px 16px 7px 16px',
  },
  medium: {
    height: '26px',
    p: '2px 12px 4px 12px',
  },
  small: {
    height: '20px',
    p: '1px 8px 3px 8px',
  },
};

export const buttonBorderRadius = {
  large: '6px',
  medium: '6px',
  small: '4px',
};

export const buttonStyle = {
  default: {
    color: 'grayscale.80',
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
    '&:disabled': { border: 'none', color: 'grayscale.0', bgcolor: 'primary.light' },
  },
  white: {
    '&.Mui-selected': {
      color: 'grayscale.90',
      bgcolor: 'grayscale.0',
      '&:hover': {
        bgcolor: 'grayscale.0',
      },
    },
    '&:disabled': { border: 'none', color: 'grayscale.40', bgcolor: 'grayscale.10' },
  },
};

export const typographyVariants = {
  large: 'm' as 'm',
  medium: 's' as 's',
  small: 'xs' as 'xs',
};

export const groupSizes = {
  large: { borderRadius: '8px', p: '1px' },
  medium: { borderRadius: '8px', p: '1px' },
  small: { borderRadius: '6px', p: '0px' },
};
