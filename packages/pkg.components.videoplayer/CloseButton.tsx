import { IconButton } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { Close } from 'pkg.icons';

type CloseButtonProps = { onClick: MouseEventHandler<HTMLButtonElement> };

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => (
  <IconButton
    sx={{
      position: 'fixed',
      right: '32px',
      top: '32px',
      width: '40px',
      height: '40px',
      bgcolor: '#404040',
      '&:hover': {
        bgcolor: '#404040',
      },
    }}
    onClick={onClick}
  >
    <Close sx={{ color: '#fff' }} />
  </IconButton>
);
