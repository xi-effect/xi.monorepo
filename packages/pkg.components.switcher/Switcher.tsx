import 'pkg.config.muidts';
import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';

import {
  buttonSizes,
  typographyVariants,
  buttonStyle,
  buttonBorderRadius,
  groupSizes,
} from './styles';

export const Switcher: FC<SwitcherProps> = ({
  values,
  size = 'large',
  color = 'primary',
  groupBackgroundColor,
  defaultValue,
  disabledValue,
  isError,
  onChangeHandler,
}) => {
  const foundIndex = values.findIndex((value) => value === defaultValue);
  const currentDefaultValue = foundIndex > -1 ? values[foundIndex] : '';

  const [alignment, setAlignment] = useState(currentDefaultValue);

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
    onChangeHandler(newAlignment, event);
  };

  return (
    <ToggleButtonGroup
      sx={{
        border: '2px solid',
        borderColor: isError ? 'error.dark' : 'transparent',
        backgroundColor: groupBackgroundColor || 'transparent',
        ...groupSizes[size],
      }}
      color="primary"
      value={alignment}
      onChange={handleChange}
      exclusive
    >
      {values.map((value, i) => (
        <ToggleButton
          disableFocusRipple
          disableRipple
          disabled={disabledValue === value}
          sx={{
            border: 'none',
            ...buttonSizes[size],
            ...buttonStyle[color],
            ...buttonStyle.default,
            '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
              borderRadius: buttonBorderRadius[size],
              marginLeft: 0,
              borderLeft: 'none',
            },
            '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
              borderRadius: buttonBorderRadius[size],
            },
            borderRadius: buttonBorderRadius[size],
          }}
          key={`${i}`}
          value={value}
        >
          <Typography variant={typographyVariants[size]} sx={{ lineHeight: '0' }}>
            {value}
          </Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

type SwitcherProps = {
  values: string[] | number[];
  size?: 'large' | 'medium' | 'small';
  color?: 'primary' | 'white';
  groupBackgroundColor?: string;
  defaultValue?: string | number;
  disabledValue?: string | number;
  isError?: boolean;
  onChangeHandler: (newAlignment?: string, event?: MouseEvent<HTMLElement>) => void;
};
