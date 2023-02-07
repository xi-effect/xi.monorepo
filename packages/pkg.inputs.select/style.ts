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
    borderColor: 'grayscale.10',
    '&:hover': {
      borderColor: 'grayscale.40',
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
