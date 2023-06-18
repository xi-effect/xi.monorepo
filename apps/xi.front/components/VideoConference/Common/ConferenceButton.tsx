import React, { PropsWithChildren } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton/IconButton';

type ConferenceButtonT = {
  title: string;
  active?: boolean;
} & IconButtonProps &
  PropsWithChildren;

const ConferenceButton: React.FC<ConferenceButtonT> = (props) => {
  const { children, sx, title, active, ...restProps } = props;

  return (
    <Tooltip title={title} placement="bottom">
      <IconButton
        sx={{
          ml: '8px',
          height: '40px',
          width: '40px',
          borderRadius: '20px',
          borderWidth: '2px',
          borderStyle: 'solid',
          color: 'petersburg.0',
          bgcolor: 'petersburg.100',
          transition: 'border 0.3s ease',
          borderColor: active ? 'brand.80' : 'transparent',
          ...sx,
        }}
        {...restProps}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default ConferenceButton;
