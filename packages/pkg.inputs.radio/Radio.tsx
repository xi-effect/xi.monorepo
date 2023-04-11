import 'pkg.config.muidts';
import { FormControlLabel, Radio as MuiRadio, Typography } from '@mui/material';
import { ChangeEvent, FC } from 'react';

import { formControlGap, sizesStyle, typographyVariants } from './style';
import { CheckedIcon, Icon } from './StyledRadioIcon';
import { RadioProps } from './types';

export const Radio: FC<RadioProps> = ({
  size = 'large',
  color = 'primary',
  label,
  value = null,
  disabled,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (onChange) {
      onChange(checked, event);
    }
  };

  return (
    <FormControlLabel
      sx={{ m: 0, gap: formControlGap[size] }}
      value={value}
      control={
        <MuiRadio
          disabled={disabled}
          value={value}
          onChange={handleChange}
          disableRipple
          sx={{ p: 0 }}
          checkedIcon={<CheckedIcon color={color} sizes={sizesStyle[size]} />}
          icon={<Icon color={color} sizes={sizesStyle[size]} />}
        />
      }
      label={
        label && (
          <Typography
            sx={{ fontWeight: 400, color: disabled ? 'petersburg.40' : 'petersburg.90' }}
            variant={typographyVariants[size]}
          >
            {label}
          </Typography>
        )
      }
    />
  );
};
