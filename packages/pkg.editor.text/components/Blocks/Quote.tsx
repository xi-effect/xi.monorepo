import React from 'react';
import { Typography } from '@mui/material';

type QuoteProps = {
  children: React.ReactNode;
};

const Quote: React.FC<QuoteProps> = ({ children }) => (
  <Typography
    sx={{
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '22px',
      pt: '5px',
      '&::before': {
        content: '"«"',
        color: '#445AFF',
        mr: '4px',
      },
      '&::after': {
        content: '"»"',
        color: '#445AFF',
        ml: '4px',
      },
    }}
  >
    {children}
  </Typography>
);

export default Quote;
