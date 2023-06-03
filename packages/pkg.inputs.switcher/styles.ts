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
    color: 'petersburg.80',
    textTransform: 'none',
    bgcolor: 'transparent',
    '&:hover': {
      bgcolor: 'transparent',
    },
  },
  primary: {
    '&.Mui-selected': {
      color: 'petersburg.0',
      bgcolor: 'brand.80',
      '&:hover': {
        bgcolor: 'brand.80',
      },
    },
    '&:disabled': { border: 'none', color: 'petersburg.0', bgcolor: 'brand.20' },
  },
  white: {
    '&.Mui-selected': {
      color: 'petersburg.90',
      bgcolor: 'petersburg.0',
      '&:hover': {
        bgcolor: 'petersburg.0',
      },
    },
    '&:disabled': { border: 'none', color: 'petersburg.40', bgcolor: 'petersburg.10' },
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
