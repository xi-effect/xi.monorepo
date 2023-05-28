import { useState, MouseEvent, ChangeEvent } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { StrengthProgress } from './StrengthProgress';
import { usePasswordStrength } from './PasswordStrength';

export const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { password, updatePassword, strengthValue, error } = usePasswordStrength();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input: any = e.target as HTMLInputElement;
    updatePassword(input.value);
  };

  return (
    <FormControl variant="outlined">
      <Input
        type={showPassword ? 'text' : 'password'}
        value={password ?? ''}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        onChange={handlePasswordChange}
      />

      <StrengthProgress progress={strengthValue} />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
