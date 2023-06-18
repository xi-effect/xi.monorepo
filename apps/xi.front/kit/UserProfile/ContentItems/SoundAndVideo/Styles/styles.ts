export const menuStyles = (width?: number, colorScheme: 'light' | 'dark' = 'light') => ({
  mt: '8px',
  '& .MuiBackdrop-invisible': {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  '& .MuiMenuItem-root:hover': {
    backgroundColor: colorScheme === 'light' ? 'brand.0' : 'petersburg.90',
    color: 'brand.80',
  },
  '& .MuiMenuItem-root.active': {
    backgroundColor: colorScheme === 'light' ? 'brand.0' : 'petersburg.90',
    color: 'brand.80',
  },
  '& .MuiPaper-elevation': {
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#E6E6E6',
  },
  '& .MuiMenuItem-root': {
    fontSize: '16px',
    fontWeight: 500,
    color: 'petersburg.10',
    transition: 'background-color 0.2s ease-in, color 0.2s ease-in ',
  },
  '& .MuiMenu-list': {
    p: 0,
    width,
    backgroundColor: colorScheme === 'light' ? 'petersburg.0' : 'petersburg.100',
  },
});

export const contentTitle = {
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '32px',
  color: 'petersburg.100',
};

export const contentSubTitle = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: 'petersburg.40',
};

export const SliderS = {
  m: '0 12px',
  color: 'brand.80',
  borderRadius: '8px',
  '& .MuiSlider-rail': {
    borderRadius: '8px',
    opacity: 1,
    backgroundColor: 'petersburg.40',
  },
  '& .MuiSlider-thumb': {
    height: '16px',
    width: '16px',
  },
};
