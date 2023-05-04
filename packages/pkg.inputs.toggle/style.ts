export const sizeStyle = {
  large: {
    sizes: {
      padding: '0px',
      width: '56px',
      height: '32px',
      borderRadius: '24px',
    },
    '& .MuiSwitch-thumb': {
      width: '24px',
      height: '24px',
    },

    '& .MuiSwitch-switchBase': {
      padding: '0px',
      margin: '4px',
    },
    '&.Mui-checked': {
      transform: 'translateX(24px)',
    },
  },
  medium: {
    sizes: {
      padding: '0px',
      width: '40px',
      height: '24px',
      borderRadius: '24px',
    },
    '& .MuiSwitch-thumb': {
      width: '16px',
      height: '16px',
    },
    '& .MuiSwitch-switchBase': {
      padding: '0px',
      margin: '4px',
    },
    '&.Mui-checked': {
      transform: 'translateX(16px)',
    },
  },
  small: {
    sizes: {
      padding: '0px',
      width: '28px',
      height: '16px',
      borderRadius: '24px',
    },
    '& .MuiSwitch-thumb': {
      width: '12px',
      height: '12px',
    },
    '& .MuiSwitch-switchBase': {
      padding: '0px',
      margin: '2px',
    },
    '&.Mui-checked': {
      transform: 'translateX(12px)',
    },
  },
};

export const colorStyle = {
  initial: { backgroundColor: 'petersburg.40' },
  disabled: { backgroundColor: 'petersburg.10', color: 'petersburg.40' },
  checked: { color: 'petersburg.0', backgroundColor: 'primary.dark' },
};

export const typographyVariants = {
  large: 'l' as 'l',
  medium: 'm' as 'm',
  small: 'xs' as 'xs',
};

export const stackGap = {
  large: '8px',
  medium: '6px',
  small: '4px',
};
