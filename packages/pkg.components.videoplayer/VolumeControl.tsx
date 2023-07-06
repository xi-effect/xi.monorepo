import { Box, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { SoundOff, SoundOn } from 'pkg.icons';
import { Range } from './Range';
import { iconButtonStyle, iconStyle, rangeContainerStyle } from './style';

type VolumeControlProps = {
  volume: number;
  onChange: (event: Event, value: number | number[]) => void;
};

export const VolumeControl: FC<VolumeControlProps> = ({ volume, onChange }) => {
  const [isShow, setIsShow] = useState(false);

  const handleIconClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <Box sx={{ position: 'relative', ml: 'auto' }}>
      <IconButton onClick={handleIconClick} sx={iconButtonStyle}>
        {volume > 0 ? <SoundOn sx={iconStyle} /> : <SoundOff sx={iconStyle} />}
      </IconButton>

      {isShow && (
        <Box sx={rangeContainerStyle}>
          <Range
            orientation="vertical"
            min={0}
            max={1}
            value={volume}
            step={0.01}
            onChange={onChange}
          />
        </Box>
      )}
    </Box>
  );
};
