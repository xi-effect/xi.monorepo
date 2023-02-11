import { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select as MuiSelect, Typography, Stack } from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import { Arrow } from 'pkg.icons.arrow';
import { SizesT, TypesT, ItemT, GroupT } from './types';
import {
  selectSizes,
  selectTypes,
  MenuProps,
  selectClasses,
  placeholderIconSizes,
  placeholderTextSizes,
  dividerStyles,
  menuItemStyles,
} from './style';

export type SelectProps = {
  /* unique id */
  id: string;
  /* select items */
  items?: ItemT[];
  /* select items divided by groups */
  groups?: GroupT[];
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

const OpenIcon = (isOpen: boolean, size: SizesT, isDisabled: boolean, onClick: () => void) => (
  <Stack
    justifyContent="center"
    alignItems="center"
    onClick={onClick}
    sx={{ height: '100%', cursor: 'pointer', pointerEvents: isDisabled ? 'none' : '' }}
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
  groups,
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

  const setDefaultValue = () => {
    const ITEMS: ItemT[] = [];
    if (groups) {
      groups.forEach((group) => group.items.forEach((item) => ITEMS.push(item)));
    }

    if (items) {
      ITEMS.push(...items);
    }

    const defaultItem = ITEMS.filter((item) => item.isDefault);
    changeValue(defaultItem[0].value);
  };

  useEffect(() => {
    setDefaultValue();
  }, []);

  return (
    <ClickAwayListener onClickAway={onCloseMenu}>
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
          IconComponent={() => OpenIcon(isOpen, size, type === 'disabled', handleDropIconClick)}
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
                ...dividerStyles,
                position: 'relative',
                mb: '5px',
              }}
            >
              {cancelItem}
            </MenuItem>
          )}

          {/* items list / dropdown menu  */}
          {items &&
            items.map((item) => (
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
          {groups &&
            groups.map((group) => [
              <Typography
                sx={{
                  fontSize: '10px',
                  lineHeight: '14px',
                  color: 'grayscale.40',
                  p: '4px 12px',
                  cursor: 'default',
                }}
              >
                {group.title}
              </Typography>,
              group.items.map((item, index, array) => {
                const divider = index === array.length - 1 ? dividerStyles : {};
                return (
                  <MenuItem
                    value={item.value}
                    key={item.id}
                    disabled={item.isDisabled}
                    sx={{
                      ...menuItemStyles,
                      ...divider,
                    }}
                  >
                    {item.value}
                  </MenuItem>
                );
              }),
            ])}
        </MuiSelect>
      </FormControl>
    </ClickAwayListener>
  );
};
