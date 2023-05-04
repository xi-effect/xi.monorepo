import { SizesT } from './types';

export const breadcrumbSizes: { [key in SizesT]: any } = {
  s: { fontSize: '12px', lineHeight: '16px' },
  m: { fontSize: '14px', lineHeight: '20px' },
  l: { fontSize: '16px', lineHeight: '22px' },
};
export const separatorSizes: { [key in SizesT]: any } = {
  s: { fontSize: '10px' },
  m: { fontSize: '12px' },
  l: { fontSize: '14px' },
};
