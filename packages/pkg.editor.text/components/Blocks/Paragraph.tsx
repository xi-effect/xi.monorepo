import React from 'react';
import { Typography } from '@mui/material';

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
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

export default Paragraph;
