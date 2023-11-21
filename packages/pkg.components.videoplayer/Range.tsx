import { Slider } from '@mui/material';
import { FC, SyntheticEvent } from 'react';
import { rangeStyle } from './style';

type RangeProps = {
  min: number;
  max: number;
  value: number;
  step?: number;
  orientation?: 'horizontal' | 'vertical';
  onChange: (event: Event, value: number | number[]) => void;
  onChangeCommitted?: (event: Event | SyntheticEvent, value: number | number[]) => void;
};

export const Range: FC<RangeProps> = ({
  min,
  max,
  value,
  step,
  orientation = 'horizontal',
  onChange,
  onChangeCommitted,
}) => (
  <Slider
    sx={{ ...rangeStyle.default, ...rangeStyle[orientation] }}
    min={min}
    max={max}
    value={value}
    step={step}
    orientation={orientation}
    size="small"
    onChange={onChange}
    onChangeCommitted={onChangeCommitted}
  />
);
