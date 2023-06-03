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
    borderColor: 'petersburg.40',
    '&:hover': {
      borderColor: 'petersburg.60',
    },
  },
  warning: {
    borderColor: 'kungur.80',
  },
  error: {
    borderColor: 'moscow.60',
  },
  disabled: {
    borderColor: 'petersburg.10',
    bgcolor: 'petersburg.10',
  },
};

export const MenuProps = (menuMaxHeight: string) => ({
  '& .MuiMenu-paper': {
    border: '1px solid',
    borderColor: 'petersburg.10',
    boxShadow: '0px 16px 8px rgba(16, 16, 16, 0.04), 0px 12px 16px rgba(16, 16, 16, 0.04)',
    borderRadius: '8px',
    mt: '4px',
    width: '100%,',
    maxHeight: menuMaxHeight,
    overflowY: 'auto',
  },
  '& .MuiMenu-list': {
    p: '3px',
    bgcolor: 'petersburg.0',
  },
  '& .MuiBackdrop-root': {
    bgcolor: 'unset',
    width: 0,
    height: 0,
  },
  '&.MuiMenu-root': {
    width: 0,
    height: '100%',
  },
});

export const menuItemStyles = {
  borderRadius: '4px',
  '&.Mui-selected': {
    bgcolor: 'brand.0',
    color: 'brand.80',
    '&:hover': { bgcolor: 'petersburg.5', color: 'petersburg.100' },
  },
  '&:hover': { bgcolor: 'petersburg.5' },
  transition: '0.3s',
  fontSize: '14px',
  lineHeight: '20px',
  p: '8px 12px',
};

export const dividerStyles = {
  mb: '5px',
  '&:after': {
    content: "''",
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '-3px',
    disaply: 'inline-block',
    width: '90%',
    height: '1px',
    bgcolor: 'petersburg.10',
  },
};

/* change classes styles */
export const selectOverrideClasses = {
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSelect-outlined': {
    padding: 0,
  },
  '&.Mui-focused': {
    borderColor: 'petersburg.80',
  },
};
