import { FormControlLabel, Checkbox as MuiCheckbox, Box } from '@mui/material';
import { Check } from 'pkg.icons.check';

import {
  CheckboxTypesS,
  CheckedCheckboxTypesS,
  CheckedIconTypesS,
  ChecboxSizesS,
  CheckedIconSizesS,
} from './styles';

type CheckboxTypes = 'warning' | 'error' | 'disabled' | 'default';
type ChecboxSizes = 's' | 'm' | 'l';
export type CheckboxProps = {
  size: ChecboxSizes;
  type?: CheckboxTypes;

  isChecked?: boolean;
  changeCheckedState: () => void;
};

export const Checkbox = ({
  type = 'default',
  size,
  isChecked = false,
  changeCheckedState,
}: CheckboxProps) => {
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
      label=""
    />
  );
};
