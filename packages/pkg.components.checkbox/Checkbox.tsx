import { FormControlLabel, Checkbox as MuiCheckbox, Box, Typography } from '@mui/material';
import { Check } from 'pkg.icons.check';

import {
  CheckboxTypesS,
  CheckedCheckboxTypesS,
  CheckedIconTypesS,
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
        width: '100%',
        height: '100%',
        border: '1px solid',
        borderRadius: '4px',
        borderColor: (type === 'disabled' && 'grayscale.10') || '',
      }}
    />
  );
  const CheckedIcon = <Check sx={{ ...CheckedIconTypesS[type], ...CheckedIconSizesS[size] }} />;

  /* label */
  const CkecboxLabel = <Typography sx={{ ...LabelSizesS[size] }}>{label}</Typography>;

  return (
    <FormControlLabel
      control={
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
        />
      }
      sx={{ ...ContainerSizesS[size] }}
      label={CkecboxLabel}
    />
  );
};
