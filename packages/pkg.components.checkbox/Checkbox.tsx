import { useState } from 'react';
import { FormControlLabel, Checkbox as MuiCheckbox, Box, Typography } from '@mui/material';
import { Check } from 'pkg.icons.check';
import { Minus } from 'pkg.icons.minus';

import {
  ContainerTypesS,
  CheckboxTypesS,
  CheckedCheckboxTypesS,
  CheckedIconTypesS,
  DefaultIconTypesS,
  ContainerSizesS,
  ChecboxSizesS,
  CheckedIconSizesS,
  LabelSizesS,
} from './styles';

type CheckboxTypes = 'warning' | 'error' | 'disabled' | 'default';
type ChecboxSizes = 's' | 'm' | 'l';
type ChecboxIcons = 'check' | 'minus';
export type CheckboxProps = {
  size: ChecboxSizes;
  type?: CheckboxTypes;
  label?: string;
  /* checbox checked icon */
  icon?: ChecboxIcons;

  /* default checked state */
  isChecked?: boolean;
  changeCheckedState: () => void;
};

export const Checkbox = ({
  type = 'default',
  size,
  label = '',
  icon = 'check',
  isChecked = false,
  changeCheckedState,
}: CheckboxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const onHover = () => {
    setIsHovered(true);
  };
  const onOutOfHover = () => {
    setIsHovered(false);
  };

  /* icons */
  const DefaultIcon = (
    <Box
      sx={{
        ...DefaultIconTypesS[type],
        border: '1px solid',
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        transition: '0.3s',
        bgcolor: isHovered && type !== 'disabled' ? 'grayscale.5' : DefaultIconTypesS[type].bgcolor,
      }}
    />
  );
  const CheckIcon = <Check sx={{ ...CheckedIconTypesS[type], ...CheckedIconSizesS[size] }} />;
  const MinusIcon = <Minus sx={{ ...CheckedIconTypesS[type], ...CheckedIconSizesS[size] }} />;
  const CheckedIcon = icon === 'check' ? CheckIcon : MinusIcon;

  /* label */
  const CkecboxLabel = <Typography sx={{ ...LabelSizesS[size] }}>{label}</Typography>;

  /* checkbox */
  const CustomCheckbox = (
    <MuiCheckbox
      sx={{
        ...CheckboxTypesS[type],
        '&.Mui-checked': { ...CheckedCheckboxTypesS[type], borderRadius: '4px' },
        ...ChecboxSizesS[size],
        padding: 0,
      }}
      icon={DefaultIcon}
      checkedIcon={CheckedIcon}
      checked={isChecked}
      onChange={changeCheckedState}
      disabled={type === 'disabled'}
    />
  );

  return (
    (!label && CustomCheckbox) || (
      <FormControlLabel
        control={CustomCheckbox}
        sx={{
          ...ContainerTypesS[type],
          ...ContainerSizesS[size],
          width: 'max-content',
          height: 'max-content',
          padding: '4px 8px 4px 4px',
          border: '1px solid',
          borderColor: isChecked && type === 'default' ? 'primary.dark' : 'grayscale.5',
          transition: '0.3s',
          bgcolor:
            isHovered && type !== 'disabled' ? 'grayscale.10' : ContainerTypesS[type].bgcolor,
          m: 0,
        }}
        label={CkecboxLabel}
        onMouseEnter={onHover}
        onMouseLeave={onOutOfHover}
      />
    )
  );
};
