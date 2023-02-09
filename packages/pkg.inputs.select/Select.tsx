import { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select as MuiSelect, Typography, Stack } from '@mui/material';
import { Arrow } from 'pkg.icons.arrow';
import { SizesT, TypesT, ItemT } from './types';
import {
  selectSizes,
  selectTypes,
  MenuProps,
  selectClasses,
  placeholderIconSizes,
  placeholderTextSizes,
  menuItemStyles,
} from './style';

export type SelectProps = {
  /* unique id */
  id: string;
  /* select items */
  items: ItemT[];
  /* cancel your previus choose  */
  cancelItem?: string;
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

const OpenIcon = (isOpen: boolean, size: SizesT, onClick: () => void) => (
  <Stack
    justifyContent="center"
    alignItems="center"
    onClick={onClick}
    sx={{ height: '100%', cursor: 'pointer' }}
  >
    <Arrow
      sx={{
        color: 'grayscale.80',
        transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
        fontSize: size === 'm' ? '14px' : '11px',
      }}
    />
  </Stack>
);

export const Select = ({
  id,
  items,
  cancelItem,
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

  const handleDropIconClick = () => {
    setIsOpen((state) => !state);
  };

  const getDefaultValue = () => {
    const defaultItem = items.filter((item) => item.isDefault);
    changeValue(defaultItem[0].value);
  };

  useEffect(() => {
    getDefaultValue();
  }, []);

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
        tabIndex={type === 'disabled' ? -1 : 0}
        onChange={onChangeValue}
        value={value}
        MenuProps={{ sx: { ...MenuProps } }}
        displayEmpty
        IconComponent={() => OpenIcon(isOpen, size, handleDropIconClick)}
        onClose={onCloseMenu}
        onOpen={onOpenMenu}
        open={isOpen}
      >
        {/* placeholder */}
        <MenuItem value="" sx={{ display: 'none' }} key="disabled_item" defaultChecked>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ width: '110%' }}>
            {Icon && (
              <Icon
                sx={{
                  ...placeholderIconSizes[size],
                  color: 'grayscale.40',
                }}
              />
            )}
            <Typography
              sx={{
                ...placeholderTextSizes[size],
                color: 'grayscale.40',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {label}
            </Typography>
          </Stack>
        </MenuItem>

        {/* cancel choose item */}
        {cancelItem && (
          <MenuItem
            key="cancel_item"
            value={cancelItem}
            defaultChecked={false}
            sx={{
              ...menuItemStyles,
              position: 'relative',
              mb: '5px',
              '&:after': {
                content: "''",
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '-3px',
                disaply: 'inline-block',
                width: '90%',
                height: '1px',
                bgcolor: 'grayscale.10',
              },
            }}
          >
            {cancelItem}
          </MenuItem>
        )}

        {/* items list / dropdown menu  */}
        {items.map((item) => (
          <MenuItem
            value={item.value}
            key={item.id}
            disabled={item.isDisabled}
            sx={{
              ...menuItemStyles,
            }}
          >
            {item.value}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
