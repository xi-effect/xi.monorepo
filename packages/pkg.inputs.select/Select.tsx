import { FormControl, MenuItem, Select as MuiSelect } from '@mui/material';
import { SizesT, TypesT } from './types';
import { selectSizes, selectTypes, MenuProps } from './style';

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
  label?: string;

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
  label = 'Выберите',
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
        }}
        disabled={type === 'disabled'}
        onChange={onChangeValue}
        value={value}
        MenuProps={{ sx: { ...MenuProps } }}
        inputProps={{ 'aria-label': 'Without label' }}
        displayEmpty
      >
        <MenuItem
          disabled
          value=""
          sx={{ display: 'none', color: value.length === 0 ? 'grayscale.40' : 'grayscale.80' }}
        >
          <em>{label}</em>
        </MenuItem>
        {items.map((item, index) => (
          <MenuItem
            value={item}
            key={`${item}_${index}`}
            sx={{
              borderRadius: '4px',
              '&.Mui-selected': { bgcolor: 'primary.pale', color: 'primary.dark' },
              '&:hover': { bgcolor: 'grayscale.5' },
              transition: '0.3s',
            }}
          >
            {item}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
