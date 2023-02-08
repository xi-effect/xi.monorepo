import { useState } from 'react';
import { FormControl, MenuItem, Select as MuiSelect, Typography, Stack } from '@mui/material';
import { Arrow } from 'pkg.icons.arrow';
import { SizesT, TypesT } from './types';
import {
  selectSizes,
  selectTypes,
  MenuProps,
  selectClasses,
  placeholderIconSizes,
  placeholderTextSizes,
} from './style';

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
  /* Icon in placeholder */
  Icon?: any;

  /* selected value */
  value: string;
  /* change selected value */
  changeValue: (newVal: string) => void;
};

const OpenIcon = (isOpen: boolean, size: SizesT) => (
  <Arrow
    sx={{
      color: 'grayscale.80',
      transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
      fontSize: size === 'm' ? '14px' : '11px',
    }}
  />
);

export const Select = ({
  id,
  items,
  size,
  type = 'default',
  width = '250px',
  label = 'Выберите',
  Icon,
  value,
  changeValue,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMenu = () => {
    setIsOpen(true);
  };
  const onCloseMenu = () => {
    setIsOpen(false);
  };

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
          width,
          transition: '0.3s',
          ...selectClasses,
        }}
        disabled={type === 'disabled'}
        onChange={onChangeValue}
        value={value}
        MenuProps={{ sx: { ...MenuProps } }}
        inputProps={{ 'aria-label': 'Without label' }}
        displayEmpty
        IconComponent={() => OpenIcon(isOpen, size)}
        onClose={onCloseMenu}
        onOpen={onOpenMenu}
        open={isOpen}
      >
        {/* placeholder */}
        <MenuItem disabled value="" sx={{ display: 'none' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            {Icon && (
              <Icon
                sx={{
                  ...placeholderIconSizes[size],
                  color: value.length === 0 ? 'grayscale.40' : 'grayscale.80',
                }}
              />
            )}
            <Typography
              sx={{
                ...placeholderTextSizes[size],
                color: value.length === 0 ? 'grayscale.40' : 'grayscale.80',
              }}
            >
              {label}
            </Typography>
          </Stack>
        </MenuItem>

        {/* items list / dropdown menu  */}
        {items.map((item, index) => (
          <MenuItem
            value={item}
            key={`${item}_${index}`}
            sx={{
              borderRadius: '4px',
              '&.Mui-selected': { bgcolor: 'primary.pale', color: 'primary.dark' },
              '&:hover': { bgcolor: 'grayscale.5' },
              transition: '0.3s',
              fontSize: '14px',
              lineHeight: '20px',
            }}
          >
            {item}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
