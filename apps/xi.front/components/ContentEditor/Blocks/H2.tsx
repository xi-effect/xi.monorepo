import React from 'react';
import { Typography } from '@mui/material';

// @ts-ignore
const H2: React.FC = ({ children }) => (
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
