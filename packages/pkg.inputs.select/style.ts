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
