import { SizesT, TypesT } from './types';

export const selectSizes: { [key in SizesT]: any } = {
  m: {
    height: '48px',
    p: '0px 14px 0 10px',
    borderRadius: '8px',
    fontSize: '16px',
  },
  s: {
    height: '32px',
    p: '0px 9px 0 7px',
    borderRadius: '6px',
    fontSize: '14px',
  },
};
export const placeholderIconSizes: { [key in SizesT]: any } = {
  m: {
    fonSize: '24px',
  },
  s: {
    fontSize: '16px',
  },
};
export const placeholderTextSizes: { [key in SizesT]: any } = {
  m: {
    fonSize: '16px',
  },
  s: {
    fontSize: '14px',
  },
};

export const selectTypes: { [key in TypesT]: any } = {
  default: {
    borderColor: 'grayscale.40',
    '&:hover': {
      borderColor: 'grayscale.60',
    },
  },
  warning: {
    borderColor: 'orange',
  },
  error: {
    borderColor: 'error.main',
  },
  disabled: {
    borderColor: 'grayscale.10',
    bgcolor: 'grayscale.10',
  },
};

export const MenuProps = {
  '& .MuiMenu-paper': {
    border: '1px solid',
    borderColor: 'grayscale.10',
    boxShadow: '0px 16px 8px rgba(16, 16, 16, 0.04), 0px 12px 16px rgba(16, 16, 16, 0.04)',
    borderRadius: '8px',
    mt: '4px',
    width: '100%,',
  },
  '& .MuiMenu-list': {
    p: '3px',
    bgcolor: 'grayscale.0',
  },
  '& .MuiBackdrop-root': {
    bgcolor: 'unset',
  },
};

export const menuItemStyles = {
  borderRadius: '4px',
  '&.Mui-selected': { bgcolor: 'primary.pale', color: 'primary.dark' },
  '&:hover': { bgcolor: 'grayscale.5' },
  transition: '0.3s',
  fontSize: '14px',
  lineHeight: '20px',
  p: '8px 12px',
};

/* change classes styles */
export const selectClasses = {
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSelect-outlined': {
    padding: 0,
  },
};
