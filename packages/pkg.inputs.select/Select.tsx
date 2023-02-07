import { MenuItem, Select as MuiSelect } from '@mui/material';
import { SizesT } from './types';
import { selectSizes } from './style';

export type SelectProps = {
  /* select items */
  items: string[];
  /* select sized */
  size: SizesT;
  /* select custom width */
  width?: string;
};

export const Select = ({ items, size, width = '250px' }: SelectProps) => (
  <MuiSelect sx={{ ...selectSizes[size], width }}>
    {items.map((item, index) => (
      <MenuItem value={item} key={`${item}_${index}`}>
        {item}
      </MenuItem>
    ))}
  </MuiSelect>
);
