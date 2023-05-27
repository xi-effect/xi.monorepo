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
          color: 'grayscale.0',
          borderRadius: '20px',
          bgcolor: 'grayscale.100',
          transition: 'border 0.3s ease',
          border: active ? '2px solid #445AFF' : '2px solid transparent',
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
