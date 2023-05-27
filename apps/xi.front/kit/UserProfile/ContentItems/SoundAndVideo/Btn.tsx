import React from 'react';
import { Button, SxProps, Theme } from '@mui/material';

type BtnT = {
  children: any;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  colorScheme?: 'light' | 'dark';
};

const Btn: React.FC<BtnT> = ({ children, onClick, colorScheme = 'light', sx }) => (
  <Button
    onClick={onClick}
    variant="contained"
    sx={{
      width: '160px',
      fontWeight: 500,
      borderRadius: '8px',
      textTransform: 'none',
      mr: colorScheme === 'light' ? 0 : '16px',
      height: colorScheme === 'light' ? '48px' : '30px',
      fontSize: colorScheme === 'light' ? '18px' : '12px',
      border: colorScheme === 'light' ? 'none' : '1px solid #E6E6E6',
      backgroundColor: colorScheme === 'light' ? 'primary.dark' : 'transparent',
      ...sx,
    }}
  >
    {children}
  </Button>
);

export default Btn;
