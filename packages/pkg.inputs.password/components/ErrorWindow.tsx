import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';

export type ErrorWindowProps = {
  open: boolean;
  children?: ReactNode;
};

export const ErrorWindow = ({ open, children }: ErrorWindowProps) => (
  <Stack
    sx={{
      display: open ? 'block' : 'none',
      boxShadow: '0px 12px 16px 0px #1010100A, 0px 8px 8px 0px #1010100A',
      position: 'absolute',
      right: '-85%',
      bgcolor: 'grayscale.0',
      padding: '4px 8px',
      width: '205px',
      borderRadius: '8px',

      '&::before': {
        content: "''",
        position: 'absolute',
        top: '15%',
        left: '-5px',
        borderTop: '7px solid transparent',
        borderRight: '6px solid #fff',
        borderBottom: '7px solid transparent',
      },
    }}
  >
    {children}
  </Stack>
);
