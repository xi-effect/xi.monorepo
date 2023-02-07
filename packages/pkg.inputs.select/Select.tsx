import { MenuItem, Select as MuiSelect } from '@mui/material';

export type SelectProps = {
  /* select items */
  items: string[];
};

export const Select = ({ items }: SelectProps) => (
  <MuiSelect>
    {items.map((item, index) => (
      <MenuItem value={item} key={`${item}_${index}`}>
        {item}
      </MenuItem>
    ))}
  </MuiSelect>
);
