import React from 'react';
import { Typography } from '@mui/material';

type H2Props = {
  children: React.ReactNode;
};

const H2: React.FC<H2Props> = ({ children }) => (
  <Typography
    sx={{
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '32px',
    }}
  >
    {children}
  </Typography>
);

export default H2;
