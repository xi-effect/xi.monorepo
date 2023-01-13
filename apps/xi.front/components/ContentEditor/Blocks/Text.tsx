import React from 'react';
import { Typography } from '@mui/material';

// @ts-ignore
const Text: React.FC = ({ children }) => (
  <Typography
    sx={{
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '20px',
      pt: '5px',
    }}
  >
    {children}
  </Typography>
);

export default Text;
