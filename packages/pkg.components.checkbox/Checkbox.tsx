import { FormControlLabel, Checkbox as MuiCheckbox, Box } from '@mui/material';
import { Check } from 'pkg.icons.check';

import { CheckboxTypesS, CheckedCheckboxTypesS, CheckedIconTypesS } from './styles';

type CheckboxTypes = 'warning' | 'error' | 'disabled' | 'default';
export type CheckboxProps = {
  type?: CheckboxTypes;
};

export const Checkbox = ({ type = 'default' }: CheckboxProps) => {
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
  const CheckedIcon = <Check sx={{ ...CheckedIconTypesS[type], fontSize: '20px' }} />;

  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          sx={{
            ...CheckboxTypesS[type],
            '&.Mui-checked': { ...CheckedCheckboxTypesS[type], borderRadius: '4px' },
            padding: 0,
            width: '24px',
            height: '24px',
          }}
          icon={DefaultIcon}
          checkedIcon={CheckedIcon}
        />
      }
      label=""
    />
  );
};
