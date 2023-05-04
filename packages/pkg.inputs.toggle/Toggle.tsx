import 'pkg.config.muidts';
import { ChangeEvent, FC } from 'react';
import { Switch, Stack, Typography } from '@mui/material';
import { colorStyle, sizeStyle, stackGap, typographyVariants } from './style';

export const Toggle: FC<ToggleProps> = ({
  size = 'large',
  checked,
  disabled,
  children,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onChange(checked, event);
  };

  return (
    <Stack direction="row" alignItems="center" gap={stackGap[size]}>
      <Switch
        sx={{
          ...sizeStyle[size].sizes,
          '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            ...sizeStyle[size]['& .MuiSwitch-thumb'],
          },
          '& .MuiSwitch-switchBase': {
            ...sizeStyle[size]['& .MuiSwitch-switchBase'],
            transitionDuration: '300ms',
            '&.Mui-checked': {
              ...sizeStyle[size]['&.Mui-checked'],
              color: colorStyle.checked.color,
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: colorStyle.checked.backgroundColor,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: colorStyle.disabled.backgroundColor,
                opacity: 1,
              },
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: colorStyle.initial.backgroundColor,
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: colorStyle.disabled.color,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              backgroundColor: colorStyle.disabled.backgroundColor,
              opacity: 1,
            },
          },
        }}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      {children && (
        <Typography
          variant={typographyVariants[size]}
          sx={{ fontWeight: 400, color: disabled ? 'petersburg.40' : 'petersburg.90' }}
        >
          {children}
        </Typography>
      )}
    </Stack>
  );
};

export type ToggleProps = {
  size?: 'small' | 'medium' | 'large';
  checked: boolean;
  disabled?: boolean;
  children?: string;
  onChange: (checked: boolean, event?: ChangeEvent<HTMLInputElement>) => void;
};
