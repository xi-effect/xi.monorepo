import React, { MouseEvent, useMemo } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Eyeoff, Eyeon } from 'pkg.icons';
import { PasswordSizeT, PasswordTypesT } from '../types';

export type AdornmentProps = {
  size: PasswordSizeT;
  toggleShowPassword: () => void;
  showPassword: boolean;
  type: PasswordTypesT;
};

export const Adornment = ({ size, toggleShowPassword, showPassword, type }: AdornmentProps) => {
  const handleClickShowPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleShowPassword();
  };

  const IconSizes = useMemo(() => {
    if (size === 's') {
      return { fontSize: '16px' };
    }
    return { fontSize: '24px' };
  }, [size]);

  return (
    <InputAdornment position="end">
      {type !== 'disabled' && (
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          edge="end"
        >
          {showPassword ? <Eyeoff sx={{ ...IconSizes }} /> : <Eyeon sx={{ ...IconSizes }} />}
        </IconButton>
      )}
    </InputAdornment>
  );
};
