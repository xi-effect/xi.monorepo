import React from 'react';
import { Divider } from '@mui/material';

const DividerComp = () => (
  <div contentEditable={false}>
    <Divider
      sx={{
        mt: '14px',
        height: '2px',
        width: '100%',
        backgroundColor: 'petersburg.30',
      }}
    />
  </div>
);
export default DividerComp;
