import { SizesT, TypesT } from './types';

export const selectSizes: { [key in SizesT]: any } = {
  m: {
    height: '48px',
  },
  s: {
    height: '32px',
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
    borderColor: 'grayscale.40',
    bgcolor: 'grayscale.40',
  },
};

export const selectRoot = {
  p: '4px',
};
export const selectPaper = {
  bgcolor: 'grayscale.0',
  border: '1px solid',
  borderColor: 'grayscale.10',
  boxShadow: '0px 16px 8px rgba(16, 16, 16, 0.04), 0px 12px 16px rgba(16, 16, 16, 0.04)',
  borderRadius: '8px',
  mt: '4px',
};
