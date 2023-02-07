import { MenuItem, Select as MuiSelect } from '@mui/material';
import { SizesT, TypesT } from './types';
import { selectSizes, selectTypes } from './style';

export type SelectProps = {
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
    <MuiSelect
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
    >
      {items.map((item, index) => (
        <MenuItem value={item} key={`${item}_${index}`}>
          {item}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
