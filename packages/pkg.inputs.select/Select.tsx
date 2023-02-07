import { FormControl, MenuItem, Select as MuiSelect } from '@mui/material';
import { SizesT, TypesT } from './types';
import { selectSizes, selectTypes, selectPaper, selectRoot } from './style';

export type SelectProps = {
  /* unique id */
  id: string;
  /* select items */
  items: string[];
  /* select sized */
  size: SizesT;
  type?: TypesT;
  /* select custom width */
  width?: string;

  /* selected value */
  value: string;
  /* change selected value */
  changeValue: (newVal: string) => void;
};

export const Select = ({
  id,
  items,
  size,
  type = 'default',
  width = '250px',
  value,
  changeValue,
}: SelectProps) => {
  const onChangeValue = (e: any) => {
    const newValue = e.target.value;
    changeValue(newValue);
  };

  return (
    <FormControl sx={{ position: 'relative' }}>
      <MuiSelect
        labelId={id}
        sx={{
          ...selectSizes[size],
          border: '1.5px solid',
          ...selectTypes[type],
          borderRadius: '8px',
          width,
          transition: '0.3s',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          color: !value ? 'grayscale.40' : 'grayscale.80',
        }}
        disabled={type === 'disabled'}
        onChange={onChangeValue}
        value={value}
        MenuProps={{
          sx: { '.MuiMenu-paper': { ...selectPaper }, '&.MuiMenu-root': { ...selectRoot } },
        }}
      >
        {items.map((item, index) => (
          <MenuItem
            value={item}
            key={`${item}_${index}`}
            sx={{
              borderRadius: '4px',
              '&.Mui-selected': { bgcolor: 'primary.pale', color: 'primary.dark' },
            }}
          >
            {item}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
