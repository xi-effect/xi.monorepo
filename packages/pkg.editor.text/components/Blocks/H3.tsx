import React from 'react';
import { Typography } from '@mui/material';

type H3Props = {
  children: React.ReactNode;
};

const H3: React.FC<H3Props> = ({ children }) => (
  <Typography
    sx={{
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '24px',
    }}
  >
    {children}
  </Typography>
);

export default H3;
