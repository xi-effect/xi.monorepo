import { FunctionComponent, useState, FC, ChangeEvent } from 'react';
import { MenuItem, Select as MuiSelect, Typography, Stack } from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import { Arrow } from 'pkg.icons';
import { SizesT, TypesT, ItemT, GroupT } from './types';
import {
  selectSizes,
  selectTypes,
  MenuProps,
  selectOverrideClasses,
  placeholderIconSizes,
  placeholderTextSizes,
  dividerStyles,
  menuItemStyles,
} from './style';

export type SelectProps = {
  /* unique id */
  id: string;
  /*
    use items when linear array of items
    or otherwise use groups
  */
  /* select items */
  items?: ItemT[];
  /* select items divided by groups */
  groups?: GroupT[];
  /* cancel your previus choose  */
  cancelItem?: string;
  /* select sized */
  size?: SizesT;
  type?: TypesT;
  /* select custom width */
  width?: string;
  label?: string;
  /* Icon in placeholder */
  Icon?: FunctionComponent<any>;
  /* dropdown menu max height */
  maxHeight?: string;

  /* selected value */
  value: string[];
  /* change selected value */
  onChange: (e: ChangeEvent<Element>) => void;
  sx?: any;
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
        color: 'petersburg.80',
        transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
        fontSize: size === 'm' ? '14px' : '11px',
      }}
    />
  </Stack>
);

export const Select: FC<SelectProps> = ({
  id,
  items,
  groups,
  cancelItem,
  size = 'm',
  type = 'default',
  width = '250px',
  maxHeight = '300px',
  label = 'Выберите',
  Icon,
  value,
  onChange,
  sx,
}: SelectProps) => {
  const [isOpened, setIsOpened] = useState(false);

  /* menu interactions */
  const onToggleMenu = () => {
    setIsOpened((prev) => !prev);
  };
  const onCloseMenu = () => {
    setIsOpened(false);
  };
  const handleDropIconClick = () => {
    setIsOpened((state) => !state);
  };

  /* select value interactions */
  const onChangeValue = (e: any) => {
    // const newValue = e.target.value;
    onChange(e);
  };

  const isDisabled = type === 'disabled';

  return (
    <ClickAwayListener onClickAway={onCloseMenu}>
      {/* <FormControl sx={{ position: 'relative' }}> */}
      <MuiSelect
        labelId={id}
        sx={{
          ...selectSizes[size],
          border: '1.5px solid',
          ...selectTypes[type],
          width,
          transition: '0.3s',
          outline: 'none',
          ...selectOverrideClasses,
          ...sx,
        }}
        disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onChange={onChangeValue}
        value={value[0]}
        MenuProps={{ sx: { ...MenuProps(maxHeight) } }}
        displayEmpty
        IconComponent={() => OpenIcon(isOpened, size, isDisabled, handleDropIconClick)}
        onClose={onCloseMenu}
        onOpen={onToggleMenu}
        open={isOpened}
      >
        {/* placeholder */}
        <MenuItem value="" sx={{ display: 'none' }} key="disabled_item" defaultChecked>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ width: '110%' }}>
            {Icon && (
              <Icon
                sx={{
                  ...placeholderIconSizes[size],
                  color: 'petersburg.40',
                }}
              />
            )}
            <Typography
              sx={{
                ...placeholderTextSizes[size],
                color: 'petersburg.40',
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
              {item.label ?? item.value}
            </MenuItem>
          ))}
        {groups &&
          groups.map((group, groupIndex, groupArray) => [
            <Typography
              sx={{
                fontSize: '10px',
                lineHeight: '14px',
                color: 'petersburg.40',
                p: !group.title ? '' : '4px 12px',
                cursor: 'default',
              }}
            >
              {group.title}
            </Typography>,
            group.items.map((item, index, array) => {
              const isLastGroup = groupIndex === groupArray.length - 1;
              const divider = index === array.length - 1 && !isLastGroup ? dividerStyles : {};
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
                  {item.label ?? item.value}
                </MenuItem>
              );
            }),
          ])}
      </MuiSelect>
      {/* </FormControl> */}
    </ClickAwayListener>
  );
};
