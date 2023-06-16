import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { ArrowLeft, ArrowRight } from 'pkg.icons';

type ArrowsT = {
  maxPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const Arrows: React.FC<ArrowsT> = (props) => {
  const { setCurrentPage, maxPage, currentPage } = props;

  const [buttonStates, setButtonStates] = useState<{ left: boolean; right: boolean }>({
    left: true,
    right: false,
  });

  useEffect(() => {
    setButtonStates({ right: currentPage === maxPage - 1, left: currentPage === 0 });
  }, [currentPage]);

  const sx = {
    zIndex: '1',
    top: '50%',
    height: '40px',
    width: '40px',
    color: 'grayscale.0',
    borderRadius: '100%',
    position: 'absolute',
    bgcolor: 'grayscale.100',
    pointerEvents: maxPage > 1 ? 'none' : 'default',
    transition: 'opacity 0.3s ease, transform 0.4s ease',
    transform: maxPage > 1 ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0)',
  };

  return (
    <>
      <Tooltip title="Предыдущая страница" placement="bottom">
        <IconButton
          onClick={() => setCurrentPage((p) => p - 1)}
          sx={{
            ...sx,
            left: '0',
            opacity: buttonStates.left ? '0.3' : '1',
            pointerEvents: buttonStates.left ? 'none' : 'default',
          }}
        >
          <Box
            sx={{
              width: '16px',
              height: '16px',
            }}
          >
            <ArrowLeft />
          </Box>
        </IconButton>
      </Tooltip>

      <Tooltip title="Следущая страница" placement="bottom">
        <IconButton
          onClick={() => setCurrentPage((p) => p + 1)}
          sx={{
            ...sx,
            right: '0',
            opacity: buttonStates.right ? '0.3' : '1',
            pointerEvents: buttonStates.right ? 'none' : 'default',
          }}
        >
          <Box
            sx={{
              width: '16px',
              height: '16px',
            }}
          >
            <ArrowRight />
          </Box>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Arrows;
