import React, { PropsWithChildren, useEffect } from 'react';
import { Box, Fade, Popper, PopperPlacementType, SxProps, Theme } from '@mui/material';

export type PopperContainerT = {
  sx?: SxProps<Theme>;
  open?: boolean;
  className?: string;
  closeMenu: () => void;
  anchorEl: null | HTMLElement;
  placement?: PopperPlacementType;
};

const PopperContainer: React.FC<PropsWithChildren<PopperContainerT>> = (props) => {
  const { closeMenu, anchorEl, sx, children, placement, open, className = 'popper' } = props;

  const listener = (e) => {
    const target = e.target as HTMLElement;

    if (!target.closest('.popper-btn') && !target.closest('.popper')) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', listener);

    return () => document.body.removeEventListener('click', listener);
  });

  return (
    <Popper
      transition
      anchorEl={anchorEl}
      className={className}
      placement={placement || 'top-end'}
      open={open === undefined ? !!anchorEl : open}
      sx={{
        pb: '16px',
        zIndex: 101,
        position: 'relative',
      }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Box sx={sx}>{children}</Box>
        </Fade>
      )}
    </Popper>
  );
};

export default PopperContainer;
