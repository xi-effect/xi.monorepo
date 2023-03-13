/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { observer } from 'mobx-react';
import { Box, Stack, Button } from '@mui/material';
import { Arrow } from 'pkg.icons.arrow';

const Slider = observer(() => {
  const containerRef = React.useRef<HTMLDivElement>();

  const [showLeft, setShowLeft] = React.useState(false);

  const handleLeft = () => {
    if (containerRef && containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: -100,
        behavior: 'smooth',
      });

      if (containerRef.current?.scrollLeft === 0) {
        setShowLeft(false);
      }
    }
  };

  const handleRight = () => {
    if (containerRef && containerRef.current) {
      if (containerRef.current?.scrollLeft === 0) {
        setShowLeft(true);
      }

      containerRef.current.scrollBy({
        top: 0,
        left: +150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      sx={{
        mt: 2,
        position: 'relative',
        width: '100%',
      }}
    >
      {showLeft && (
        <Stack
          onClick={handleLeft}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            zIndex: 100,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100px',
            background: 'linear-gradient(270deg, #ECEFFF 0%, rgba(236, 239, 255, 0.9) 100%);',
            cursor: 'pointer',
          }}
        >
          <Button
            sx={{
              height: 48,
              width: 48,
              minWidth: 48,
              borderRadius: 24,
              bgcolor: 'grayscale.0',
              transform: 'rotate(180deg)',
            }}
          >
            <Arrow color="#445AFF" />
          </Button>
        </Stack>
      )}
      <Stack
        onClick={handleRight}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          zIndex: 100,
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '100px',
          background: 'linear-gradient(270deg, #ECEFFF 0%, rgba(236, 239, 255, 0.9) 100%);',
          cursor: 'pointer',
        }}
      >
        <Button
          sx={{
            height: 48,
            width: 48,
            minWidth: 48,
            borderRadius: 24,
            bgcolor: 'grayscale.0',
          }}
        >
          <Arrow color="#445AFF" />
        </Button>
      </Stack>
    </Box>
  );
});

export default Slider;
