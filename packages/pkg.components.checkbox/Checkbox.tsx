import { FormControlLabel, Checkbox as MuiCheckbox, Box, Typography } from '@mui/material';
import { Check } from 'pkg.icons.check';

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
export type CheckboxProps = {
  size: ChecboxSizes;
  type?: CheckboxTypes;
  label?: string;

  isChecked?: boolean;
  changeCheckedState: () => void;
};

export const Checkbox = ({
  type = 'default',
  size,
  label = '',
  isChecked = false,
  changeCheckedState,
}: CheckboxProps) => {
  /* icons */
  const DefaultIcon = (
    <Box
      sx={{
        ...DefaultIconTypesS[type],
        border: '1px solid',
        width: '100%',
        height: '100%',
        borderRadius: '4px',
      }}
    />
  );
  const CheckedIcon = <Check sx={{ ...CheckedIconTypesS[type], ...CheckedIconSizesS[size] }} />;

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
          padding: '4px 8px 4px 4px',
          border: '1px solid',
          borderColor: isChecked && type === 'default' ? 'primary.dark' : 'grayscale.5',
        }}
        label={CkecboxLabel}
      />
    )
  );
};
