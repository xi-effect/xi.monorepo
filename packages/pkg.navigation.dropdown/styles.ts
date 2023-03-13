import { DropdownSizesT } from './types';

export const dropdownSizes: { [key in DropdownSizesT]: any } = {
  s: {
    fontSize: '12px',
    lineHeight: '16px',
    gap: '4px',
  },
  m: {
    fontSize: '14px',
    lineHeight: '20px',
    gap: '6px',
  },
  l: {
    fontSize: '16px',
    lineHeight: '22px',
    gap: '8px',
  },
};

export const MenuProps = {
  '&.Dropdown-root': {
    width: '100px',
    height: '100%',

    '& .MuiBackdrop-root': {
      bgcolor: 'unset',
      width: 0,
      height: 0,
    },

    '.MuiMenu-paper': {
      minWidth: '242px',
      border: '1px solid',
      borderColor: 'grayscale.10',
      borderRadius: '8px',
      boxShadow: '0px 16px 8px rgba(16, 16, 16, 0.04), 0px 12px 16px rgba(16, 16, 16, 0.04)',
      p: '4px',
      mt: '4px',
    },
  },
};
